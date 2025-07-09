const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Render'ın dinamik portunu kullanır, yoksa 3000

// Frontend dosyalarını statik olarak sunar.
// server.js backend klasöründe, frontend klasörü ise bir üst dizinde.
// Bu yüzden path.join(__dirname, '..', 'frontend') kullanıyoruz.
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Ana sayfaya yapılan istekte index.html'i gönderir.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Eğer farklı bir route olursa (örneğin /api gibi), buraya eklenebilir.
// app.get('/api/products', (req, res) => { /* ürünleri veritabanından çekme logic'i */ });

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor!`);
  console.log(`Web siteniz yayında: http://localhost:${port}`); // Yerel test için
});