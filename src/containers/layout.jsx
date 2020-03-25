import React from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const Layout =()=>{
    return (
        <div className="apps">
            <Header/>
            <Search/>
            <Carousel/>
            <Footer/>
        </div>
    )
}

export default Layout;

// import React from 'react';
// import '../assets/styles/app.scss';
// import CEMR from '../components/CEMR';
// import Vacasiones from '../components/Vacasiones';
// import ClaseDigital from '../components/ClaseDigital';


// const Layout =()=>{
//     return (
//         <div className="app">
//            <CEMR/>
//            <Vacasiones/>
//            <ClaseDigital/>
            
//         </div>
//     )
// }

// export default Layout;
