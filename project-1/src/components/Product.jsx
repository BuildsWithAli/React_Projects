import { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shoes')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Loading Dynamic Products...</h2>;
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Our Shoe Menu (API Data)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', background: '#f9f9f9', textAlign: 'left' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.title}</h3>
            <p style={{ color: '#d01c28', fontWeight: 'bold' }}>${item.price}</p>
            <button style={{ marginTop: '10px', width: '100%' }}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}