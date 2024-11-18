import { Link } from "react-router-dom";
import banner from "../assets/banner.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Pizzas</h1>
        <p>
          Lezzetli Pizzalar <br /> Pizzas Lezzetleriyle{" "}
        </p>
        <Link to="/menü">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
