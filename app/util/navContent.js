const navContent = {
  menu: [
    {
      name: "Company",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Products",
      url: "/products",
      submenu: [
        {
          name: "Microscopes",
          url: "/microscopes",
        },
        {
          name: "Centrifuges",
          url: "/centrifuges",
        },
      ],
    },
  ],
};

export default navContent;
