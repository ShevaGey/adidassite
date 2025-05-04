function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const productId = getQueryParam('id');

fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id == productId);
    const container = document.getElementById('product-details');
    if (product) {
      container.innerHTML = `
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p><strong>${product.price} $</strong></p>
        <button class="buy-button">Купити</button>
        <a href="index.html">← Назад</a>
      `;

      // Додавання події на кнопку "Купити"
      const buyButton = document.querySelector('.buy-button');
      buyButton.addEventListener('click', () => {
        alert('Товар додано до кошика!');
        // Тут можна додати логіку для додавання товару до кошика
      });
    } else {
      container.innerHTML = `<p>Товар не знайдено</p>`;
    }
  });
