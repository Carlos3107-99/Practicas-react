import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App/>,document.getElementById('root'));


// import Holamundo from './components/HolaMundo';
// ReactDOM.render(<Holamundo/>, document.getElementById('root'));




//----------------------------Button-----------------------------//
// import Button from '../src/components/Button';
// ReactDOM.render(<Button type="button" text="Guardar"/>,document.getElementById('root'));

//-------------------------Hola stateful----------------------//
// import Stateful from '../src/components/Stateful';
// ReactDOM.render(<Stateful/>,document.getElementById('root'));

// // ---------------------------header---------------------------------//
// import Header from '../src/components/Header';
// ReactDOM.render(<Header />, document.getElementById('root'));

// ----------------------------search---------------------------
// import Search from '../src/components/Search';
// ReactDOM.render(<Search />, document.getElementById('root'));

// ----------------------------footer-------------------------
// import Footer from '../src/components/Footer';
// ReactDOM.render(<Footer />, document.getElementById('root'));




//-------------containers-------------> 
// import Layout from '../src/containers/layout';
// ReactDOM.render(<Layout/>, document.getElementById('root'));


// ------------carrousel------------->
// import Carousel from '../src/components/Carousel';
// ReactDOM.render(< Carousel/>, document.getElementById('root'));


// // ----------------login--------------->
// import Login from '../src/containers/Login';
// ReactDOM.render(<Login/>,document.getElementById('root'));


// ---------------Register----------------->
import Register from '../src/containers/Register';
ReactDOM.render(<Register/>,document.getElementById('root'));



//---------------examen2---------------->
// import examen from '../src/containers/examen';
// ReactDOM.render(<examen/>,document.getElementById('root'));
//examen
// import Examen from '../src/components/Examen';
// ReactDOM.render(<Examen/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
