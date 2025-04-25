export interface Dish {
  id: number
  name: string
  image: string
  price: number
  views: number
  sold: number
  reviews: {
    stars: number
    comment: string
  }[]
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Couscous Royal",
    image: "https://cdn.tasteatlas.com//Images/Dishes/d0e38ceb77094c56b5a6c756f481bdb6.jpg?w=250&h=141",
    price: 1200,
    views: 5,
    sold: 30,
    reviews: [
      { stars: 5, comment: "Délicieux et copieux." },
      { stars: 4, comment: "Goût authentique!" },
    ],
  },
  {
    id: 2,
    name: "Chakchouka",
    image: "https://cdn.tasteatlas.com//Images/Dishes/16db5759e81b4166a0eb8bccaa211e6a.jpg?w=905&h=510",
    price: 800,
    views: 12,
    sold: 45,
    reviews: [
      { stars: 5, comment: "Un plat simple mais tellement savoureux!" },
      { stars: 5, comment: "Les épices sont parfaitement dosées." },
    ],
  },
  {
    id: 3,
    name: "Tajine Zitoune",
    image: "https://cdn.tasteatlas.com//images/dishes/12d8d78e1e6e4d2fb4ddb7f015415a5a.jpg?w=250&h=141",
    price: 950,
    views: 8,
    sold: 25,
    reviews: [
      { stars: 4, comment: "J'adore les olives dans ce plat." },
      { stars: 3, comment: "Un peu trop salé à mon goût." },
    ],
  },
  {
    id: 4,
    name: "Chorba Frik",
    image: "https://cdn.tasteatlas.com//Images/Dishes/aa325778a367403dab3091939991a2cb.jpg?w=250&h=141",
    price: 600,
    views: 20,
    sold: 60,
    reviews: [
      { stars: 5, comment: "Parfaite pour le Ramadan!" },
      { stars: 4, comment: "Réconfortante et savoureuse." },
    ],
  },
  {
    id: 5,
    name: "Makroud El Louz",
    image: "https://cdn.tasteatlas.com//images/dishes/1d9b5a152cb14020b789c0d08994146d.jpg?w=905&h=510",
    price: 450,
    views: 3,
    sold: 15,
    reviews: [
      { stars: 5, comment: "Ces pâtisseries sont divines!" },
      { stars: 5, comment: "Le miel et les amandes se marient parfaitement." },
    ],
  },
  {
    id: 6,
    name: "Bourek",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayXn_M20DrAG2WA5M_1EtYCbefv8LrPjG-d1N8CtZFg&s&ec=72940543",
    price: 550,
    views: 7,
    sold: 40,
    reviews: [
      { stars: 4, comment: "Croustillant à l'extérieur, fondant à l'intérieur." },
      { stars: 5, comment: "La farce est délicieusement épicée." },
    ],
  },
]
