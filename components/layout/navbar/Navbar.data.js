const pages = ["Hizmatlarimiz", "Biz haqimizda", "Narxlar", "Aloqa"];
const links = [
  {
    name: "Hizmatlarimiz",
    href: "/#services",
    passHref: true,
  },
  {
    name: "Biz haqimizda",
    href: "/about",
    passHref: false,
  },
  {
    name: "Narxlar",
    href: "/prices",
    passHref: false,
  },
  {
    name: "Aloqa",
    href: "/contact",
    passHref: false,
  },
];

export { pages, links };
