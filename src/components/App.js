import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
import ArticleList from "./ArticleList";
import Phuket from '../assets/Phuket.jpg'
import Article from "./Article";
import { Navbar } from "./Navbar";
import AddContent from "./AddContent";


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://server-1-gaf8.onrender.com/posts")
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header name="Rejuvenate" />} />
          <Route path='/about' element={<About image={Phuket} about={blogData.about} />} />
          <Route path='/articles' element={<Article posts={articles} />} />
          <Route path='/article/:id' element={<ArticleList posts={articles} />} >
          </Route>
          <Route path='/add' element={<AddContent setArticles={setArticles} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;
