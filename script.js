document.addEventListener('DOMContentLoaded', () => {
    console.log('Cuervo Tattoo Ink - Web Loaded');
    
    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                // Prevenir comportamiento por defecto solo si es ancla interna
            }
        });
    });

    // Listas de imágenes (Carga Masiva - 200+ imágenes)
    const tattooImages = [
        'cuervo_tattoo.ink/2023-09-03_17-58-21_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-03_17-58-21_UTC_2.jpg',
        'cuervo_tattoo.ink/2023-09-03_18-28-56_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-03_18-28-56_UTC_2.jpg', 'cuervo_tattoo.ink/2023-09-03_18-28-56_UTC_3.jpg',
        'cuervo_tattoo.ink/2023-09-03_19-51-04_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-03_19-51-04_UTC_5.jpg',
        'cuervo_tattoo.ink/2023-09-03_20-06-59_UTC_2.jpg', 'cuervo_tattoo.ink/2023-09-03_20-06-59_UTC_4.jpg',
        'cuervo_tattoo.ink/2023-09-03_23-28-10_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-03_23-28-10_UTC_2.jpg', 'cuervo_tattoo.ink/2023-09-03_23-28-10_UTC_3.jpg', 'cuervo_tattoo.ink/2023-09-03_23-28-10_UTC_4.jpg', 'cuervo_tattoo.ink/2023-09-03_23-28-10_UTC_5.jpg',
        'cuervo_tattoo.ink/2023-09-04_01-01-05_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-04_01-01-05_UTC_2.jpg',
        'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_2.jpg', 'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_3.jpg', 'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_4.jpg', 'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_5.jpg', 'cuervo_tattoo.ink/2023-09-04_01-59-06_UTC_6.jpg',
        'cuervo_tattoo.ink/2023-09-04_02-03-17_UTC.jpg',
        'cuervo_tattoo.ink/2023-09-04_12-14-10_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-04_12-14-10_UTC_3.jpg',
        'cuervo_tattoo.ink/2023-09-04_17-20-25_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-04_17-20-25_UTC_3.jpg', 'cuervo_tattoo.ink/2023-09-04_17-20-25_UTC_4.jpg',
        'cuervo_tattoo.ink/2023-09-05_17-16-40_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-05_17-16-40_UTC_2.jpg',
        'cuervo_tattoo.ink/2023-09-05_17-18-59_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-05_17-18-59_UTC_2.jpg', 'cuervo_tattoo.ink/2023-09-05_17-18-59_UTC_3.jpg', 'cuervo_tattoo.ink/2023-09-05_17-18-59_UTC_4.jpg',
        'cuervo_tattoo.ink/2023-09-05_17-20-37_UTC.jpg',
        'cuervo_tattoo.ink/2023-09-05_17-23-15_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-05_17-23-15_UTC_5.jpg',
        'cuervo_tattoo.ink/2023-09-05_17-25-50_UTC_1.jpg', 'cuervo_tattoo.ink/2023-09-05_17-25-50_UTC_2.jpg',
        'cuervo_tattoo.ink/2023-09-20_10-06-16_UTC.jpg',
        'cuervo_tattoo.ink/2023-12-11_17-03-54_UTC.jpg',
        'cuervo_tattoo.ink/2024-01-13_03-15-30_UTC.jpg',
        'cuervo_tattoo.ink/2024-01-14_01-49-05_UTC_1.jpg', 'cuervo_tattoo.ink/2024-01-14_01-49-05_UTC_2.jpg', 'cuervo_tattoo.ink/2024-01-14_01-49-05_UTC_3.jpg',
        'cuervo_tattoo.ink/2024-03-02_00-00-47_UTC.jpg',
        'cuervo_tattoo.ink/2024-03-27_03-39-55_UTC_1.jpg', 'cuervo_tattoo.ink/2024-03-27_03-39-55_UTC_2.jpg',
        'cuervo_tattoo.ink/2024-05-11_00-48-25_UTC_2.jpg',
        'cuervo_tattoo.ink/2024-06-17_23-14-08_UTC.jpg',
        'cuervo_tattoo.ink/2024-06-17_23-17-13_UTC_1.jpg', 'cuervo_tattoo.ink/2024-06-17_23-17-13_UTC_3.jpg',
        'cuervo_tattoo.ink/2024-06-17_23-23-12_UTC_1.jpg', 'cuervo_tattoo.ink/2024-06-17_23-23-12_UTC_2.jpg', 'cuervo_tattoo.ink/2024-06-17_23-23-12_UTC_3.jpg',
        'cuervo_tattoo.ink/2024-08-08_02-01-49_UTC_1.jpg', 'cuervo_tattoo.ink/2024-08-08_02-01-49_UTC_2.jpg', 'cuervo_tattoo.ink/2024-08-08_02-01-49_UTC_3.jpg',
        'cuervo_tattoo.ink/2024-08-08_02-05-50_UTC_1.jpg', 'cuervo_tattoo.ink/2024-08-08_02-05-50_UTC_2.jpg',
        'cuervo_tattoo.ink/2024-08-08_13-03-04_UTC.jpg',
        'cuervo_tattoo.ink/2024-08-14_22-35-12_UTC_1.jpg',
        'cuervo_tattoo.ink/2024-10-13_00-12-40_UTC.jpg',
        'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_1.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_2.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_3.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_4.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_5.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_6.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_7.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_8.jpg', 'cuervo_tattoo.ink/2024-12-05_21-21-43_UTC_9.jpg',
        'cuervo_tattoo.ink/2024-12-07_22-18-48_UTC.jpg',
        'cuervo_tattoo.ink/2024-12-07_22-21-52_UTC_1.jpg', 'cuervo_tattoo.ink/2024-12-07_22-21-52_UTC_2.jpg', 'cuervo_tattoo.ink/2024-12-07_22-21-52_UTC_3.jpg', 'cuervo_tattoo.ink/2024-12-07_22-21-52_UTC_4.jpg',
        'cuervo_tattoo.ink/2025-08-23_18-02-22_UTC_1.jpg', 'cuervo_tattoo.ink/2025-08-23_18-02-22_UTC_2.jpg',
        'cuervo_tattoo.ink/2025-09-21_20-09-58_UTC.jpg', 'cuervo_tattoo.ink/2025-09-21_20-20-04_UTC.jpg',
        'cuervo_tattoo.ink/2025-11-09_00-01-52_UTC_1.jpg',
        'cuervo_tattoo.ink/WhatsApp%20Image%202026-03-19%20at%2018.28.47.jpeg',
        'cuervo_tattoo.ink/WhatsApp%20Image%202026-03-24%20at%2015.49.55.jpeg',
        'cuervo_tattoo.ink/WhatsApp%20Video%202026-03-24%20at%2015.40.04.mp4'
    ];

    const muralImages = [
        'aquellostiemposacuna/2021-09-30_15-31-34_UTC.jpg',
        'aquellostiemposacuna/2021-09-30_20-04-33_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_10-20-04_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_14-00-44_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_14-01-29_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_14-02-36_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_14-03-06_UTC.jpg',
        'aquellostiemposacuna/2021-10-01_14-03-41_UTC.jpg',
        'aquellostiemposacuna/2021-10-02_23-30-34_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-39-20_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-40-15_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-41-16_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-42-29_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-46-15_UTC.jpg',
        'aquellostiemposacuna/2021-10-04_00-47-48_UTC.jpg',
        'aquellostiemposacuna/2021-10-07_14-44-26_UTC.jpg',
        'aquellostiemposacuna/2021-10-07_14-45-32_UTC.jpg',
        'aquellostiemposacuna/2021-10-07_14-48-41_UTC.jpg',
        'aquellostiemposacuna/2021-10-13_21-02-46_UTC.jpg',
        'aquellostiemposacuna/2021-10-13_21-08-44_UTC.jpg',
        'aquellostiemposacuna/2021-10-13_21-09-59_UTC.jpg',
        'aquellostiemposacuna/2021-10-13_21-15-12_UTC.jpg',
        'aquellostiemposacuna/2021-10-13_21-16-07_UTC.jpg',
        'aquellostiemposacuna/2021-11-22_16-04-36_UTC.jpg',
        'aquellostiemposacuna/2021-11-22_16-10-16_UTC.jpg',
        'aquellostiemposacuna/2021-11-22_16-12-30_UTC.jpg',
        'aquellostiemposacuna/2021-11-22_16-14-39_UTC.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_1.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_2.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_3.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_4.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_5.jpg',
        'aquellostiemposacuna/2022-01-13_02-08-22_UTC_6.jpg',
        'aquellostiemposacuna/2022-03-10_16-16-42_UTC.jpg',
        'aquellostiemposacuna/2022-06-25_02-30-31_UTC_1.jpg',
        'aquellostiemposacuna/2022-06-25_02-30-31_UTC_2.jpg',
        'aquellostiemposacuna/2022-11-08_00-59-17_UTC.jpg',
        'aquellostiemposacuna/2022-12-04_18-29-31_UTC.jpg',
        'aquellostiemposacuna/2023-03-09_23-11-57_UTC_1.jpg',
        'aquellostiemposacuna/2023-03-09_23-11-57_UTC_2.jpg',
        'aquellostiemposacuna/2023-03-09_23-11-57_UTC_3.jpg',
        'aquellostiemposacuna/2023-03-21_00-33-33_UTC.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_1.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_2.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_3.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_4.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_5.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_6.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_7.jpg',
        'aquellostiemposacuna/2024-04-02_23-47-58_UTC_8.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_1.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_2.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_3.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_4.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_5.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_6.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_7.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_8.jpg',
        'aquellostiemposacuna/2024-08-06_09-51-34_UTC_9.jpg',
        'aquellostiemposacuna/2024-10-22_00-44-15_UTC.jpg',
        'aquellostiemposacuna/2024-10-22_00-56-30_UTC.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_1.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_10.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_11.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_12.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_13.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_14.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_15.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_2.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_3.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_4.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_5.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_6.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_7.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_8.jpg',
        'aquellostiemposacuna/2025-05-11_02-07-15_UTC_9.jpg',
        'aquellostiemposacuna/2025-09-15_23-27-52_UTC.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_1.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_2.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_3.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_4.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_5.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_6.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_7.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_8.jpg',
        'aquellostiemposacuna/2025-09-16_00-28-07_UTC_9.jpg'
    ];

    const tattooGallery = document.getElementById('tattoo-gallery');
    const muralGallery = document.getElementById('mural-gallery');

    // Función para mezclar un array (Fisher-Yates)
    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    // Función para renderizar imágenes (9 aleatorias en el grid)
    const renderGallery = (container, images, limit = 9) => {
        if (!container) return;
        container.innerHTML = '';
        
        // Copiamos y mezclamos para no alterar el orden original del carrusel
        const shuffled = shuffleArray([...images]);
        const displaySubset = shuffled.slice(0, limit);
        
        displaySubset.forEach((imgSrc) => {
            const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
            const item = document.createElement('div');
            item.className = 'gallery-item' + (isVideo ? ' video-item' : '');
            
            if (isVideo) {
                item.innerHTML = `<video src="${imgSrc}" muted loop></video><div class="video-overlay"><i class="play-icon">▶</i></div>`;
            } else {
                item.innerHTML = `<img src="${imgSrc}" alt="Trabajo Artístico" loading="lazy">`;
            }
            
            item.addEventListener('click', () => {
                const parentId = container.id;
                currentGallery = parentId === 'tattoo-gallery' ? tattooImages : muralImages;
                
                // Encontrar el índice real en la lista completa para el carrusel
                currentIndex = currentGallery.indexOf(imgSrc);
                
                createThumbnails();
                showImage(currentIndex);
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            container.appendChild(item);
        });
    };

    renderGallery(tattooGallery, tattooImages);
    renderGallery(muralGallery, muralImages);

    // --- Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnailsContainer = document.getElementById('lightbox-thumbnails');
    
    let currentGallery = [];
    let currentIndex = 0;

    // Ya no necesitamos allImages.forEach aquí porque el listener se añade al crear el grid.

    const createThumbnails = () => {
        thumbnailsContainer.innerHTML = '';
        currentGallery.forEach((imgSrc, index) => {
            const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
            const thumb = isVideo ? document.createElement('div') : document.createElement('img');
            
            if (isVideo) {
                thumb.className = 'thumb-item thumb-video';
                thumb.innerHTML = '<span>VID</span>';
            } else {
                thumb.src = imgSrc;
                thumb.className = 'thumb-item';
            }

            thumb.addEventListener('click', () => showImage(index));
            thumbnailsContainer.appendChild(thumb);
        });
    };

    const showImage = (index) => {
        if (index >= 0 && index < currentGallery.length) {
            const imgSrc = currentGallery[index];
            const isVideo = imgSrc.toLowerCase().endsWith('.mp4');
            currentIndex = index;

            lightboxImg.style.display = isVideo ? 'none' : 'block';
            
            // Gestionar Video en Lightbox
            let videoElement = document.getElementById('lightbox-video');
            if (isVideo) {
                if (!videoElement) {
                    videoElement = document.createElement('video');
                    videoElement.id = 'lightbox-video';
                    videoElement.controls = true;
                    videoElement.autoplay = true;
                    lightboxImg.parentNode.appendChild(videoElement);
                }
                videoElement.src = imgSrc;
                videoElement.style.display = 'block';
            } else if (videoElement) {
                videoElement.pause();
                videoElement.style.display = 'none';
            }

            if (!isVideo) lightboxImg.src = imgSrc;

            // Actualizar miniaturas activas
            const thumbs = document.querySelectorAll('.thumb-item');
            thumbs.forEach((t, i) => {
                if (i === index) {
                    t.classList.add('active');
                    t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                } else {
                    t.classList.remove('active');
                }
            });
        }
    };

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = currentGallery.length - 1;
        showImage(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= currentGallery.length) newIndex = 0;
        showImage(newIndex);
    });

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeBtn.click();
        }
    });

    // --- Contact Form Logic (WhatsApp Integration) ---
    const contactForm = document.getElementById('contact-form');
    const whatsappNumber = "5491127525025"; 

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-msg').value;

            const text = `Hola Cuervo Tattoo Ink! 🤘
Me llamo *${name}* (${email}).
Tengo la siguiente propuesta de arte:
_${message}_`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
            contactForm.reset();
        });
    }

    // Control por teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
});
