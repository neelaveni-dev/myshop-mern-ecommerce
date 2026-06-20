import { Link } from "react-router-dom";
import "./HomePage.css";

import mobileImg from "../assets/images/mobile.jpg";
import fashionImg from "../assets/images/fashion.jpg";
import electronicsImg from "../assets/images/electronics.jpg";
import beautyImg from "../assets/images/beauty.jpg";

import furnitureImg from "../assets/images/furniture.jpg";
import kitchenImg from "../assets/images/kitchen.jpg";
import homedecorImg from "../assets/images/homedecor.jpg";
import booksImg from "../assets/images/books.jpg";

import shoesImg from "../assets/images/shoes.jpg";
import watchImg from "../assets/images/watch.jpg";
import bagsImg from "../assets/images/bags.jpg";
import toysImg from "../assets/images/toys.jpg";

import sportsImg from "../assets/images/sports.jpg";
import gamesImg from "../assets/images/games.jpg";
import accessoriesImg from "../assets/images/accessories.jpg";
import stationeryImg from "../assets/images/stationery.jpg";

const HomePage = () => {
  return (
    <div className="categories">

      <Link to="/category/mobile" className="cat-card">
        <img src={mobileImg} alt="Mobiles" />
        <h3>Mobiles</h3>
      </Link>

      <Link to="/category/fashion" className="cat-card">
        <img src={fashionImg} alt="Fashion" />
        <h3>Fashion</h3>
      </Link>

      <Link to="/category/electronics" className="cat-card">
        <img src={electronicsImg} alt="Electronics" />
        <h3>Electronics</h3>
      </Link>

      <Link to="/category/beauty" className="cat-card">
        <img src={beautyImg} alt="Beauty" />
        <h3>Beauty</h3>
      </Link>

      <Link to="/category/furniture" className="cat-card">
        <img src={furnitureImg} alt="Furniture" />
        <h3>Furniture</h3>
      </Link>

      <Link to="/category/kitchen" className="cat-card">
        <img src={kitchenImg} alt="Kitchen" />
        <h3>Kitchen</h3>
      </Link>

      <Link to="/category/homedecor" className="cat-card">
        <img src={homedecorImg} alt="Home Decor" />
        <h3>Home Decor</h3>
      </Link>

      <Link to="/category/books" className="cat-card">
        <img src={booksImg} alt="Books" />
        <h3>Books</h3>
      </Link>

      <Link to="/category/shoes" className="cat-card">
        <img src={shoesImg} alt="Shoes" />
        <h3>Shoes</h3>
      </Link>

      <Link to="/category/watch" className="cat-card">
        <img src={watchImg} alt="Watches" />
        <h3>Watches</h3>
      </Link>

      <Link to="/category/bags" className="cat-card">
        <img src={bagsImg} alt="Bags" />
        <h3>Bags</h3>
      </Link>

      <Link to="/category/toys" className="cat-card">
        <img src={toysImg} alt="Toys" />
        <h3>Toys</h3>
      </Link>

      <Link to="/category/sports" className="cat-card">
        <img src={sportsImg} alt="Sports" />
        <h3>Sports</h3>
      </Link>

      <Link to="/category/games" className="cat-card">
        <img src={gamesImg} alt="Gaming" />
        <h3>Gaming</h3>
      </Link>

      <Link to="/category/accessories" className="cat-card">
        <img src={accessoriesImg} alt="Accessories" />
        <h3>Accessories</h3>
      </Link>

      <Link to="/category/stationery" className="cat-card">
        <img src={stationeryImg} alt="Stationery" />
        <h3>Stationery</h3>
      </Link>

    </div>
  );
};

export default HomePage;