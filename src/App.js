import React, { useState } from "react";
import axios from "axios";

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const placeOrder = async () => {
    setLoading(true);
    setError("");
    setResponse("");
    try {
      //const res = await axios.get("http://localhost:8080/order/place");
      const res = await axios.get(
        "https://order-service-sqgt.onrender.com/order/place"
      );
      setResponse(res.data);
    } catch (err) {
      setError("Failed to place the order, Is the Spring Boot App running ?");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Order Placement</h1>
      <button
        onClick={placeOrder}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded shadow">
          {response}
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded shadow">
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
