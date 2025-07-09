const express = require('express');
const path = require('path'); // 'path' modülünü ekleyin
const app = express();
const port = process.env.PORT || 3000; // Render, PORT ortam değişkenini kullanır

// Frontend dosyalarınızın bulunduğu ana dizini belirtin.
// Bu durumda, 'backend' klasöründen bir üst seviyeye çıkıp 'frontend' klasörüne giriyoruz.
const frontendPath = path.join(__dirname, '../frontend');

// Statik dosyaları (HTML, CSS, JS, görseller) sunmak için Express'i yapılandırın
app.use(express.static(frontendPath));

// Ana sayfa için (index.html) bir rota tanımlayın
app.get('/', (req, res) => {
    // index.html dosyasını gönderin
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// products.html sayfası için bir rota tanımlayın
app.get('/products.html', (req, res) => {
    // products.html dosyasını gönderin
    res.sendFile(path.join(frontendPath, 'products.html'));
});

// Eğer başka HTML sayfalarınız varsa, onlar için de benzer rotalar ekleyebilirsiniz:
/*
app.get('/hakkimizda.html', (req, res) => {
    res.sendFile(path.join(frontendPath, 'hakkimizda.html'));
});
app.get('/iletisim.html', (req, res) => {
    res.sendFile(path.join(frontendPath, 'iletisim.html'));
});
*/

// Sunucuyu başlatın
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor!`);
    console.log(`Web siteniz yayında: http://localhost:${port}`);
    console.log('Bu URL Render ortamında farklı olacaktır.');
});