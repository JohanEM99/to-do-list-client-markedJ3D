// ========================================
// src/pages/About/About.tsx
// ========================================
import '../styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about 3D Techne</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose 3D Printing</h2>
          
          <div className="about-content">
            <p>
              3D printing applications for the consumer and manufacturing markets have 
              opened a new window for the industry to grow, boosting profit for operators. 
              The creation of 3D prototypes is attractive to companies within many industries 
              since it's faster and more cost-effective to produce when compared to 
              traditional methods.
            </p>
            
            <p>
              On the other hand, the shortage in replacement parts significantly impacts 
              business operations daily. Several companies must paralyze their operations 
              when a machine needs a part that is discontinued or hard to find.
            </p>
            
            <p>
              Using 3D printing technology, 3D Techne can quickly design and produce parts 
              that are short on the market, expanding machinery life span.
            </p>
            
            <p>
              It is a win-win situation, where businesses of several industries are able 
              to fill a gap in their productivity routines by embracing a new and 
              sustainable method of production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;