interface dataLofiProps {
  imageUrl: string;
  title: string;
  id: string;
  artist: string;
  detailUrl: string;
}

const albumData: Array<dataLofiProps> = [
  {
    imageUrl:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Luvpug_Final-qg0zxuc3yospxfx4569vh4tkhtbx6kgvq41ilmfbts.jpg",
    title: "Sunset",
    id: "sunset",
    artist: "Spaniel Mac, Luv pug",
    detailUrl: "/api/releases?album=sunset",
  },
  {
    imageUrl:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kosmic-koala-lofi16-9-scaled-qg0zl6gdw1gnikbb377tdtv0dxqwhd72bfn0uf79nk.jpg",
    title: "Black Hole",
    id: "black-hole",
    artist: "Le Metroid",
    detailUrl: "/api/releases?album=black-hole",
  },
  {
    imageUrl:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kupla-16.9-scaled-qg0z5up4gahc7gkrl2pt873forafz1cmjkp04zxd40.jpg",
    title: "Somewhee. Nowhere",
    id: "somewhere-nowhere",
    artist: "Kupla",
    detailUrl: "/api/releases?album=somewhere-nowhere",
  },
];
export default albumData;
