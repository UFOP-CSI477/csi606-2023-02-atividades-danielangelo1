import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>LastPlayed</h1>
      </Link>
      <Link to="/my-reviews">Minhas Reviews</Link>
    </header>
  );
};

export default Header;
