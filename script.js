document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML = `<div class="container">
        <div class="container">
        <!-- Sección de bienvenida -->
        <section class="welcome">
            <h1>Bienvenidos a J & J</h1>
            <p>En J & J, te ofrecemos una experiencia culinaria única con platos auténticos de la cocina asiática. Disfruta de un ambiente acogedor y una deliciosa variedad de opciones que te transportarán a Asia con cada bocado.</p>
        </section>

        <!-- Sección de menú destacado -->
        <section class="menu">
            <h2>Menú Destacado</h2>
            <div class="menu-item">
                <h3>Sushi</h3>
                <p> Consiste en arroz sazonado combinado con varios ingredientes como pescado crudo, mariscos, verduras y a veces frutas.</p>
            </div>
            <div class="menu-item">
                <h3>Ramen</h3>
                <p> El ramen es un plato de fideos japonés heredado de la cocina china.</p>
            </div>
        </section>
        <!-- Sección de ofertas especiales -->
        <section class="offers">
            <h2>Ofertas Especiales</h2>
            <div class="offer-item">
                <h3>Oferta Especial 1</h3>
                <div class="details">
                    <p>Obtén un 20% de descuento en tu primer pedido. Presenta este código al pagar: <strong>WELCOME20</strong></p>
                </div>
            </div>
            <div class="offer-item">
                <h3>Oferta Especial 2</h3>
                <div class="details">
                    <p>Compra 2 platos y obtén un postre gratis. Válido todos los días de la semana.</p>
                </div>
            </div>
        </section>
    </div>`
    break;
        break;
      
      case "about":
        mainContent.innerHTML = `<div class="container"></div>
        <div class="container">
        <section class="about-section">
            <h2>Sobre Nosotros</h2>
            <p>Bienvenidos a Asia Gourmet, un restaurante donde la auténtica comida asiática cobra vida. Fundado en [1989], nuestro objetivo siempre ha sido ofrecer una experiencia culinaria única con un enfoque en la frescura, el sabor y la autenticidad.</p>
        </section>

        <section class="about-section team">
            <h2>Conoce al Equipo</h2>
            <div class="team-member">
                <h3>Chef [Alberto]</h3>
                <p>Con más de 20 años de experiencia en la cocina asiática, el Chef [Alberto] ha perfeccionado sus habilidades en restaurantes de prestigio en todo el mundo. Su pasión por la cocina es evidente en cada plato que prepara.</p>
            </div>
            <div class="team-member">
                <h3>[James Duvan y Julián Valencia]</h3>
                <p>[James Duvan y Julián Valencia] fundaron J & J con el sueño de traer los sabores auténticos de Asia a [París]. Su dedicación a la calidad y al servicio al cliente ha sido clave en el éxito del restaurante.</p>
            </div>
        </section>

        <section class="about-section philosophy">
            <h2>Nuestra Filosofía</h2>
            <p>En Asia Gourmet, creemos que la comida es una experiencia que debe ser disfrutada con todos los sentidos. Nos esforzamos por ofrecer platos que no solo sean deliciosos, sino también visualmente atractivos y preparados con ingredientes frescos y de alta calidad. Nuestra misión es proporcionar un ambiente acogedor donde cada comida sea memorable.</p>
        </section>

        <section class="about-section gallery">
            </div>`
            break;
        break;
      case "contact":
        mainContent.innerHTML = `<div class="container">
          <div class="container">
        <section class="contact-info">
            <h2>Información de Contacto</h2>
            <p><strong>Dirección:< Calle de la Gastronomía, 123, Medellin, Colombia</p>
            <p><strong>Teléfono:</strong> +57 320 543 4367</p>
            <p><strong>Correo Electrónico:</strong> RestauranteJ&J@gmail.com</p>
        </section>

        <section class="contact-form">
            <h2>Envíanos un Mensaje</h2>
            <form action="enviar_mensaje.php" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </section>
    </div>`
    break;
        break;
      case "FormasPago":
        mainContent.innerHTML = `<div class="container">
         <div class="container">
        <section class="payment-methods">
            <h2>Formas de Pago Aceptadas</h2>
            <ul>
                <li data-info="Tarjetas de Crédito - Aceptamos Visa, MasterCard y American Express.">
                    <strong>Tarjetas de Crédito</strong>
                    <div class="payment-details">Tarjetas de Crédito - Aceptamos Visa, MasterCard y American Express.</div>
                </li>
                <li data-info="Tarjetas de Débito - Aceptamos Visa y MasterCard.">
                    <strong>Tarjetas de Débito</strong>
                    <div class="payment-details">Tarjetas de Débito - Aceptamos Visa y MasterCard.</div>
                </li>
                <li data-info="PayPal - Pago seguro en línea.">
                    <strong>PayPal</strong>
                    <div class="payment-details">PayPal - Pago seguro en línea.</div>
                </li>
                <li data-info="Efectivo - Aceptamos pagos en efectivo en el restaurante.">
                    <strong>Efectivo</strong>
                    <div class="payment-details">Efectivo - Aceptamos pagos en efectivo en el restaurante.</div>
                </li>
                <li data-info="Apple Pay - Pago rápido y seguro con tu iPhone.">
                    <strong>Apple Pay</strong>
                    <div class="payment-details">Apple Pay - Pago rápido y seguro con tu iPhone.</div>
                </li>
            </ul>
        </section>
    </div>`
    break;
        break;
      case "Ubicacion":
        mainContent.innerHTML = `<div class="container">
        <div class="container">
        <section class="map-container">
            <h2>Encuéntranos Aquí</h2>
            <!-- Reemplaza el src del iframe con el enlace de Google Maps de la ubicación del restaurante -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990930203322!2d2.294481315674073!3d48.85884407928796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d1d9a29d69%3A0xb0b89773e3a9d459!2sEiffel%20Tower%2C%20Champ%20de%20Mars%2C%2075507%20Paris%2C%20Francia!5e0!3m2!1ses!2ses!4v1617883036110!5m2!1ses!2ses" 
                    allowfullscreen="" 
                    loading="lazy"></iframe>
        </section>

        <section class="location-info">
            <h2>Información de la Ubicación</h2>
            <p><strong>Dirección:</strong> Calle de la Gastronomía, 123, Medellin, Colombia</p>
            <p><strong>Teléfono:</strong> +57 320 543 4367</p>
            <p><strong>Horario de Atención:</strong> Lunes a Domingo, 12:00 PM - 10:00 PM</p>
        </section>
    </div>`
        break;
      case "menu":
        mainContent.innerHTML = `<div class="menu-item">
        <div class="menu">
          <div class="menu-item">
              <div class="item-image">
                  <img src="ji.jpeg" alt="Sushi">
              </div>
              <div class="item-details">
                  <div class="item-name">Sushi.</div>
                  <div class="item-price">$10$ a 50$</div>
              </div>
          </div>   
          <div class="menu-item">
              <div class="item-image">
                  <img src="ju.avif" alt="Ramen">
              </div>
              <div class="item-details">
                  <div class="item-name">Ramen.</div>
                  <div class="item-price">$10$ a 20$</div>
              </div>
          </div> 
          <div class="menu-item">
              <div class="item-image">
                  <img src="jijiji.jpg" alt="curry tailandes">
              </div>
              <div class="item-details">
                  <div class="item-name">curry tailandes.</div>
                  <div class="item-price">$12$ a 18$</div>
              </div>
          </div>     
          <div class="menu-item">
              <div class="item-image">
                  <img src="k.jpg" alt="Kasuya">
              </div>
              <div class="item-details">
                  <div class="item-name">Kasuya.</div>
                  <div class="item-price">$18$ a 25$</div>
               </div>
          </div>   
          <div class="menu-item">
                   <div class="item-image">
                       <img src="P.jpg" alt="Pad Thai.">
                   </div>
                   <div class="item-details">
                       <div class="item-name">Pad Thai.</div>
                       <div class="item-price">$20$ a 30$</div>
                   </div>     
          </div>   
          <div class="menu-item">
                   <div class="item-image">
                       <img src="R.jpg" alt=" Roti canai.">
                   </div>
                   <div class="item-details">
                       <div class="item-name"> Roti canai.</div>
                       <div class="item-price">$25$ a 40$</div>
                   </div>  
                   </div>   
          <div class="menu-item">
                   <div class="item-image">
                       <img src="A.jpg" alt=" Arroz frito.">
                   </div>
                   <div class="item-details">
                       <div class="item-name"> Arroz frito.</div>
                       <div class="item-price">$30$ a 45$</div>
                   </div> `
                   
                   break;   
                                
    }
  }
    });
