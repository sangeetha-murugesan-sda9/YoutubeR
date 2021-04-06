import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState("");

  const logoObject = require(`../asserts/images/logo/logo-light.svg`);
  const logoURL = logoObject.default;
  let history = useHistory();

  function onSearch(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <header className="header">
      <Link to="/">
        <img src={logoURL} alt="Logo" />
      </Link>

      <form onSubmit={onSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </header>
  );
}
