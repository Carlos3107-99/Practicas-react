import React from 'React';
import '../assets/styles/app.scss';
import CEMR from '../components/CEMR';
import Vacasiones from '../components/Vacasiones';
import ClaseDigital from '../components/ClaseDigital';


const Layout =()=>{
    return (
        <div className="app">
           <CEMR/>
           <Vacasiones/>
           <ClaseDigital/>
            
        </div>
    )
}

export default Layout;
