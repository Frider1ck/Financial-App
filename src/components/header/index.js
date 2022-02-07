import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/use-them";

function Header() {
  const [activeCategories, setActiveCategories] = React.useState(1);
  const {setTheme} = useTheme()

  const onSelect = (index) => {
    setActiveCategories(index);
  };

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  
  const handleDarttThemeClick = () => {
    setTheme('dart');
  }

  return (
    <div className="Header">
      <div className="Header__change-button">
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
      <div className="Header__theme">
      <button
          className={'Header__theme-light'}
          onClick={handleLightThemeClick}
        >
          Light
        </button>
        <button
          className={"Header__theme-dart"}
          onClick={handleDarttThemeClick}
        >
          Dart
        </button>
      </div>
    </div>
  );
}

export default Header;
