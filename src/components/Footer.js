import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; pizzas.com</p>
        <FaInstagram />
        <FaFacebookF />
        <BsTwitterX />
      </div>
    </div>
  );
}

export default Footer;
