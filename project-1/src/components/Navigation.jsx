import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="container">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Official brand logo from public folder */}
        <img 
          src="/images/brand_logo.png" 
          alt="Nike Logo" 
          style={{ width: '75px', height: 'auto', objectFit: 'contain' }} 
        />
      </div>
      <ul>
        <li><Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>Menu</Link></li>
        <li><Link to="/location" style={{ textDecoration: 'none', color: 'inherit' }}>Location</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
      </ul>
      <button>Login</button>
    </nav>
  );
}