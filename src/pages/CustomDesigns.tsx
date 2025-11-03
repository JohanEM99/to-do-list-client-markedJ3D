// ========================================
// src/pages/CustomDesigns/CustomDesigns.tsx
// ========================================
import '../styles/CustomDesigns.scss';

const CustomDesigns = () => {
  return (
    <div className="custom-designs">
      <section className="custom-hero">
        <div className="container">
          <h1>Custom Designs</h1>
          <p>Tailored 3D printing solutions for your business</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-column">
            <div className="content-box">
              <h2>Custom 3D Printed Solutions</h2>
              <p>
                Using 3D printing technology, 3DTechne can quickly design and produce 
                customized parts specific for your business.
              </p>
              <p>
                Designing new 3D printed products is an attractive option to companies 
                within many industries since it's faster and more cost-effective to 
                produce when compared to traditional methods.
              </p>
              <p>
                Besides that, we have a quick turnaround time on orders and don't 
                require a minimum volume for production. Therefore, clients can order 
                how many parts they want at any time.
              </p>
            </div>
            
            <div className="image-box">
              <div className="image-placeholder">🎨</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDesigns;