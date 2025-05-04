document.addEventListener('DOMContentLoaded', () => {
    // Quantity control
    const quantityEl = document.querySelector('.number');
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');

    if (plusBtn && minusBtn && quantityEl) {
        plusBtn.addEventListener('click', () => {
            quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        });

        minusBtn.addEventListener('click', () => {
            if (parseInt(quantityEl.textContent) > 0) {
                quantityEl.textContent = parseInt(quantityEl.textContent) - 1;
            }
        });
    }

    // Cart functionality
    const cartIcon = document.getElementById('cart-icon');
    const cartDetails = document.getElementById('cart-details');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const cartContent = document.getElementById('cart-content');
    const cartCount = document.getElementById('cart-count');

    if (cartIcon && addToCartBtn && cartContent && cartCount) {
        cartIcon.addEventListener('click', () => {
            cartDetails.classList.toggle('hidden');
        });

        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityEl.textContent);
            if (quantity > 0) {
                cartContent.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div>
                            <p>Fall Limited Edition Sneakers</p>
                            <p>$125.00 x ${quantity} <strong>$${(125 * quantity).toFixed(2)}</strong></p>
                        </div>
                        <button id="delete" class="text-red-500">🗑️</button>
                    </div>
                `;
                cartCount.textContent = quantity;
                cartCount.classList.remove('hidden');
            }
        });

        cartContent.addEventListener('click', (e) => {
            if (e.target.id === 'delete') {
                cartContent.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
                cartCount.classList.add('hidden');
            }
        });
    }

    // Lightbox functionality
const mainImage = document.getElementById('main-image');
const lightbox = document.getElementById('lightbox');
const lightboxMain = document.getElementById('lightbox-main');
const closeLightbox = document.getElementById('close-lightbox');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const lightboxThumbs = document.querySelectorAll('.lightbox-thumbnails .thumb');

const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];
let currentImageIndex = 0;

if (mainImage && lightbox && lightboxMain && closeLightbox && prevButton && nextButton) {
    mainImage.addEventListener('click', () => {
        lightbox.classList.remove('hidden');
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    const updateLightboxImage = (index) => {
        lightboxMain.src = images[index];
        lightboxThumbs.forEach(thumb => thumb.classList.remove('active'));
        lightboxThumbs[index].classList.add('active');
        currentImageIndex = index;
    };

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage(currentImageIndex);
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage(currentImageIndex);
    });

    // Lightbox thumbnail click functionality
    lightboxThumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateLightboxImage(index);
        });
    });
}
    // Thumbnail click functionality
    const thumbnails = document.querySelectorAll('.thumb');

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = images[index];
            lightboxMain.src = images[index];
            currentImageIndex = index;
        });
    });
});
