import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
import ArticleList from "./AticleList";
import Phuket from '../assets/Phuket.jpg'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Rejuvenate" />
      <About image={Phuket} about={blogData.about} />
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
