import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/footer";
import NewsContent from "./components/NewsContent/NewsContent";
import Header from "./components/Header/Header";

function App() {
  const [category, setcategory] = useState("business");
  const [newsArray, setnewsArray] = useState([]);

  useEffect(async () => {
    try {
      const getResponse = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setnewsArray(getResponse.data.articles);
    } catch (error) {
      alert(error);
    }
  });

  return (
    <div>
      <Header setcategory={setcategory}></Header>
      <NewsContent newsArray={newsArray}></NewsContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
