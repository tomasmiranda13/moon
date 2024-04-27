import "../styles/nav.css";
import "/logo_moon.png";

function Nav() {
  return (
    <nav>
      <div>
        <img className="logo" src="logo_moon.png" alt="" />
      </div>
      <ul className="list-products">
        <li>REMERAS</li>
        <li>CAMPERAS</li>
        <li>BUZOS Y CANGUROS</li>
        <li>PANTALONES</li>
        <li>VARIOS</li>
        <li>CONTACTO</li>
      </ul>
    </nav>
  );
}

export default Nav;
