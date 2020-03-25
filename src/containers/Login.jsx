import React from 'react';
import '../assets/styles/login.scss';

const Login=()=>{
  return  (
        
       
         
        <div className="html ">
        <title>Inicia Sesión</title>
        
          
        
      
            <header className="header">
            <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
            </header>
            
            <section class="login">
                <section class="login__container">
                    <h2>Inicia sesión</h2>
                    <form class="login__container--form">
                    <input class="input" type="text" placeholder="Correo"/>
                    <input class="input" type="password" placeholder="Contraseña"/>
                    <button class="button">Iniciar sesión</button>
                    <div class="login__container--remember-me">
                        < label>
                        <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                    <section class="login__container--social-media">
                    <div><img src="../assets/google-icon.png"/> Inicia sesión con Google</div>
                    <div><img src="../assets/twitter-icon.png"/> Inicia sesión con Twitter</div>
                    <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>

                    </section>
                                
                    </form>
                </section>
            </section>
            




            <footer class="footer">
            <a href="/">Terminos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
          </footer>
      
          </div>
    
                
                
      
    );
}
 export default Login;