import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPayment, setShowPayment] = useState(false);

  const products = [
    { id: 1, name: "Handwoven Basket", image: "https://u-mercari-images.mercdn.net/photos/m43384901659_2.jpg", price: "Rs.25" },
    { id: 2, name: "Wooden Mask", image: "https://thepurpleturtles.com/cdn/shop/files/SUJP0571_700x700.jpg?v=1755471777", price: "Rs.40" },
    { id: 3, name: "Beaded Jewelry", image: "https://m.media-amazon.com/images/I/816LXJqP9QL._UY1100_.jpg", price: "Rs.30" },
    { id: 4, name: "Tribal Painting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIirNVAQN3e6J-K5NtNJvRUcaLEN03A-Q4A&s", price: "Rs.35" },
    { id: 5, name: "Clay Pottery", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitAPaaJdaWto_yq_Fg1xnIo5FWRB5Yax4oA&s", price: "Rs.20" },
  ];

  return (
    <div>

      {/* Header */}
      <header className="header">
        <h1>Tribal Treasures</h1>
        <nav>
          <a href="#products">Products</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Empowering Tribes Through Art</h2>
        <p>Buy unique, handcrafted goods and support sustainable livelihoods for tribal artisans.</p>
        <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Handicrafts</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="support" id="support">
        <h2>Support the Cause</h2>
        <p>Your purchase directly supports tribal artisans. You can also donate or partner with us.</p>
        <button onClick={() => setShowPayment(true)}>Payment Options</button>
      </section>

      {/* Payment Box */}
      {showPayment && (
        <div className="payment-box">
          <h3>Payment Options</h3>

          <p><b>UPI ID:</b> tribalstore@upi</p>
          <p><b>Scan & Pay:</b></p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi"
            width="120px"
            alt="QR Code"
          />

          <hr />

          <h4>Card Payment</h4>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry MM/YY" />
          <input type="password" placeholder="CVV" />

          <hr />

          <h4>Net Banking</h4>
          <select>
            <option>Select Bank</option>
            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis Bank</option>
          </select>

          <button className="pay-btn">Proceed to Pay</button>

          <button className="close-btn" onClick={() => setShowPayment(false)}>Close</button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>Contact us: tribalart@support.org | +1 123 456 7890</p>
        <p>&copy; 2025 Tribal Treasures. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
