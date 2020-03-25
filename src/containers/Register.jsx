import react from 'react';

import '../assets/styles/Register.scss';

const Register=()=>{
  return  (
    <div className="header">
        <title>Registro</title>
            <header class="header">
                <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
            </header>
            <section class="register">
                <section class="register__container">
                    <h2>Registrate</h2>
                    <form class="register__container--form">
                        <input class="input" type="text" placeholder="nombre"/>
                        <input class="input" type="text" placeholder="correo"/>
                        <input class="input" type="password" placeholder="contraseña"/>
                        <button class="button">Registrarme</button>
                    </form>
                    <a href="">Iniciar Sesion</a>


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
  export default Register;

  
  
  



