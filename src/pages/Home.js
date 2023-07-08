import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom';
import Banner from '../images/banner9.jpg';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>SWAGAT</h1>
          <p>Food that tells a Story</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;