import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <img className="logo" src="public/logo_moon.png" alt="" />
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
