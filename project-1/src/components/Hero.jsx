import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <main className="container hero-section" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="hero-content" style={{ flex: 1, paddingRight: '20px' }}>
        <h1 style={{ fontSize: '64px', fontWeight: 800, lineHeight: '70px', color: '#000', marginBottom: '20px' }}>
          YOUR FEET DESERVE THE BEST
        </h1>
        <p style={{ color: '#2e2e2e', fontWeight: 600, fontSize: '15px', maxWidth: '400px', marginBottom: '28px', lineHeight: '22px' }}>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <Link to="/menu"><button style={{ fontSize: '16px', padding: '10px 22px' }}>Shop Now</button></Link>
          <button className="secondary-btn" style={{ fontSize: '16px', padding: '10px 22px' }}>Category</button>
        </div>
        <div className="shopping">
          <p style={{ fontSize: '14px', marginBottom: '8px', color: '#2e2e2e', fontWeight: 500 }}>Also Available On</p>
          <div className="brand-icons" style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>🛒 Flipkart</span>
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>📦 Amazon</span>
          </div>
        </div>
      </div>
      
      {/* Hero Shoe Image */}
      <div className="hero-image" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <img 
          src="/images/hero-image.png" 
          alt="Nike Hero Shoe" 
          style={{ width: '100%', maxWidth: '460px', height: 'auto', objectFit: 'contain' }} 
        />
      </div>
    </main>
  );
}