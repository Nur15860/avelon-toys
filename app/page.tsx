import React from 'react';

export default function Home() {
  // ডেমো খেলনার ডাটা
  const toys = [
    { id: 1, name: "টেডি বিয়ার (Teddy Bear)", price: "৳১২০০", img: "🧸" },
    { id: 2, name: "রিমোট কন্ট্রোল কার (RC Car)", price: "৳২৫০০", img: "🚗" },
    { id: 3, name: "লেগো ব্লকস সেট (Lego Blocks)", price: "৳১৮০০", img: "🧱" },
    { id: 4, name: "কিডস ডল হাউস (Doll House)", price: "৳৩০০০", img: "🏠" },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f9f9f9', color: '#333' }}>
      
      {/* হেডার / নেভিগেশন বার */}
      <header style={{ backgroundColor: '#ff6b6b', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Avalon Toys 🧸</h1>
        <p style={{ margin: '5px 0 0', fontSize: '1.1rem' }}>শিশুদের আনন্দের বিশ্বস্ত ঠিকানা</p>
      </header>

      {/* ব্যানার সেকশন */}
      <section style={{ backgroundColor: '#ffe066', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#ff6b6b', marginBottom: '10px' }}>নতুন কালেকশনের খেলনায় আকর্ষণীয় ছাড়! 🎉</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 20px' }}>
          আপনার সোনামণির হাসির জন্য আজই বেছে নিন সেরা এবং নিরাপদ সব খেলনা।
        </p>
        <button style={{ backgroundColor: '#ff6b6b', color: 'white', border: 'none', padding: '12px 25px', fontSize: '1rem', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          সব খেলনা দেখুন
        </button>
      </section>

  {/* প্রোডাক্ট সেকশন */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#4c6ef5', marginBottom: '30px' }}>
          আমাদের সেরা খেলনাসমূহ ✨
        </h3>
           
        {/* প্রোডাক্ট গ্রিড */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {toys.map((toy) => (
            <div key={toy.id} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{toy.img}</div>
              <h4 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{toy.name}</h4>
              <p style={{ fontSize: '1.1rem', color: '#ff6b6b', fontWeight: 'bold', margin: '5px 0 15px' }}>{toy.price}</p>
              <button style={{ backgroundColor: '#4c6ef5', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                কার্টে যোগ করুন
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* ফুটার */}
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p style={{ margin: 0 }}>&copy; ২০২৬ Avalon Toys. সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>

    </div>
  );
}