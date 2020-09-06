import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Axios from "axios";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import spinner from "./img/spinner.gif";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setisLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
