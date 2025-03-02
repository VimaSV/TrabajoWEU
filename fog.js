function abrirWhatsApp() {
    event.preventDefault();
  
    var numero = "523334052019"; // Reemplaza con el número de teléfono
    var mensaje = "Buen dia, quiero realizar mi primer consulta gratis";
    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  
    // Intentar abrir WhatsApp
    //gtag_report_conversion(link);
    window.open(link, '_blank');
    // Si WhatsApp no se abre, mostrar un mensaje
    
  }

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) !== 'undefined') {
        window.open(url, '_blank'); // Abrir el enlace en una nueva pestaña
      }
    };
  
    // Registrar la conversión con Google Ads
    gtag('event', 'conversion', {
      'send_to': 'AW-16710156312/oADCCI_L3esZEJiAg6A-', // Tu etiqueta de conversión
      'event_callback': callback // Callback para abrir el enlace
    });
  
    return false;
  }

  const services = [
    {
        title: "Amarres Del Mismo Sexo:",
        description: "Nuestros amarres del mismo sexo están creados para conectar almas afines, celebrando el amor en todas sus expresiones. Con un enfoque profesional y respetuoso, ofrecemos rituales que fortalecen vínculos auténticos y profundos."
    },
    {
        title: "Buena Fortuna:",
        description: "Abre las puertas a la prosperidad y el éxito con nuestros rituales de buena fortuna. Diseñados para atraer energías positivas, estos servicios te invitan a transformar tu destino y recibir la abundancia que mereces."
    },
    {
        title: "Curar Brujería:",
        description: "Si sientes que energías negativas o prácticas malintencionadas afectan tu bienestar, nuestro servicio para curar brujería te ayudará a liberarte de esas influencias. Mediante rituales de limpieza energética, restauramos tu equilibrio y paz interior."
    },
    {
        title: "Retorno De Pareja:",
        description: "Si anhelas reavivar la chispa perdida, nuestro servicio de retorno de pareja es la solución. Mediante rituales personalizados, facilitamos el reencuentro y la renovación del vínculo amoroso, promoviendo una conexión sincera y armoniosa."
    },
    {
        title: "Sexualidad:",
        description: "Potencia y revitaliza tu energía sexual con nuestros rituales enfocados en la sexualidad. Descubre técnicas para desbloquear tu poder interior, mejorando tu vida íntima y aportando mayor pasión y vitalidad a tu existencia."
    },
    {
        title: "Espiritualidad:",
        description: "DConéctate profundamente con tu ser a través de nuestros servicios de espiritualidad. Mediante prácticas ancestrales y rituales personalizados, te ayudamos a alcanzar un mayor autoconocimiento y a vivir en plena sintonía con tus energías."
    },
    {
        title: "Magia Blanca y Magia Negra:",
        description: "Equilibra tu vida mediante nuestros rituales de magia blanca y magia negra. Mientras la magia blanca atrae energías de sanación y prosperidad, la magia negra actúa para contrarrestar influencias negativas, creando un balance perfecto en tu entorno."
    },
    {
        title: "Lectura Tarot",
        description: "Descubre los misterios que el universo guarda para ti. Nuestras lecturas de Tarot abren una ventana a tu destino, revelando los caminos ocultos de tu vida.  desentrañaremos los secretos de tu pasado, iluminaremos tu presente y te guiaremos hacia un futuro lleno de posibilidades."
    },
    {
        title: "WICCA",
        description: "Sumérgete en la magia natural de la Wicca y despierta el poder que yace dormido en tu interior. Nuestros rituales wiccanos te conectarán con las energías de la Tierra y el Cielo, permitiéndote canalizar la fuerza de los elementos para manifestar tus deseos más profundos."
    },
    {
        title: "Brujeria",
        description: "Nuestros hechizos y conjuros, transmitidos a través de generaciones, tienen el poder de alterar el curso de tu destino. Ya sea para atraer el amor verdadero, alcanzar el éxito, o protegerte de energías negativas, nuestra brujería abrirá puertas que creías cerradas para siempre."
    },
    {
        title: "Muñeco Vudu",
        description: "Nuestros muñecos vudú, creados con técnicas auténticas y materiales consagrados, se convierten en poderosos conductores de energía capaces de influir en la realidad misma. Ya sea para atraer bendiciones, alejar la mala fortuna o inclinar la balanza a tu favor, estos guardianes místicos trabajarán incansablemente para cumplir tus deseos más profundos. Descubre cómo el vudú puede ser la llave para desbloquear el potencial oculto en tu vida"
    },
];

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    

    const backgroundContainer = document.querySelector('.background-container');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');

    function updateBackground(index) {
        const slide = swiper.slides[index];
        const backgroundImage = slide.getAttribute('data-background');
        backgroundContainer.style.backgroundImage = `url(${backgroundImage})`;
    }

    function updateDescription(index) {
        const realIndex = index % services.length;
        serviceTitle.textContent = services[realIndex].title;
        serviceDescription.textContent = services[realIndex].description;
    }

    swiper.on('slideChange', function () {
        updateBackground(swiper.activeIndex);
        updateDescription(swiper.realIndex);
    });

    // Inicializar con el primer slide
    updateBackground(0);
    updateDescription(0);
});

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));

    // Agregar la clase 'seleccionado' al enlace clickeado
    link.classList.add("seleccionado");

    // Cerrar el menú responsive si está abierto
    var nav = document.getElementById("nav");
    if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
    }
}

//función que muestra el menu responsive
function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

document.addEventListener('DOMContentLoaded', function() {
    // Array con los IDs de las secciones
    const sections = [1, 2, 3];

    sections.forEach(function(sectionId) {
      // Referencia al botón y contador de la sección
      const btn = document.getElementById('btn-like-' + sectionId);
      const counter = document.getElementById('like-counter-' + sectionId);

      // Cargar el conteo actual desde localStorage, si no existe, inicializar en 0
      let count = localStorage.getItem('like_count_' + sectionId);
      if (count === null) {
        count = 0;
        localStorage.setItem('like_count_' + sectionId, 0);
      }
      counter.textContent = count;

      // Verificar si el usuario ya dio like en esta sección
      const liked = localStorage.getItem('liked_section_' + sectionId);
      if (liked === 'true') {
        // Deshabilitar el botón si ya dio like y actualizar el texto del botón
        btn.disabled = true;
        btn.textContent = "Liked";
      }

      // Añadir evento click al botón de like
      btn.addEventListener('click', function() {
        // Verificar nuevamente que el usuario no haya dado like (por seguridad)
        if (localStorage.getItem('liked_section_' + sectionId) === 'true') {
          return;
        }
        // Incrementar el contador y actualizar localStorage
        count = parseInt(localStorage.getItem('like_count_' + sectionId)) + 1;
        localStorage.setItem('like_count_' + sectionId, count);
        counter.textContent = count;

        // Marcar la sección como "like dado" para este usuario y deshabilitar el botón
        localStorage.setItem('liked_section_' + sectionId, 'true');
        btn.disabled = true;
        btn.textContent = "Liked";
      });
    });
  });