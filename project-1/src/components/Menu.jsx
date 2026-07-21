export default function Menu() {
  // Local static data taake bina kisi API delay ya error ke foran show ho
  const products = [
    {
      id: 1,
      title: "Nike Air Max 270",
      price: 150,
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Nike Running Revolution",
      price: 120,
      thumbnail: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Nike Air Force 1",
      price: 110,
      thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Nike Zoom Freak",
      price: 140,
      thumbnail: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ color: '#000', marginBottom: '20px' }}>Our Shoe & Product Menu</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', background: '#f9f9f9', textAlign: 'left' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', background: '#fff' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0', color: '#000' }}>{item.title}</h3>
            <p style={{ color: '#d01c28', fontWeight: 'bold', fontSize: '16px' }}>${item.price}</p>
            <button style={{ marginTop: '10px', width: '100%' }}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}