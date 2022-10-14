// inyectando las cards
let cards=document.getElementById("cards");
cards.innerHTML=`<section  class="store">
<div class="container">
    <div class="items">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="item shadow mb-4">
                    <h5 class="item-title">Cuaderno rojo Exito 48 hojas</h5>
                <img class="item-image" src="./img/foto-cuaderno-rojo.jpg">

                <div class="item-details">
                    <h5 class="item-price">$750</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Cuaderno Exito azul 48 hojas</h5>
                <img class="item-image" src="./img/foto-cuaderno-azul.jpg">

                <div class="item-details">
                    <h5 class="item-price">$750</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Cuaderno exito naranja 48 hojas</h5>
                <img class="item-image" src="./img/foto-cuaderno-naranja.jpg">

                <div class="item-details">
                    <h5 class="item-price">$750</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Cuaderno Rivadavia violeta ABC </h5>
                <img class="item-image" src="./img/cuaderno-rivadavia-abc.jpg">

                <div class="item-details">
                    <h5 class="item-price">$950</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Cuaderno Rivadavia celeste ABC</h5>
                <img class="item-image" src="./img/cuaderno-rivadavia-abc-celeste.jpg">

                <div class="item-details">
                    <h5 class="item-price">$950</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Cuaderno Rivadavia rojo ABC</h5>
                <img class="item-image " src="./img/cuaderno-rivadavia-abc-rojo.jpg">

                <div class="item-details">
                    <h5 class="item-price">$950</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapiz grafito Goldfaber HB</h5>
                <img class="item-image" src="./img/lapiz-golfaber.jpg">

                <div class="item-details">
                    <h5 class="item-price">$230</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapiz grafito Trabi</h5>

                <img class="item-image" src="./img/lapiz trabi.jpg">

                <div class="item-details">
                    <h5 class="item-price">$170</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapiz Grafito Bic</h5>

                <img class="item-image" src="./img/lapiz bic.jpg">

                <div class="item-details">
                    <h4 class="item-price">$100</h4>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapicera bic</h5>

                <img class="item-image" src="./img/lapicera bic.jpg">

                <div class="item-details">
                    <h5 class="item-price">$120</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapicera Pelikan</h5>

                <img class="item-image" src="./img/lapicera pelikan.png">
                <div class="item-details">
                    <h5 class="item-price">$100</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h5 class="item-title">Lapicera Faber Castell</h5>

                <img class="item-image" src="./img/lapicera faber castell.png">
                <div class="item-details">
                    <h5 class="item-price">$130</h5>
                    <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>`;

// agregando evento al boton de compras
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
// agregando las cards al carrito
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Agregaste un producto al carrito',
    showConfirmButton: false,
    timer: 1500
  })
// creando el carrito de compras
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}
//creando la funcion para actualizar el precio
function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}
//funcion de eliminar productos
function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}
//funcion para cambiar la cantidad de productos
function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}
// funcion para borrar el carrito despues de realizar la compra
function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
