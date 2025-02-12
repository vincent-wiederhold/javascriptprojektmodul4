
    let products = [
        { id: 1, name: "DRS DENIM", price: 1125 },
        { id: 2, name: "DRS DENIM", price: 1125 },
        { id: 3, name: "DRS DENIM", price: 1125 }
    ];

    let cartCount = 0;

    function displayProducts() {
        const productList = document.getElementById('productList');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'buks';
            productDiv.innerHTML = `
                <span>${product.name} - $${product.price}</span>
                <button onclick="add-to-cart(${product.id})">Tilføj til kurv</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function addToCart(productId) {
        cartCount++;
        document.getElementById('buks').innerHTML = cartCount;
        alert(`Product ${productId} Tilføjet til kurv`);
    }

    displayProducts();