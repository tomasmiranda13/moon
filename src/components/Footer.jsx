import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <ul>
            <li>Condiciones de venta</li>
            <li>Nosotros</li>
            <li>Envios</li>
            <li>Contacto</li>
          </ul>

          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <img className="logo" src="logo_moon.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
