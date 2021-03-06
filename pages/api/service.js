// landing vizitka catalog blog
// cms eCommerce corporate service

let id = 0;

export const services = {
  small: [
    {
      imgUrl: "/images/services/monitor.svg",
      title: "Landing sahifa",
      description:
        "Biznesingizni dunyoga tanitish uchun landing sahifa yarating",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: [
        "Sahifa dizayni",
        "Statik sahifa",
        "Adaptiv sayt",
        "5 va undan ortiq bo`limlar",
        "Ijtimoiy tarmoqlarga linklar",
      ],
    },
    {
      imgUrl: "/images/services/catalog.svg",
      title: "Sayt Katalog",
      description: "Mijozlarga hizmatlar taklifini internetda yarating",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: [
        "Sayt dizayni",
        "5 va undan ortiq sahifalar",
        "Adaptiv dizayn",
        "Dinamik sahifalar",
        "Admin panel",
      ],
    },
    {
      imgUrl: "/images/services/vizitka.svg",
      title: "Sayt Vizitka",
      description:
        "Mahsulotlar sotuv tizimlarini avtomatlashtirish uchun internet do`konlar yarating",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: [
        "Sayt dizayni",
        "3 va undan ortiq sahifalar",
        "Dinamik sahifalar",
        "Admin panel",
      ],
    },
    {
      imgUrl: "/images/services/vizitka.svg",
      title: "Internet Blog",
      description:
        "Mahsulotlar sotuv tizimlarini avtomatlashtirish uchun internet do`konlar yarating",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: [
        "Sayt dizayni",
        "3 va undan ortiq sahifalar",
        "Dinamik sahifalar",
        "Admin panel",
      ],
    },
  ],
  big: [
    {
      imgUrl: "/images/services/cms.svg",
      title: "CMS (Mijozlarni boshqarish tizimi)",
      description:
        "CMS orqali mijozlaringiz bilan yanada samarali aloqa qiling",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: ["Sahifa dizayni", "Dinamik sahifalar", "Adaptiv sayt"],
    },
    {
      imgUrl: "/images/services/market.svg",
      title: "Internet Do`kon",
      description:
        "Mahsulotlar sotuv tizimini avtomatlashtirish uchun internet do`konlar yarating",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: ["Sahifa dizayni (andoza asosida)"],
    },
    {
      imgUrl: "/images/services/corporate.svg",
      title: "Korporativ Sayt",
      description: "O`z biznesingizni avtomatlashtirish uchun yana bir qadam",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: ["Sahifa dizayni"],
    },
    {
      imgUrl: "/images/services/corporate.svg",
      title: "Start Up Sayt",
      description: "O`z biznesingizni avtomatlashtirish uchun yana bir qadam",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: ["Sahifa dizayni"],
    },
  ],
  additional: [
    {
      imgUrl: "/images/services/design.svg",
      title: "Logo & Brend dizayn",
      description: "Telegram platformasida shaxsiy botingizga ega bo`ling",
      outsource: true,
      id: String(++id),
    },
    {
      imgUrl: "/images/services/google.png",
      title: "Kontekst Reklamma",
      description: "Google va Yandex orqali o`z biznesingizni reklamma qiling",
      outsource: true,
      id: String(++id),
    },
    {
      imgUrl: "/images/services/copywriting.svg",
      title: "Kopyrayting",
      description: "Mahsulotlaringiz uchun sotuvchi matnlar tuzish",
      outsource: true,
      id: String(++id),
    },
    {
      imgUrl: "/images/services/smm.png",
      title: "SMM",
      description: "Biznesingiz dizaynini biz bilan shakllantiring",
      outsource: true,
      id: String(++id),
    },
    {
      imgUrl: "/images/services/bot.svg",
      title: "Telegram Bot",
      description: "Telegram platformasida shaxsiy botingizga ega bo`ling",
      outsource: false,
      id: String(++id),
      price: 1000,
      features: ["Sahifa dizayni (andoza asosida)"],
    },
  ],
};
