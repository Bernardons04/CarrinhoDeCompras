import React, { useState, useContext} from "react";
import { BsSearch } from 'react-icons/bs';
import fetchProducts from "../../api/fetchProducts";
import './SearchBar.css'
import AppContext from "../../context/AppContext";

function SearchBar() {

  const [searchValue, setSearchValue ] = useState('');
  const {setProducts, setLoading} = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true)
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false)
    setSearchValue('');
  }

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <input type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="searchInput"
        onChange={ ({ target }) => setSearchValue(target.value)}
        required
      />
      
      <button 
        type="submit" 
        className="searchButton"  
      >
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar