import { useState } from "react";

const Nav = ({ onSearch, chooseCategory }) => {
  const [search, setSearch] = useState("");
  const [category, setCategoies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    console.log(search);
    setSearch("");
  };

  const handleCategory = (e) => {
    setCategoies(e);
    chooseCategory(e);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Funny Store</a>
          <div className="dropdown">
          <button 
               type="button"
               id="categoryDropdown"
               data-bs-toggle="dropdown"
               aria-expanded="false">{category || "Category"}</button>
            <ul className="dropdown-menu">
              <li>
                <a onClick ={() => handleCategory("Animal")} className="dropdown-item">
                  Animals
                </a>
              </li>
              <li>
                <a value="Automotive" className="dropdown-item">
                  Automotive
                </a>
              </li>
              <li>
                <a value="Baby" className="dropdown-item">
                  Baby
                </a>
              </li>
              <li>
                <a value="Books" className="dropdown-item">
                  Books
                </a>
              </li>
              <li>
                <a value="Clothing" className="dropdown-item">
                  Clothing
                </a>
              </li>
              <li>
                <a value="Computers" className="dropdown-item">
                  Computers
                </a>
              </li>
              <li>
                <a value="Electronics" className="dropdown-item">
                  Electronics
                </a>
              </li>
              <li>
                <a value="Garden" className="dropdown-item">
                  Garden
                </a>
              </li>
              <li>
                <a value="Grocery" className="dropdown-item">
                  Grocery
                </a>
              </li>
              <li>
                <a value="Health" className="dropdown-item">
                  Health
                </a>
              </li>
              <li>
                <a value="Home" className="dropdown-item">
                  Home
                </a>
              </li>
              <li>
                <a value="Industrial" className="dropdown-item">
                  Industrial
                </a>
              </li>
              <li>
                <a value="Jewelery" className="dropdown-item">
                  Jewelery
                </a>
              </li>
              <li>
                <a value="Kids" className="dropdown-item">
                  Kids
                </a>
              </li>
              <li>
                <a value="Movies" className="dropdown-item">
                  Movies
                </a>
              </li>
              <li>
                <a value="Music" className="dropdown-item">
                  Music
                </a>
              </li>
              <li>
                <a value="Outdoors" className="dropdown-item">
                  Outdoors
                </a>
              </li>
              <li>
                <a value="Shoes" className="dropdown-item">
                  Shoes
                </a>
              </li>
              <li>
                <a value="Sports" className="dropdown-item">
                  Sports
                </a>
              </li>
              <li>
                <a value="Tools" className="dropdown-item">
                  Tools
                </a>
              </li>
              <li>
                <a value="Toys" className="dropdown-item">
                  Toys
                </a>
              </li>
            </ul>
          </div>
        <form onSubmit={handleSubmit} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Product Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-outline-primary">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
