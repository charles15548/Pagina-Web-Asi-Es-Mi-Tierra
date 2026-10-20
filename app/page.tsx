import Image from "next/image";
import Menu from "./menu";
import { restaurantSchema } from "./seo";
import { restaurant, whatsapp } from "./data";
const contact = whatsapp(
  "Hola, quisiera consultar la carta y hacer un pedido para recoger.",
);
export default function RestaurantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
     
      <header className="header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Así es mi Tierra, inicio"
        >
           
          <span>
            Así es mi Tierra<small>RESTAURANTE · ANCÓN</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#carta">La carta</a>
          <a href="#nosotros">Nuestra casa</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>
        <a
          className="button small"
          href={contact}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </header>
      <main id="contenido" tabIndex={-1}>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">
              Tu restaurante en Leoncio Prado, Ancón
            </span>
            <h1>
              Comida peruana.
              <br />
              Aquí en Ancón.
            </h1>
            <p>
              Menú criollo, picante de cuy y platos marinos. En Así es mi Tierra
              cocinamos para las familias, los vecinos y quienes trabajan por
              aquí. Ven al salón o pide para recoger.
            </p>
            <div className="actions">
              <a className="button" href="#carta">
                Ver la carta <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href={restaurant.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
              </a>
            </div>
            <div className="hero-facts">
              <span>
                Menú completo <strong>S/10</strong>
              </span>
              <span>En salón y para recoger</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/fachada.png"
              alt="Fachada verde del restaurante Así es mi Tierra en Ancón"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="hero-photo"
            />
            <div className="photo-stamp">
              Menú del día<strong>S/10</strong>
              <span>Entrada + segundo + refresco</span>
            </div>
            <span className="photo-caption">
              Busca la fachada verde, cerca de la playa Cívica.
            </span>
          </div>
        </section>

        <div className="woven-band" aria-hidden="true" />

        <section className="daily section-wrap" aria-labelledby="daily-title">
          <div>
            <span className="eyebrow">El menú cambia, la sazón se queda</span>
            <h2 id="daily-title">
              Tu almuerzo completo
              <br />
              por S/10.
            </h2>
            <p>
              Cada día preparamos, por lo general, dos opciones de segundo.
              Puede tocar seco de res, pollo al horno, adobo de lechón o pavita
              al sillao. Pregúntanos qué hay hoy antes de venir.
            </p>
            <a
              className="text-link"
              href={whatsapp(
                "Hola, ¿qué opciones de menú tienen hoy y hasta qué hora atienden?",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preguntar por el menú de hoy ↗
            </a>
          </div>
          <div className="daily-ticket">
            <div className="ticket-heading">
              <span>Menú del día</span>
              </div>
            <div className="ticket-price">
              <span>S/</span>10<small>por menú</small>
            </div>
            <ul>
              <li>
                <span aria-hidden="true">✓</span> Entrada: sopa de casa, ceviche
                o ensalada de palta*
              </li>
              <li>
                <span aria-hidden="true">✓</span> Segundo del día con su
                acompañamiento*
              </li>
              <li>
                <span aria-hidden="true">✓</span> Refresco para acompañar
              </li>
            </ul>
            <p>
              *Según disponibilidad del día. Consulta también por los platos
              extra de S/15.
            </p>
          </div>
        </section>

        <section className="menu-section" id="carta">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">La carta de Así es mi Tierra</span>
                <h2>¿Qué se te antoja hoy?</h2>
              </div>
              <p>
                Revisa los segundos del menú o elige un plato criollo, de picantería o marino. Puedes consultar
                cada plato directamente por WhatsApp y coordinar tu recojo.
              </p>
            </div>
            <Menu />
            <div className="menu-footer">
              <span>¿Vienes con hambre? Te ayudamos a elegir.</span>
              <a
                className="text-link"
                href={contact}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir para recoger ↗
              </a>
            </div>
          </div>
        </section>

        <section className="story section-wrap" id="nosotros">
          <div className="story-photo">
            <Image
              src="/images/salon.png"
              alt="Salón del restaurante con mesas y sillas de madera"
              width={1200}
              height={1600}
            />
            <span>Una mesa siempre te espera.</span>
          </div>
          <div>
            <span className="eyebrow">Restaurante Asi Es Mi Tierra</span>
            <h2>
              De nuestra cocina
              <br />a tu mesa.
            </h2>
            <p>
              Este restaurante nació para compartir platos del Perú, hechos con
               mucha sazón. El picante de cuy, el lomo saltado y los
              platos marinos tienen su lugar en nuestra carta.
            </p>
            <p>
              Somos un restaurante para vecinos, trabajadores y
              familias. Aquí encontrarás menú criollo, picantería y cevichería,
              con una atención que te hace sentir en casa.
            </p>
            <div className="story-signature">
              Así es mi Tierra <span>Hecho con cariño, servido con gusto.</span>
            </div>
          </div>
        </section>

        <section
          className="gallery section-wrap"
          aria-labelledby="gallery-title"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">El local</span>
              <h2 id="gallery-title">Esta es nuestra casa.</h2>
            </div>
            <p>
              Busca nuestra fachada verde y pasa por un almuerzo con sabor
              peruano.
            </p>
          </div>
          <div className="gallery-grid">
            <Image
              src="/images/entrada.png"
              alt="Entrada del restaurante y pizarra de menú"
              width={1600}
              height={1200}
            />
            <Image
              src="/images/fachada.png"
              alt="Vista exterior para reconocer el restaurante al llegar"
              width={1600}
              height={1200}
            />
          </div>
        </section>

        <section className="location" id="ubicacion">
          <div className="section-wrap location-inner">
            <div>
              <span className="eyebrow">Leoncio Prado, Ancón</span>
              <h2>
                Estamos cerca.
                <br />
                Ven a almorzar.
              </h2>
              <p>
                {restaurant.address}
                <br />
                Cerca de la playa Cívica.
              </p>
                 <div className="location-map">
                <iframe
                  title="Ubicación de Restaurante Asi Es Mi Tierra en Leoncio Prado, Ancón"
                  src="https://www.google.com/maps?q=-11.7321775,-77.1425642&z=17&hl=es&output=embed"
                  width="600"
                  height="360"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="contact-panel">
              <div>
                <span>HORARIO</span>
                <p>
                  Todos los días
                  <br />
                  <strong>Desde las 10:00 a. m.</strong>
                </p>
                <small>Consulta por WhatsApp la hora de cierre.</small>
              </div>
              <div>
                <span>HAZ TU PEDIDO O CONSULTA</span>
                <a className="phone" href="tel:+51936040189">
                  936 040 189 ↗
                </a>
                <p>Atención en salón · Pedidos para recoger</p>
              </div>
              <div>
                <span>MEDIOS DE PAGO</span>
                <p>Efectivo · Yape · Plin · Tarjetas</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="visit-questions section-wrap"
          aria-labelledby="questions-title"
        >
          <h2 id="questions-title">Antes de venir</h2>
          <div>
            <details>
              <summary>¿Puedo pedir para recoger?</summary>
              <p>
                Sí. Escríbenos al 936 040 189 para consultar disponibilidad y
                coordinar tu pedido. Por ahora atendemos en salón y para
                recoger.
              </p>
            </details>
            <details>
              <summary>¿Qué incluye el menú de S/10?</summary>
              <p>
                Una entrada, un segundo con su acompañamiento y un refresco. Las
                opciones cambian según el día. También puedes consultar por los
                platos extra de S/15.
              </p>
            </details>
            <details>
              <summary>¿Puedo consultar por una mesa?</summary>
              <p>
                Sí. Contáctanos por WhatsApp para coordinar tu visita. La
                disponibilidad se confirma directamente con el restaurante.
              </p>
              <a
                className="text-link"
                href={whatsapp(
                  "Hola, quisiera consultar por una mesa. ¿Tienen disponibilidad?",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por una mesa
              </a>
            </details>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#inicio">
          <span>
            Así es mi Tierra<small>RESTAURANTE · ANCÓN</small>
          </span>
        </a>
        <p>Comida peruana con amor y mucha sazón.</p>
        <a href="#carta">Volver a la carta ↑</a>
      </footer>
      <aside className="web-creator" aria-label="Servicio independiente de creación de páginas web">
        <div className="web-creator-inner">
          <div>
            <span className="web-creator-label">Diseño y desarrollo web</span>
            <p>¿Quieres una web para tu negocio?</p>
            <small>Contacto del creador de esta web.</small>
          </div>
          <a
            href="https://wa.me/51904291750?text=Hola%2C%20vi%20la%20web%20de%20Asi%20Es%20Mi%20Tierra%20y%20quisiera%20una%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar por una página web al 904 291 750 por WhatsApp (abre otra pestaña)"
          >
            Escríbeme por WhatsApp <span>904 291 750</span>
          </a>
        </div>
      </aside>
      <div className="mobile-actions">
        <a href={restaurant.maps} target="_blank" rel="noopener noreferrer">
          Cómo llegar
        </a>
        <a href={contact} target="_blank" rel="noopener noreferrer">
          Pedir por WhatsApp
        </a>
      </div>
    </>
  );
}
