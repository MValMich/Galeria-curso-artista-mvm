 // LOGICA DEL CODIGO
// NAVEGACION
       // Desplegar 'lista-home' del 'menu-home'
      const menu_home = document.querySelector("#menu-home");
      const lista_home = document.querySelector("#lista-home");
      function Desplegar_Menu_Home() {
        lista_home.classList.toggle("ul-visible-home");
        lista_obras.classList.remove("ul-visible-obras");
        lista_acerca.classList.remove("ul-visible-acerca");
        lista_cursos.classList.remove("ul-visible-cursos");
      }

      // Desplegar 'lista-acerca' del 'menu-acerca'
      const menu_acerca = document.querySelector("#menu-acerca");
      const lista_acerca = document.querySelector("#lista-acerca");
      function Desplegar_Menu_Acerca() {
        lista_home.classList.remove("ul-visible-home");
        lista_acerca.classList.toggle("ul-visible-acerca");
        lista_obras.classList.remove("ul-visible-obras");
        lista_cursos.classList.remove("ul-visible-cursos");
      }

      // Desplegar 'lista-obras' del 'menu-obras'
      const menu_obras = document.querySelector("#menu-obras");
      const lista_obras = document.querySelector("#lista-obras");
      function Desplegar_Menu_Obras() {
        lista_home.classList.remove("ul-visible-home");
        lista_obras.classList.toggle("ul-visible-obras");
        lista_acerca.classList.remove("ul-visible-acerca");
        lista_cursos.classList.remove("ul-visible-cursos");

      }

      // Desplegar 'lista-cursos' del 'menu-cursos'
      const menu_cursos = document.querySelector("#menu-cursos");
      const lista_cursos = document.querySelector("#lista-cursos");
      function Desplegar_Menu_Cursos() {
        lista_home.classList.remove("ul-visible-home");
        lista_cursos.classList.toggle("ul-visible-cursos");
        lista_obras.classList.remove("ul-visible-obras");
        lista_acerca.classList.remove("ul-visible-acerca");
      }

      // DOM CONTROL
      menu_acerca.addEventListener("click", () => {
        Desplegar_Menu_Acerca();
      });

      menu_obras.addEventListener("click", () => {
        Desplegar_Menu_Obras();
      }); 

      menu_cursos.addEventListener("click", () => {
        Desplegar_Menu_Cursos();
      });

      menu_home.addEventListener("click", () => {
        Desplegar_Menu_Home();
      });

      // AMPLIAR PINTURAS
      const img_pinturas = document.querySelectorAll(".img-pinturas-vertical, .img-pinturas-horizontal");
      img_pinturas.forEach((imagen) => {
        imagen.addEventListener("click", () => {
         if (imagen.requestFullscreen) {
          imagen.requestFullscreen();
         } 
        });
      });