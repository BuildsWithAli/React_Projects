import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div className="container" style={{ padding: '40px 20px', textAlign: 'left' }}>
      <h1 style={{ color: '#000', marginBottom: '10px' }}>About Nike Brand</h1>
      <p style={{ color: '#555', marginBottom: '25px', fontSize: '18px' }}>
        Discover what drives our passion for innovation and top-tier streetwear design.
      </p>

      {/* Interactive Tabs */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
        <button 
          onClick={() => setActiveTab('story')}
          style={{ background: activeTab === 'story' ? '#d01c28' : '#e5e7eb', color: activeTab === 'story' ? '#fff' : '#333', border: 'none' }}
        >
          Our Story
        </button>
        <button 
          onClick={() => setActiveTab('mission')}
          style={{ background: activeTab === 'mission' ? '#d01c28' : '#e5e7eb', color: activeTab === 'mission' ? '#fff' : '#333', border: 'none' }}
        >
          Mission & Vision
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ border: '1px solid #ccc', padding: '25px', borderRadius: '8px', background: '#f9f9f9' }}>
        {activeTab === 'story' ? (
          <div>
            <h3 style={{ color: '#000', marginBottom: '10px', fontSize: '22px' }}>Built for Performance</h3>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              Project-1 is crafted as an elite showcase combining high-end Nike aesthetics with modern React routing, state hooks, and responsive architecture. We aim to bridge the gap between clean UI and lightning-fast web performance.
            </p>
          </div>
        ) : (
          <div>
            <h3 style={{ color: '#000', marginBottom: '10px', fontSize: '22px' }}>Empowering Every Athlete</h3>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              "If you have a body, you are an athlete." Our mission is to bring inspiration and innovation to every individual looking to elevate their everyday style and physical performance through cutting-edge footwear.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}