import faker from 'faker';

const messageCart = `<h1>You have ${faker.random.number()} items in you basket</h1>`;


document.querySelector('#dev-cart').innerHTML = messageCart;