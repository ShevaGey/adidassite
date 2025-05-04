fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} $</p>
        <a href="product.html?id=${product.id}">Детальніше</a>
      `;
      container.appendChild(card);
    });
  });

