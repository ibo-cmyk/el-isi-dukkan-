// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Tüm thumbnail'lardan 'active' sınıfını kaldır
                thumbnails.forEach(t => t.classList.remove('active'));
                // Tıklanan thumbnail'a 'active' sınıfını ekle
                thumbnail.classList.add('active');
                // Ana görseli, tıklanan thumbnail'ın src'si ile değiştir
                mainImage.src = thumbnail.src;
            });
        });

        // Sayfa yüklendiğinde ilk thumbnail'ı aktif yap
        thumbnails[0].classList.add('active');
    }
});