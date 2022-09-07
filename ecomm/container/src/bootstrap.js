import { productMount } from 'products/ProductsIndex';
import { cartMount } from 'cart/CartShow';

console.log('container');

productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));