import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
import ArticleList from "./AticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
