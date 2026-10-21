export const restaurant = {
  name: "Restaurante Así es mi Tierra",
  phone: "51936040189",
  address: "Leoncio Prado, Mz. 78 Lt. 23 · Ancón 15123",
  maps: "https://www.google.com/maps/search/?api=1&query=-11.7321775,-77.1425642",
};

export const whatsapp = (message: string) =>
  `https://wa.me/${restaurant.phone}?text=${encodeURIComponent(message)}`;

export type Dish = {
  name: string;
  category: "Menú" | "Criollos" | "Picantería" | "Marinos";
  description: string;
  suggested?: boolean;
};

export const dishes: Dish[] = [
  // Segundos del letrero: son opciones rotativas, no el menú de hoy.
  { name: "Guiso de pollo", category: "Menú", description: "Consulta el acompañamiento disponible hoy." },
  //{ name: "Estofado de pavita", category: "Menú", description: "Pavita en estofado, entre las opciones rotativas del menú." },
  { name: "Arroz chaufa", category: "Menú", description: " " },
  { name: "Arroz a la cubana", category: "Menú", description: "" },
  { name: "Chuleta frita", category: "Menú", description: "Chuleta frita con el acompañamiento del día." },
  { name: "Pescado frito", category: "Menú", description: "Pescado frito. Consulta qué pescado y acompañamiento hay hoy." },
  { name: "Tortilla de verduras", category: "Menú", description: "" },
  { name: "Saltado de brócoli", category: "Menú", description: "" },


  // Platos extra del letrero y especialidades confirmadas por el dueño.
  { name: "Lomo saltado", category: "Criollos", description: "Un clásico de nuestra carta criolla." },
  { name: "Bistec a lo pobre", category: "Criollos", description: "Uno de los platos extra de nuestra pizarra." },
  { name: "Pollo a la plancha", category: "Criollos", description: "", suggested: false },
  { name: "Tallarín saltado", category: "Criollos", description: " ", suggested: false },
  
  { name: "Picante de cuy", category: "Criollos", description: "Una de nuestras especialidades y de los platos extra del letrero." },
  { name: "Trucha frita", category: "Criollos", description: "Trucha frita de nuestra carta de picantería." },
  //Picantería
  { name: "Ceviche de pescado", category: "Marinos", description: "El clásico de pescado que aparece en nuestra carta de cevichería." },
  { name: "Arroz con mariscos", category: "Marinos", description: " " },
  { name: "Chicharrón de pescado", category: "Marinos", description: "Chicharrón de pescado o de pota." },
  { name: "Dúo marino", category: "Marinos", description: "Consulta las combinaciones de ceviche, arroz con mariscos y chicharrón de pota." },
  { name: "Trío marino", category: "Marinos", description: "Ceviche, arroz con mariscos y chicharrón de pota en una sola elección." },
];
