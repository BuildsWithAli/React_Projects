export default function Location() {
  const stores = [
    { id: 1, city: "Lahore (Flagship Store)", address: "MM Alam Road, Gulberg III", phone: "+92 42 111 222" },
    { id: 2, city: "Karachi", address: "Clifton Block 4, near Ocean Mall", phone: "+92 21 333 444" },
    { id: 3, city: "Islamabad", address: "F-7 Markaz, Safa Gold Mall", phone: "+92 51 555 666" }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px', textAlign: 'left' }}>
      <h1 style={{ color: '#000', marginBottom: '10px' }}>Our Store Locations</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>Visit our official brand outlets across major cities.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {stores.map((store) => (
          <div key={store.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: '#f9f9f9' }}>
            <h3 style={{ fontSize: '20px', color: '#d01c28', marginBottom: '10px' }}>{store.city}</h3>
            <p style={{ color: '#333', marginBottom: '8px' }}><strong>Address:</strong> {store.address}</p>
            <p style={{ color: '#333' }}><strong>Phone:</strong> {store.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}