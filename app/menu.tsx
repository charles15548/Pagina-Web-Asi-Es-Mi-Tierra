"use client";

import { useEffect, useState } from "react";
import { dishes, whatsapp } from "./data";

const categories = ["Todos", "Menú", "Criollos", "Marinos"];
const introductions: Record<string, string> = {
  "Menú": "Menú completo a S/10: entrada, segundo y refresco.",
  Criollos: "Platos a la carta y extras de nuestra pizarra. Consulta el precio de cada plato.",
  //Picantería: "Picante de cuy y trucha frita, entre nuestras especialidades.",
  Marinos: "Ceviche, chicharrón y arroz con mariscos para combinar.",
};

export default function Menu() {
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    const sync = () => {
      const selected = new URLSearchParams(window.location.search).get("carta");
      setCategory(
        selected && categories.includes(selected) ? selected : "Todos",
      );
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  function selectCategory(selected: string) {
    setCategory(selected);
    const url = new URL(window.location.href);
    if (selected === "Todos") url.searchParams.delete("carta");
    else url.searchParams.set("carta", selected);
    url.hash = "carta";
    window.history.pushState(null, "", url);
  }

  const visible = dishes.filter(
    (dish) => category === "Todos" || dish.category === category,
  );

  return (
    <>
      <div className="menu-toolbar">
        <div
          className="menu-filters"
          role="group"
          aria-label="Filtrar platos por categoría"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              aria-controls="carta-platos"
              onClick={() => selectCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="menu-note">
          Consulta precios y disponibilidad por WhatsApp.
        </p>
      </div>
      <p className="sr-only" role="status">
        {visible.length} platos en {category.toLowerCase()}.
      </p>
      <div className="menu-book chalkboard" id="carta-platos" key={category}>
        {categories
          .slice(1)
          .filter((item) => category === "Todos" || category === item)
          .map((group) => (
            <section className="menu-chapter" key={group} aria-label={group}>
              <div className="chapter-heading">
                <h3>{group}</h3>
                <p>{introductions[group]}</p>
              </div>
              <ul className="menu-list">
                {visible
                  .filter((dish) => dish.category === group)
                  .map((dish) => (
                    <li className="menu-item" key={dish.name}>
                      <div>
                        <h4>{dish.name}</h4>
                        {dish.suggested && (
                          <span className="dish-suggestion">
                            Opción sugerida · por confirmar
                          </span>
                        )}
                        {dish.description.trim() && <p>{dish.description.trim()}</p>}
                      </div>
                      <a
                        className="dish-order"
                        href={whatsapp(
                          dish.category === "Menú"
                            ? `Hola, ¿hoy tienen ${dish.name} como menú? Quisiera pedir para recoger.`
                            : dish.suggested
                              ? `Hola, ¿preparan ${dish.name}? Quisiera consultar disponibilidad y precio.`
                              : `Hola, quisiera consultar el precio y la disponibilidad de ${dish.name} para recoger.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Consultar precio de ${dish.name} por WhatsApp (abre otra pestaña)`}
                      >
                        Consultar <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
      </div>
    </>
  );
}
