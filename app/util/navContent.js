const temp = "/icons/check_box.png";

const navContent = {
  menu: [
    {
      name: "Company",
      url: "/about",
      submenu: [
        {
          name: "About",
          url: "/about",
          icon: temp,
        },
        {
          name: "Strategy",
          url: "/strategy",
          icon: temp,
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
