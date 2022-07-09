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
      <Product
        id = "123456789"
        title = "shopping Bag"
        price = {11.69}
        rating = {5}
        image = "https://5.imimg.com/data5/MX/KB/MY-2138131/shopping-bags-500x500.png"
        />
      {/* Product */}






    </div>
  )
}

export default Home
