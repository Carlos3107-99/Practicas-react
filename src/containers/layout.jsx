import React from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../containers/CarouselItem';

const Layout =()=>{
    return (
        <div className="apps">
            <Header/>
            <Search/>
            <Categories>
            <Carousel/>
            <CarouselItem/>

            </Categories>
            <Footer/>
        </div>
    )
}

export default Layout;

