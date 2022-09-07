import faker from 'faker';

const cartMount = (el) => {
  const messageCart = `<h1>You have ${faker.random.number()} items in you basket</h1>`;


  el.innerHTML = messageCart;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if(el) {
    cartMount(el);
  }
}

export { cartMount };