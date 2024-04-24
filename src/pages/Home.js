import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-blur-luxury-hotel-lobby_1339-100535.jpg)` }}>
        <div className="headerContainer">
          <h1 style={{ color: 'black' }}>Sai Malhar Dhaba</h1>
          <p style={{ color: 'black' }}>Mumbai, IN</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
