# Instruções para Personalização da Landing Page de Roupas Seminovas

## Visão Geral
Este pacote contém uma landing page simplificada para exibição e compartilhamento de roupas seminovas e usadas. A página foi projetada para que os clientes possam visualizar os produtos e enviar o link do produto desejado via WhatsApp.

## Estrutura de Arquivos
- `index.html` - Arquivo principal da página
- `css/styles.css` - Estilos e design da página
- `js/main.js` - Funcionalidades interativas
- `js/products.js` - Dados de produtos de exemplo
- `images/` - Diretório para armazenar as imagens dos produtos

## Como Personalizar

### Imagens
1. Adicione suas próprias imagens de produtos na pasta `images/`
2. Nomeie as imagens de acordo com os nomes referenciados em `js/products.js` (ex: product-1-1.jpg, product-1-2.jpg)
3. Adicione também imagens para as categorias (category-women.jpg, category-men.jpg, etc.)
4. Adicione imagens para os depoimentos (testimonial-1.jpg, testimonial-2.jpg, etc.)
5. Adicione uma imagem para o banner principal (hero-banner.jpg)

### Produtos
Para personalizar os produtos exibidos:
1. Abra o arquivo `js/products.js`
2. Modifique os dados dos produtos existentes ou adicione novos produtos seguindo o mesmo formato
3. Certifique-se de que os nomes das imagens correspondam aos arquivos na pasta `images/`

### Personalização Visual
Para alterar cores, fontes e outros elementos visuais:
1. Abra o arquivo `css/styles.css`
2. Modifique as variáveis CSS no início do arquivo (seção `:root`)
3. Ajuste as cores, fontes, espaçamentos e outros valores conforme desejado

### Informações de Contato
Para personalizar as informações de contato:
1. Abra o arquivo `index.html`
2. Atualize o número de WhatsApp nos links de compartilhamento (procure por `https://wa.me/5511999999999`)
3. Modifique o endereço, telefone e e-mail no rodapé e na seção de contato
4. Atualize os links das redes sociais

## Funcionalidades Incluídas
- Exibição de produtos com filtros por categoria e condição
- Visualização detalhada de produtos em modal
- Compartilhamento direto de produtos via WhatsApp
- Design totalmente responsivo para desktop, tablet e mobile
- Slider de depoimentos de clientes
- Formulário de newsletter
- Menu de navegação adaptável para dispositivos móveis

## Requisitos Técnicos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet para carregar as fontes e ícones externos

## Suporte
Esta página foi desenvolvida com HTML5, CSS3 e JavaScript puro, sem dependências externas além das fontes e ícones. Isso facilita a personalização e hospedagem em qualquer servidor web padrão.
