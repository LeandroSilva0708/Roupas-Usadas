// Dados de produtos de exemplo
const products = [
    {
        id: 1,
        title: "Vestido Floral Midi",
        category: "women",
        condition: "like-new",
        conditionText: "Como Novo",
        price: 89.90,
        originalPrice: 199.90,
        discount: 55,
        size: "M",
        brand: "Zara",
        description: "Vestido midi com estampa floral, manga curta e cintura marcada. Perfeito para ocasiões especiais ou uso casual. Usado apenas uma vez, em perfeito estado.",
        features: [
            "Tecido: 100% Viscose",
            "Estampa floral delicada",
            "Fechamento com zíper invisível nas costas",
            "Comprimento midi (abaixo do joelho)",
            "Lavado apenas uma vez"
        ],
        images: ["product-1-1.jpg", "product-1-2.jpg", "product-1-3.jpg"],
        isNew: false,
        isSale: true
    },
    {
        id: 2,
        title: "Blazer Masculino Azul Marinho",
        category: "men",
        condition: "very-good",
        conditionText: "Muito Bom",
        price: 129.90,
        originalPrice: 299.90,
        discount: 57,
        size: "G",
        brand: "Calvin Klein",
        description: "Blazer masculino azul marinho em tecido estruturado. Corte slim fit, ideal para ocasiões formais ou para compor um visual social descontraído.",
        features: [
            "Tecido: 95% Algodão, 5% Elastano",
            "Dois bolsos frontais e um bolso no peito",
            "Forro interno em cetim",
            "Botões em madrepérola",
            "Pequeno desgaste no punho direito (quase imperceptível)"
        ],
        images: ["product-2-1.jpg", "product-2-2.jpg", "product-2-3.jpg"],
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        title: "Calça Jeans Skinny",
        category: "women",
        condition: "good",
        conditionText: "Bom",
        price: 69.90,
        originalPrice: 159.90,
        discount: 56,
        size: "38",
        brand: "Levi's",
        description: "Calça jeans skinny de cintura alta. Modelagem que valoriza a silhueta, com elasticidade para maior conforto. Apresenta leve desbotamento natural pelo uso.",
        features: [
            "Tecido: 98% Algodão, 2% Elastano",
            "Cintura alta",
            "Cinco bolsos",
            "Fechamento com botão e zíper",
            "Leve desbotamento nos joelhos"
        ],
        images: ["product-3-1.jpg", "product-3-2.jpg", "product-3-3.jpg"],
        isNew: false,
        isSale: false
    },
    {
        id: 4,
        title: "Camiseta Básica Branca",
        category: "men",
        condition: "like-new",
        conditionText: "Como Novo",
        price: 39.90,
        originalPrice: 79.90,
        discount: 50,
        size: "M",
        brand: "Hering",
        description: "Camiseta básica branca em algodão pima de alta qualidade. Corte reto, gola redonda. Peça essencial para qualquer guarda-roupa.",
        features: [
            "Tecido: 100% Algodão Pima",
            "Gola redonda reforçada",
            "Costura reforçada nos ombros",
            "Sem estampas ou detalhes",
            "Lavada apenas duas vezes"
        ],
        images: ["product-4-1.jpg", "product-4-2.jpg"],
        isNew: true,
        isSale: false
    },
    {
        id: 5,
        title: "Jaqueta Jeans Oversized",
        category: "women",
        condition: "very-good",
        conditionText: "Muito Bom",
        price: 119.90,
        originalPrice: 249.90,
        discount: 52,
        size: "P",
        brand: "C&A",
        description: "Jaqueta jeans oversized com lavagem clara. Modelo descontraído e versátil, perfeito para compor looks casuais em diversas estações.",
        features: [
            "Tecido: 100% Algodão",
            "Bolsos frontais e no peito",
            "Fechamento com botões metálicos",
            "Punhos com botões",
            "Pequeno detalhe desfiado na barra (proposital)"
        ],
        images: ["product-5-1.jpg", "product-5-2.jpg", "product-5-3.jpg"],
        isNew: false,
        isSale: true
    },
    {
        id: 6,
        title: "Tênis Casual Branco",
        category: "accessories",
        condition: "good",
        conditionText: "Bom",
        price: 79.90,
        originalPrice: 189.90,
        discount: 58,
        size: "39",
        brand: "Adidas",
        description: "Tênis casual branco em couro sintético. Confortável e versátil, combina com diversos looks. Apresenta sinais leves de uso na sola e pequenas marcas na parte externa.",
        features: [
            "Material externo: Couro sintético",
            "Solado em borracha antiderrapante",
            "Cadarço em algodão",
            "Palmilha acolchoada removível",
            "Marcas de uso na parte externa e sola"
        ],
        images: ["product-6-1.jpg", "product-6-2.jpg", "product-6-3.jpg"],
        isNew: false,
        isSale: false
    },
    {
        id: 7,
        title: "Vestido Infantil Estampado",
        category: "kids",
        condition: "like-new",
        conditionText: "Como Novo",
        price: 49.90,
        originalPrice: 99.90,
        discount: 50,
        size: "6 anos",
        brand: "Lilica Ripilica",
        description: "Vestido infantil com estampa de flores e borboletas. Tecido leve e confortável, ideal para dias quentes. Usado apenas duas vezes, em perfeito estado.",
        features: [
            "Tecido: 100% Algodão",
            "Estampa colorida de flores e borboletas",
            "Fechamento com botões nas costas",
            "Cinto de laço na cintura",
            "Praticamente sem sinais de uso"
        ],
        images: ["product-7-1.jpg", "product-7-2.jpg"],
        isNew: true,
        isSale: false
    },
    {
        id: 8,
        title: "Camisa Social Listrada",
        category: "men",
        condition: "very-good",
        conditionText: "Muito Bom",
        price: 69.90,
        originalPrice: 159.90,
        discount: 56,
        size: "M",
        brand: "Dudalina",
        description: "Camisa social masculina com listras finas azuis e brancas. Tecido em algodão egípcio de alta qualidade, corte slim fit. Perfeita para ocasiões formais.",
        features: [
            "Tecido: 100% Algodão Egípcio",
            "Corte slim fit",
            "Botões em madrepérola",
            "Punho para abotoaduras",
            "Pequena marca de caneta no punho interno (não visível quando vestida)"
        ],
        images: ["product-8-1.jpg", "product-8-2.jpg", "product-8-3.jpg"],
        isNew: false,
        isSale: true
    },
    {
        id: 9,
        title: "Bolsa de Couro Marrom",
        category: "accessories",
        condition: "good",
        conditionText: "Bom",
        price: 149.90,
        originalPrice: 399.90,
        discount: 63,
        size: "Único",
        brand: "Arezzo",
        description: "Bolsa de couro legítimo na cor marrom, com alça de ombro ajustável e fechamento por zíper. Espaçosa e elegante, ideal para uso diário.",
        features: [
            "Material: Couro legítimo",
            "Forro interno em tecido",
            "Bolsos internos",
            "Alça ajustável",
            "Sinais de uso na base e pequenos arranhões"
        ],
        images: ["product-9-1.jpg", "product-9-2.jpg", "product-9-3.jpg"],
        isNew: false,
        isSale: true
    },
    {
        id: 10,
        title: "Camiseta Infantil Super-Herói",
        category: "kids",
        condition: "very-good",
        conditionText: "Muito Bom",
        price: 29.90,
        originalPrice: 59.90,
        discount: 50,
        size: "8 anos",
        brand: "Malwee",
        description: "Camiseta infantil com estampa de super-herói. Tecido macio e confortável, ideal para o dia a dia. Cores vibrantes e estampa bem conservada.",
        features: [
            "Tecido: 100% Algodão",
            "Estampa de super-herói",
            "Gola redonda",
            "Manga curta",
            "Leve desbotamento da estampa após lavagens"
        ],
        images: ["product-10-1.jpg", "product-10-2.jpg"],
        isNew: false,
        isSale: false
    },
    {
        id: 11,
        title: "Saia Midi Plissada",
        category: "women",
        condition: "like-new",
        conditionText: "Como Novo",
        price: 79.90,
        originalPrice: 179.90,
        discount: 56,
        size: "P",
        brand: "Renner",
        description: "Saia midi plissada na cor verde esmeralda. Tecido leve com caimento fluido, cintura alta elástica. Peça versátil que pode ser usada em diversas ocasiões.",
        features: [
            "Tecido: Poliéster",
            "Cintura alta elástica",
            "Comprimento midi",
            "Plissado permanente",
            "Usada apenas uma vez"
        ],
        images: ["product-11-1.jpg", "product-11-2.jpg", "product-11-3.jpg"],
        isNew: true,
        isSale: false
    },
    {
        id: 12,
        title: "Bermuda Jeans Masculina",
        category: "men",
        condition: "good",
        conditionText: "Bom",
        price: 59.90,
        originalPrice: 129.90,
        discount: 54,
        size: "42",
        brand: "Reserva",
        description: "Bermuda jeans masculina em lavagem média. Modelo confortável com elastano, comprimento na altura do joelho. Ideal para looks casuais de verão.",
        features: [
            "Tecido: 98% Algodão, 2% Elastano",
            "Cinco bolsos",
            "Fechamento com botão e zíper",
            "Barra desfiada",
            "Leve desbotamento natural pelo uso"
        ],
        images: ["product-12-1.jpg", "product-12-2.jpg"],
        isNew: false,
        isSale: false
    }
];

// Depoimentos
const testimonials = [
    {
        id: 1,
        name: "Ana Silva",
        image: "testimonial-1.jpg",
        rating: 5,
        text: "Encontrei peças incríveis por preços que cabem no meu orçamento. A qualidade é surpreendente!"
    },
    {
        id: 2,
        name: "Carlos Oliveira",
        image: "testimonial-2.jpg",
        rating: 4.5,
        text: "Comprei um blazer seminovo que parecia nunca ter sido usado. Atendimento excelente e entrega rápida!"
    },
    {
        id: 3,
        name: "Mariana Costa",
        image: "testimonial-3.jpg",
        rating: 5,
        text: "Adoro a proposta sustentável e a variedade de peças. Já indiquei para todas as minhas amigas!"
    },
    {
        id: 4,
        name: "Pedro Santos",
        image: "testimonial-4.jpg",
        rating: 4,
        text: "Ótima experiência de compra. As peças chegaram exatamente como descritas no site. Voltarei a comprar com certeza."
    },
    {
        id: 5,
        name: "Juliana Mendes",
        image: "testimonial-5.jpg",
        rating: 5,
        text: "Comprei várias peças para minha filha e todas estavam em excelente estado. Economia garantida sem abrir mão da qualidade!"
    }
];
