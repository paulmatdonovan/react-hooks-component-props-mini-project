import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
import ArticleList from "./AticleList";
import Phuket from '../assets/Phuket.jpg'
import Article from "./Article";
import { Navbar } from "./Navbar";
import AddContent from "./AddContent";


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
    console.log(articles)
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header name="Rejuvenate" />} />
          <Route path='/about' element={<About image={Phuket} about={blogData.about} />} />
          <Route path='articles' element={<ArticleList posts={articles} />} />
          <Route path='/add' element={<AddContent />} />
          <Route path="article" element={<Article />} >
            <Route path=":articleId" element={<Article />} /></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
