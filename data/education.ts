interface SliderModel {
  image: string;
  name: string;
  shortDescription?: string;
}

export const clients: SliderModel[] = [
  {
    image: "/images/partners/enspd.png",
    name: "ENSPD",
    shortDescription: "École Nationale Supérieure Polytechnique de Douala",
  },

  {
    image: "/images/partners/FORTINET.png",
    name: "FORTINET",
    shortDescription: "FORTINET",
  },
  {
    image: "/images/partners/ICTU.jpg",
    name: "ICTU",
    shortDescription: "ICT University",
  },
  {
    image: "/images/partners/istag.png",
    name: "ISTAG",
    shortDescription:
      "Institut Superieur de Technologie Appliquée et de Gestion",
  },
  {
    image: "/images/partners/hintel.png",
    name: "Hintel",
    shortDescription: "",
  },
];
