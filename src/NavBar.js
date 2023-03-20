import { useState } from "react";

const Nav = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    onSearch(search);
    console.log(search);
  }
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Funny Store</a>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" >
                Price
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                Category
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Product Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="btn btn-outline-primary" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
