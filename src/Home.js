import React from 'react';
import coverpage from './coverpage.jpg';
import "./Home.css";
import Product from './Product';

function Home() {
  console.log(coverpage);
  return (
    <div className='home'>
      <img className='home__image'
      src={coverpage} alt="CoverImage"/>      
      {/* Product id, title, prise, rating, image */}
      <div className='home__row'>
        <Product
        id = "123456789"
        title = "Shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://rukminim1.flixcart.com/image/880/1056/l4d2ljk0/hand-messenger-bag/b/6/r/voguish-exclusive-attractive-women-latest-grey-color-handbags-12-original-imagfafn4gk7fnjk.jpeg?q=50"
        />
        <Product
        id = "123456789"
        title = "Sports Shirt"
        price = {1703}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/71ykEsS1FVL._UX679_.jpg"
        />
        <Product 
        id = "123456789"
        title = "Shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/51PeVRR246L._UY535_.jpg"
        />
      </div>
      <div className='home__row'>
        <Product
        id = "123456789"
        title = "Shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/61aYuAlbfwL._UX679_.jpg"
        />
        <Product
        id = "123456789"
        title = "Shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/81jAGW5yNmL._SL1500_.jpg"
        />
        <Product 
        id = "123456789"
        title = "Shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://m.media-amazon.com/images/I/71O6djFBtsL._UL1500_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  )
}

export default Home
