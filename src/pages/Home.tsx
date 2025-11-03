// ========================================
// src/pages/Home/Home.tsx
// ========================================
import '../styles/pages/Home.scss';

const Home = () => {
  const values = [
    {
      id: 1,
      icon: '💡',
      title: 'Innovation',
      description: 'We integrate with each client\'s business and constantly seek ways to promote improvements.'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Customer First',
      description: 'We understand that our clients are the reason for our success, and we are committed to positively addressing their needs.'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Agility',
      description: 'We aim to deliver our products at a fast pacing rhythm, knowing time is essential for better business performance.'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Trust',
      description: 'We seek to deliver the highest quality in every service we provide to our clients, being a reliable partner.'
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: '⭐',
      title: 'High Quality + Cost Effective',
      description: 'We use 3D printing technology for manufacturing high-quality, cost-effective customized items that increase machinery life span.'
    },
    {
      id: 2,
      icon: '🛠️',
      title: 'You Have Our Support',
      description: 'We help businesses keep operating even when their machinery needs replacement parts that are hard to find or discontinued.'
    },
    {
      id: 3,
      icon: '⏱️',
      title: 'Turnaround Time',
      description: 'We have a quick turnaround time on orders and don\'t require a minimum volume for production.'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Innovative Thinking',
      description: 'We have the solutions to help your business generate business.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>3D Printing Solutions</h1>
          <p>We are on a mission to provide 3D printing services to help your business generate business.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">What We Believe In</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making the Difference Section */}
      <section className="section making-difference">
        <div className="container">
          <div className="difference-content">
            <div className="difference-icon">🎯</div>
            <h2>Making The Difference</h2>
            <p>We believe in technology as an essential tool to help businesses thrive and succeed.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose 3D Techne</h2>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Couldn't find what you need yet?</h2>
          <p>No Problem!</p>
          <p>The turnaround time to design and produce new products is really quick.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;