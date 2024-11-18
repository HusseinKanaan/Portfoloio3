import styles from "./Footer.module.css";
import Typewriter from '../components/Typewriter';
{/* Footer */ }

export default function uebermich() {
    return(
<footer className="container-fluid text-white py-5 footerBackgroundCollor">
    <div>
        <Typewriter />
    </div>

    <div className=" container d-flex flex-column text-center">
        <a className="fw-bold fs-4 mb-4  text-decoration-none">
            <i className={`bi bi-bag-heart-fill ${styles.headingColor} me-2 `}>Freddys famous food`</i>
        </a>
        <p className='custom-text-color-service'>Follow us</p>
        <div className='custom-text-color-service'>
            <i className="bi bi-facebook me-2 fs-4"></i>
            <i className="bi bi-instagram me-2 fs-4"></i>
            <i className="bi bi-twitter me-2 fs-4"></i>
            <i className="bi bi-youtube me-2 fs-4"></i>
        </div>
        <hr />
        <div className="justify-content-center d-flex flex-lg-row flex-column">
            <a className="custom-text-color-service  me-4 text-decoration-none" href="#">Ein Restaurant empfehlen</a>
            <a className="custom-text-color-service me-4 text-decoration-none" href="#">Ein Restaurant anmelden</a>
            <a className="custom-text-color-service me-4 text-decoration-none" href="#">AGB</a>
            <a className="custom-text-color-service me-4 text-decoration-none" href="#">Datenschutzerklärung</a>
            <a className="custom-text-color-service me-4 text-decoration-none" href="#">Impressum</a>
        </div>
    </div>
</footer>
    )
}