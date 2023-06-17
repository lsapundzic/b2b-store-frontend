const navContent = {
  menu: [
    {
      name: "About",
      url: "/about",
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
    {
      name: "Contact Us",
      url: "/contact",
    },
  ],
};

export default navContent;
