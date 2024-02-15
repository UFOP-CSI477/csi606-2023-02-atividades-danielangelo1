import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const id = "1";
  return (
    <header>
      <Link to="/">
        <h1>LastPlayed</h1>
      </Link>

      <Link to={`/reviews/${id}`}>Minhas Reviews</Link>
    </header>
  );
};

export default Header;
