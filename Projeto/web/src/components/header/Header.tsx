import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>LastPlayed</h1>
      <Link to="/my-reviews">Minhas Reviews</Link>
    </header>
  );
};

export default Header;
