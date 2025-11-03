// ========================================
// src/pages/Products/Products.tsx
// ========================================
import '../styles/pages/Products.scss';

const Products = () => {
  return (
    <div className="products">
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Explore our range of 3D printed solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Product Catalog</h2>
          <p className="intro-text">
            Don't find what you need? We will custom create it for you. You will love it.
          </p>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-placeholder">📦</div>
              <h3>Custom Parts</h3>
              <p>Customized replacement parts for machinery</p>
            </div>
            
            <div className="product-card">
              <div className="product-image-placeholder">🔧</div>
              <h3>Industrial Components</h3>
              <p>High-quality industrial components</p>
            </div>
            
            <div className="product-card">
              <div className="product-image-placeholder">⚙️</div>
              <h3>Prototypes</h3>
              <p>Rapid prototyping solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;