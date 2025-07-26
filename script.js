// Mobile Navigation
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    function myKursi(){
    document.getElementById("myDropdown-kursi").classList.toggle("show");

    }
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });

    

// Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }

        if (!event.target.matches('.dropbtn-kursi')) {
            let dropdowns = document.getElementsByClassName("dropdown-kursi");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
        
        }
});




// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product Modal
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');

function openModal(productType) {
    const modalContent = document.getElementById('modalContent');
    const productDetails = getProductDetails(productType);
    
    modalContent.innerHTML = `
        <h2>${productDetails.title}</h2>
        <img src="${productDetails.image}" alt="${productDetails.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;">
        <p>${productDetails.description}</p>
        <div style="margin: 20px 0;">
            <h3>Spesifikasi:</h3>
            <ul>
                ${productDetails.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
        <div style="margin: 20px 0;">
            <h3>Harga:</h3>
            <p style="font-size: 1.2rem; font-weight: bold; color: var(--accent-color);">${productDetails.price}</p>
        </div>
        <button class="btn btn-order" onclick="orderWhatsApp('${productDetails.title}')">
            <i class="fab fa-whatsapp"></i> Pesan Sekarang
        </button>
    `;
    
    modal.style.display = 'block';
}

function getProductDetails(productType) {
    const products = {
        panggung: {
            title: 'Panggung & Stage',
            image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Panggung portable berkualitas tinggi untuk berbagai jenis acara. Dilengkapi dengan struktur yang kuat dan aman.',
            specs: [
                'Ukuran: 4x6m, 6x8m, 8x12m',
                'Tinggi: 0.6m - 1.2m (adjustable)',
                'Material: Aluminium frame dengan plywood',
                'Kapasitas: hingga 500kg/m²',
                'Setup time: 2-4 jam',
                'Termasuk tangga dan railing'
            ],
            price: 'Mulai Rp 500.000/hari'
        },
        tenda: {
            title: 'Tenda & Canopy',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Tenda pesta dan canopy berkualitas untuk melindungi acara outdoor Anda dari cuaca.',
            specs: [
                'Ukuran: 3x3m hingga 20x30m',
                'Material: Tarpaulin waterproof',
                'Frame: Galvanized steel',
                'Tahan angin: hingga 60km/h',
                'Pilihan warna: Putih, Biru, Merah',
                'Termasuk dinding samping'
            ],
            price: 'Mulai Rp 300.000/hari'
        },
        kursi: {
            title: 'Kursi & Meja',
            image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Berbagai jenis kursi dan meja untuk acara formal dan informal dengan kualitas premium.',
            specs: [
                'Kursi Tiffany (Gold, Silver, White)',
                'Kursi Chiavari (Wood, Resin)',
                'Meja bundar: 120cm, 150cm, 180cm',
                'Meja persegi: 120x120cm, 180x90cm',
                'Material: High-grade plastic/wood',
                'Kapasitas meja: 8-12 orang'
            ],
            price: 'Mulai Rp 15.000/pcs'
        },
        sound: {
            title: 'Sound System',
            image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Sistem audio profesional dengan kualitas suara crystal clear untuk semua jenis acara.',
            specs: [
                'Speaker: 1000W - 5000W',
                'Microphone: Wireless & Wired',
                'Mixer: Digital 16-32 channel',
                'Coverage: hingga 1000 orang',
                'Backup power: UPS included',
                'Operator profesional'
            ],
            price: 'Mulai Rp 750.000/hari'
        },
        lighting: {
            title: 'Lighting & Dekorasi',
            image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Sistem pencahayaan dan dekorasi untuk menciptakan suasana yang sempurna.',
            specs: [
                'LED PAR light (RGB)',
                'Moving head lights',
                'Backdrop & Truss system',
                'Fog machine & Haze',
                'DMX controller',
                'Custom decoration'
            ],
            price: 'Mulai Rp 400.000/hari'
        },
        catering: {
            title: 'Peralatan Catering',
            image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Peralatan catering lengkap untuk melayani makanan dengan cara yang profesional.',
            specs: [
                'Chafing dish (Round & Rectangular)',
                'Beverage dispenser',
                'Serving trays & utensils',
                'Food warmer',
                'Ice bucket & cooler',
                'Table skirting'
            ],
            price: 'Mulai Rp 50.000/pcs'
        }
    };
    
    return products[productType] || products.panggung;
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// WhatsApp Order Function
function orderWhatsApp(productName) {
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo EventPro, saya tertarik dengan ${productName}. Mohon informasi lebih lanjut mengenai harga dan ketersediaan. Terima kasih.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Contact Form Handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        eventType: document.getElementById('eventType').value,
        eventDate: document.getElementById('eventDate').value,
        guests: document.getElementById('guests').value,
        message: document.getElementById('message').value
    };
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.eventType || !formData.eventDate || !formData.guests) {
        alert('Mohon lengkapi semua field yang wajib diisi.');
        return;
    }
    
    // Format message for WhatsApp
    const whatsappMessage = `
*BOOKING REQUEST*

Nama: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Tidak diisi'}
Jenis Acara: ${formData.eventType}
Tanggal Acara: ${formData.eventDate}
Jumlah Tamu: ${formData.guests} orang
Detail Kebutuhan: ${formData.message || 'Tidak ada detail tambahan'}

Mohon konfirmasi ketersediaan dan penawaran harga. Terima kasih!
    `.trim();
    
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Form telah dikirim! Anda akan diarahkan ke WhatsApp.');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(25px)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
    
    // Update scroll progress
    if (scrollProgress) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

// Animate on scroll (simple implementation)
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .service-card, .gallery-item, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .service-card, .gallery-item, .contact-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    // Add scroll progress indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(scrollIndicator);
});

window.addEventListener('scroll', animateOnScroll);

// Initial animation check
animateOnScroll();

// Enhanced modal animations
function openModal(productType) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    const productDetails = getProductDetails(productType);
    
    modalContent.innerHTML = `
        <h2 style="background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${productDetails.title}</h2>
        <img src="${productDetails.image}" alt="${productDetails.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 16px; margin: 20px 0; box-shadow: var(--shadow-lg);">
        <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-light);">${productDetails.description}</p>
        <div style="margin: 30px 0;">
            <h3 style="color: var(--text-dark); margin-bottom: 15px;">Spesifikasi:</h3>
            <ul style="list-style: none; padding: 0;">
                ${productDetails.specs.map(spec => `
                    <li style="padding: 8px 0; color: var(--text-light); position: relative; padding-left: 25px;">
                        <span style="position: absolute; left: 0; color: var(--primary-color); font-weight: bold;">✓</span>
                        ${spec}
                    </li>
                `).join('')}
            </ul>
        </div>
        <div style="margin: 30px 0; padding: 20px; background: var(--bg-light); border-radius: 12px; border-left: 4px solid var(--primary-color);">
            <h3 style="color: var(--text-dark); margin-bottom: 10px;">Harga:</h3>
            <p style="font-size: 1.4rem; font-weight: bold; background: var(--gradient-secondary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0;">${productDetails.price}</p>
        </div>
        <button class="btn btn-order" onclick="orderWhatsApp('${productDetails.title}')" style="margin-top: 20px;">
            <i class="fab fa-whatsapp"></i> Pesan Sekarang
        </button>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Enhanced close modal
function closeModalHandler() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

document.querySelector('.close').addEventListener('click', closeModalHandler);

window.addEventListener('click', function(e) {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Enhanced form validation with better UX
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        eventType: document.getElementById('eventType').value,
        eventDate: document.getElementById('eventDate').value,
        guests: document.getElementById('guests').value,
        message: document.getElementById('message').value
    };
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.eventType || !formData.eventDate || !formData.guests) {
        // Show error with better styling
        showNotification('Mohon lengkapi semua field yang wajib diisi.', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Simulate processing delay for better UX
    setTimeout(() => {
        // Format message for WhatsApp
        const whatsappMessage = `
*BOOKING REQUEST*

Nama: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Tidak diisi'}
Jenis Acara: ${formData.eventType}
Tanggal Acara: ${formData.eventDate}
Jumlah Tamu: ${formData.guests} orang
Detail Kebutuhan: ${formData.message || 'Tidak ada detail tambahan'}

Mohon konfirmasi ketersediaan dan penawaran harga. Terima kasih!
        `.trim();
        
        const phoneNumber = '6281234567890';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('Form berhasil dikirim! Anda akan diarahkan ke WhatsApp.', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1000);
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-xl);
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
    } else {
        notification.style.background = 'var(--gradient-primary)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}