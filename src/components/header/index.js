import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const [activeCategories, setActiveCategories] = React.useState(1);
  const onSelect = (index) => {
    setActiveCategories(index);
  };

  return (
    <div className="Header">
      <div className="change-button">
      <Link to="/income">
        <button
          className={activeCategories === 0 ? "active" : ""}
          onClick={() => onSelect(0)}
        >
          Доходы
        </button>
      </Link>

      <Link to="/">
        <button
          className={activeCategories === 1 ? "active" : ""}
          onClick={() => onSelect(1)}
        >
          Расходы
        </button>
      </Link>
      </div>
      <div>
      <button
          className={activeCategories === 1 ? "active" : ""}
          onClick={() => onSelect(1)}
        >
          Расходы
        </button>
        <button
          className={activeCategories === 1 ? "active" : ""}
          onClick={() => onSelect(1)}
        >
          Расходы
        </button>
      </div>
    </div>
  );
}

export default Header;
