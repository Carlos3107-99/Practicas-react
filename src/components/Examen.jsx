import React from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/static/michi.png';
import userIcon from '../assets/static/pubg_icon.png';


const Examen = () => {
    return(
       
<header className="header">
<img className="header__img" src={logo} alt="JTH"/>
<div className="header__menu">
<div className="header__menu--profile">
    <img  className="header__menu--profile" src={userIcon} alt=""/>
<p>Perfil</p>
</div>
<ul>
    <li><a href="/">Cuenta</a></li>
    <li><a href="/">Cerrar Sesion</a></li>
</ul>
</div>
</header>

<section class="main">
    <h2 className="main_title">Que Quieres ver hoy?</h2>
    <input type text ="text" class="input" placeholder="Buscar.."></input>
</section>

<h3 class="categories__title">Mi lista</h3>

<section class="carousel">

  <div className="carousel__container">
      <div className="carousel__container">
        <div className="carousel-item"></div>
      </div>
  </div>

        <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="carousel-item__img" src="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
      <div class="carousel-item__details">
        <div>             
          <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
          <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
        </div>
        <p class="carousel-item__details--title">Título descriptivo</p>
        <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
     </div>

</div>
 </section>

<footer class="footer">
<a href="/">Terminos de uso</a>
<a href="/">Declaración de privacidad</a>
<a href="/">Centro de ayuda</a>
</footer>

)   ;
}


export default Examen;