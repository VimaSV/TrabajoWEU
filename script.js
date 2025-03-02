// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos de ítem FAQ
    const faqItems = document.querySelectorAll('.faq-item');
  
    // Itera sobre cada ítem para asignar el evento click a la pregunta
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        // Cierra cualquier otro ítem abierto
        faqItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });
        // Alterna la clase 'active' para mostrar/ocultar la respuesta
        item.classList.toggle('active');
      });
    });
  });

  
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