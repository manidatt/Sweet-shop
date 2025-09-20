import React, { useEffect, useState } from "react";
import api from "../Api";
import "./SweetList.css";

function SweetsList({ isAdmin }) {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState({ name: "", category: "", minprice: "", maxprice: "" });
  const [restockAmount, setRestockAmount] = useState({});
  const [newSweet, setNewSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    imageUrl: ""
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadSweets();
  }, []);

  const loadSweets = async () => {
    try {
      const response = await api.get("/sweets");
      setSweets(response.data);
    } catch (err) {
      console.error("Error loading sweets:", err);
    }
  };

  const handleSearch = async () => {
    try {
      const params = {
        name: search.name || undefined,
        category: search.category || undefined,
        minprice: search.minprice ? Number(search.minprice) : undefined,
        maxprice: search.maxprice ? Number(search.maxprice) : undefined
      };
      const response = await api.get("/sweets/search", { params });
      setSweets(response.data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleAddToCart = (sweet) => {
    setCart((prev) => [...prev, sweet]);
    alert(`${sweet.name} added to cart!`);
  };

  const handleCheckout = async () => {
    try {
      for (let sweet of cart) {
        await api.post(`/sweets/${sweet.id}/purchase`);
      }
      alert("Purchase successful!");
      setCart([]);
      loadSweets();
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/sweets/${id}`);
      alert("Sweet deleted!");
      loadSweets();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleRestock = async (id) => {
    try {
      const amount = restockAmount[id] || 1;
      await api.post(`/sweets/${id}/restock?amount=${amount}`);
      alert(`Sweet restocked by ${amount}!`);
      loadSweets();
    } catch (err) {
      console.error("Restock failed:", err);
    }
  };

  // ✅ Admin: handle input changes
  const handleNewSweetChange = (e) => {
    setNewSweet({ ...newSweet, [e.target.name]: e.target.value });
  };

  // ✅ Admin: handle file upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/sweets/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setNewSweet({ ...newSweet, imageUrl: response.data });
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Upload failed");
    }
  };

  const handleAddSweet = async (e) => {
    e.preventDefault();
    try {
      await api.post("/sweets", newSweet);
      alert("Sweet added successfully!");
      setNewSweet({ name: "", category: "", price: "", quantity: "", imageUrl: "" });
      loadSweets();
    } catch (err) {
      console.error("Failed to add sweet:", err);
      alert("Add sweet failed");
    }
  };

  return (
    <div className="sweets-container">
      <h2>🍬 Available Sweets</h2>

      {/* Search Form */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Name"
          value={search.name}
          onChange={(e) => setSearch({ ...search, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={search.category}
          onChange={(e) => setSearch({ ...search, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={search.minprice}
          onChange={(e) => setSearch({ ...search, minprice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={search.maxprice}
          onChange={(e) => setSearch({ ...search, maxprice: e.target.value })}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={loadSweets}>Reset</button>
      </div>

      {/* Cart */}
      <div className="cart-box">
        <h3>🛒 Your Cart ({cart.length})</h3>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((c, i) => (
                <li key={i}>{c.name} - ${c.price}</li>
              ))}
            </ul>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </>
        ) : (
          <p>No items yet.</p>
        )}
      </div>

      {/* Sweet Cards */}
      <div className="sweets-grid">
        {sweets.map((sweet) => (
          <div key={sweet.id} className="sweet-card">
            <img
              src={sweet.imageUrl || "https://via.placeholder.com/150"}
              alt={sweet.name}
              className="sweet-img"
            />
            <h3>{sweet.name}</h3>
            <p className="category">{sweet.category}</p>
            <p>💲{sweet.price} | Qty: {sweet.quantity}</p>

            <button onClick={() => handleAddToCart(sweet)}>Add to Cart</button>

            {isAdmin && (
              <div className="admin-actions">
                <input
                  type="number"
                  min="1"
                  placeholder="Restock"
                  value={restockAmount[sweet.id] || ""}
                  onChange={(e) =>
                    setRestockAmount({ ...restockAmount, [sweet.id]: e.target.value })
                  }
                />
                <button onClick={() => handleRestock(sweet.id)}>Restock</button>
                <button onClick={() => handleDelete(sweet.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Admin: Add New Sweet */}
      {isAdmin && (
        <div className="add-sweet-form">
          <h3>Add New Sweet</h3>
          <input
            type="text"
            name="name"
            placeholder="Sweet Name"
            value={newSweet.name}
            onChange={handleNewSweetChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newSweet.category}
            onChange={handleNewSweetChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newSweet.price}
            onChange={handleNewSweetChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newSweet.quantity}
            onChange={handleNewSweetChange}
          />
          <input type="file" onChange={handleFileChange} />
          {newSweet.imageUrl && (
            <div className="image-preview">
              <p>Preview:</p>
              <img src={newSweet.imageUrl} alt="Preview" className="preview-img" />
            </div>
          )}
          <button onClick={handleAddSweet}>Add Sweet</button>
        </div>
      )}
    </div>
  );
}

export default SweetsList;
