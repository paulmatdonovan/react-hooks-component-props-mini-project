import logo from "../assets/logo";

const blogData = {
  name: "Rejuvenate",
  image: logo,
  about: "A place where you can write about your interests",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
      content: "Setting up the building blocks of your site"
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
      content: "Setting up the building blocks of your site"
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
      content: "Setting up the building blocks of your site"
    },
  ],
};

export default blogData;
