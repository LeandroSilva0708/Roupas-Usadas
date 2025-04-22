// Elementos DOM
document.addEventListener('DOMContentLoaded', function() {
    // Elementos de produtos
    const productsGrid = document.getElementById('products-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Elementos de filtro
    const categoryFilter = document.getElementById('category-filter');
    const conditionFilter = document.getElementById('condition-filter');
    
    // Elementos do modal
    const productModal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');
    const overlay = document.getElementById('overlay');
    
    // Elementos do slider de depoimentos
    const testimonialSlider = document.getElementById('testimonials-slider');
    const prevTestimonial = document.getElementById('prev-testimonial');
    const nextTestimonial = document.getElementById('next-testimonial');
    
    // Elementos de navegação mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Variáveis de estado
    let currentPage = 1;
    let productsPerPage = 8;
    let filteredProducts = [...products];
    let currentTestimonial = 0;
    
    // Inicialização
    init();
    
    // Função de inicialização
    function init() {
        renderProducts();
        setupEventListeners();
    }
    
    // Configuração de event listeners
    function setupEventListeners() {
        // Eventos de filtro
        categoryFilter.addEventListener('change', applyFilters);
        conditionFilter.addEventListener('change', applyFilters);
        
        // Eventos de produtos
        loadMoreBtn.addEventListener('click', loadMoreProducts);
        
        // Eventos do modal
        closeModal.addEventListener('click', closeProductModal);
        overlay.addEventListener('click', closeOverlay);
        
        // Eventos do slider de depoimentos
        prevTestimonial.addEventListener('click', showPrevTestimonial);
        nextTestimonial.addEventListener('click', showNextTestimonial);
        
        // Eventos de navegação mobile
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Renderização de produtos
    function renderProducts(page = 1) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToRender = filteredProducts.slice(start, end);
        
        if (page === 1) {
            productsGrid.innerHTML = '';
        }
        
        productsToRender.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Atualizar visibilidade do botão "Carregar Mais"
        if (end >= filteredProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
    
    // Criar card de produto
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = product.id;
        
        let badgeHTML = '';
        if (product.isNew) {
            badgeHTML = '<span class="product-badge badge-new">Novo</span>';
        } else if (product.isSale) {
            badgeHTML = `<span class="product-badge badge-sale">-${product.discount}%</span>`;
        }
        
        let conditionClass = '';
        if (product.condition === 'like-new') {
            conditionClass = 'condition-like-new';
        } else if (product.condition === 'very-good') {
            conditionClass = 'condition-very-good';
        } else if (product.condition === 'good') {
            conditionClass = 'condition-good';
        }
        
        productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-img">
                <img src="images/${product.images[0]}" alt="${product.title}">
                <div class="product-actions">
                    <button class="product-action-btn quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn share-whatsapp" data-id="${product.id}">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">R$ ${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-meta">
                    <div class="product-condition">
                        <span class="condition-dot ${conditionClass}"></span>
                        ${product.conditionText}
                    </div>
                    <div class="product-size">Tam: ${product.size}</div>
                </div>
                <button class="share-btn" data-id="${product.id}">
                    <i class="fab fa-whatsapp"></i> Tenho Interesse
                </button>
            </div>
        `;
        
        // Adicionar event listeners
        productCard.querySelector('.quick-view').addEventListener('click', () => openProductModal(product.id));
        productCard.querySelector('.share-whatsapp').addEventListener('click', () => shareProduct(product.id));
        productCard.querySelector('.share-btn').addEventListener('click', () => shareProduct(product.id));
        
        return productCard;
    }
    
    // Obter nome da categoria
    function getCategoryName(categorySlug) {
        const categories = {
            'women': 'Feminino',
            'men': 'Masculino',
            'kids': 'Infantil',
            'accessories': 'Acessórios'
        };
        
        return categories[categorySlug] || categorySlug;
    }
    
    // Aplicar filtros
    function applyFilters() {
        const categoryValue = categoryFilter.value;
        const conditionValue = conditionFilter.value;
        
        // Filtrar por categoria
        if (categoryValue === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.category === categoryValue);
        }
        
        // Filtrar por condição
        if (conditionValue !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.condition === conditionValue);
        }
        
        // Resetar paginação e renderizar produtos
        currentPage = 1;
        renderProducts(currentPage);
    }
    
    // Carregar mais produtos
    function loadMoreProducts() {
        currentPage++;
        renderProducts(currentPage);
    }
    
    // Compartilhar produto
    function shareProduct(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        // Criar mensagem para WhatsApp
        const message = `Olá! Tenho interesse neste produto: ${product.title} - R$ ${product.price.toFixed(2)} - Tamanho: ${product.size} - Condição: ${product.conditionText}`;
        
        // Criar URL para WhatsApp
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        
        // Abrir WhatsApp em nova janela
        window.open(whatsappUrl, '_blank');
    }
    
    // Abrir modal de produto
    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        let thumbnailsHTML = '';
        product.images.forEach((image, index) => {
            thumbnailsHTML += `
                <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-image="images/${image}">
                    <img src="images/${image}" alt="${product.title}">
                </div>
            `;
        });
        
        let featuresHTML = '';
        product.features.forEach(feature => {
            featuresHTML += `<li>${feature}</li>`;
        });
        
        let conditionClass = '';
        if (product.condition === 'like-new') {
            conditionClass = 'condition-like-new';
        } else if (product.condition === 'very-good') {
            conditionClass = 'condition-very-good';
        } else if (product.condition === 'good') {
            conditionClass = 'condition-good';
        }
        
        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-images">
                    <div class="product-main-image">
                        <img src="images/${product.images[0]}" alt="${product.title}" id="main-product-image">
                    </div>
                    <div class="product-thumbnails">
                        ${thumbnailsHTML}
                    </div>
                </div>
                <div class="product-detail-info">
                    <h2>${product.title}</h2>
                    <div class="product-detail-meta">
                        <div class="product-detail-condition">
                            <span class="condition-dot ${conditionClass}"></span>
                            ${product.conditionText}
                        </div>
                        <div class="product-detail-brand">
                            <strong>Marca:</strong> ${product.brand}
                        </div>
                    </div>
                    <div class="product-detail-price">
                        <span class="product-detail-current-price">R$ ${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="product-detail-original-price">R$ ${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-detail-description">
                        <h3>Descrição</h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-detail-features">
                        <h3>Características</h3>
                        <ul>
                            ${featuresHTML}
                        </ul>
                    </div>
                    <div class="product-detail-size">
                        <h3>Tamanho</h3>
                        <div class="size-options">
                            <div class="size-option active">${product.size}</div>
                        </div>
                    </div>
                    <div class="product-detail-actions">
                        <button class="share-product-btn" data-id="${product.id}">
                            <i class="fab fa-whatsapp"></i> Tenho Interesse
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Adicionar event listeners
        const thumbnails = modalBody.querySelectorAll('.product-thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const imageSrc = this.dataset.image;
                document.getElementById('main-product-image').src = imageSrc;
                
                // Atualizar classe ativa
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        const shareBtn = modalBody.querySelector('.share-product-btn');
        shareBtn.addEventListener('click', () => {
            shareProduct(product.id);
            closeProductModal();
        });
        
        // Mostrar modal
        productModal.classList.add('active');
        overlay.classList.add('active');
    }
    
    // Fechar modal de produto
    function closeProductModal() {
        productModal.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    // Fechar overlay
    function closeOverlay() {
        productModal.classList.remove('active');
        overlay.classList.remove('active');
        mainNav.classList.remove('active');
    }
    
    // Toggle menu mobile
    function toggleMobileMenu() {
        mainNav.classList.toggle('active');
        if (mainNav.classList.contains('active')) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
    
    // Slider de depoimentos
    function showTestimonial(index) {
        const testimonialWidth = testimonialSlider.offsetWidth;
        testimonialSlider.style.transform = `translateX(-${index * testimonialWidth}px)`;
        currentTestimonial = index;
    }
    
    function showNextTestimonial() {
        const maxIndex = testimonials.length - 1;
        const nextIndex = currentTestimonial < maxIndex ? currentTestimonial + 1 : 0;
        showTestimonial(nextIndex);
    }
    
    function showPrevTestimonial() {
        const maxIndex = testimonials.length - 1;
        const prevIndex = currentTestimonial > 0 ? currentTestimonial - 1 : maxIndex;
        showTestimonial(prevIndex);
    }
    
    // Iniciar slider de depoimentos automaticamente
    setInterval(showNextTestimonial, 5000);
    
    // Adicionar funcionalidade para formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Obrigado por se inscrever! Você receberá nossas novidades no e-mail: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
});

// Adicionar estilos para notificação
const style = document.createElement('style');
style.textContent = `
    .testimonials-slider {
        display: flex;
        transition: transform 0.5s ease;
    }
    
    .testimonial {
        min-width: 100%;
    }
`;
document.head.appendChild(style);
