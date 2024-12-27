import styles from "./Footer.module.css";
import Typewriter from "../components/Typewriter";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from 'next/link';
import CookieBanner from "./cookieBanner";

const Footer = ({ toggleSettings }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Branding und Beschreibung */}
                <div id="contact" className={styles.footerTop}>
                    <div>
                        <h1 className={styles.footerLogo}>Wie kann ich ihnen <br></br> helfen?</h1>
                        {/* E-Mail und Telefon Icons */}
                        <div className={styles.contactIcons}>
                            <p className={styles.footerDescription}>
                                Innovatives Webdesign, das Marken auf die nächste Ebene bringt. Wir schaffen digitale Erlebnisse, die beeindrucken.
                                Innovatives Webdesign, das Marken auf die nächste Ebene bringt. Wir schaffen digitale Erlebnisse, die beeindrucken.
                            </p>

                                <i className={`${styles.customList}`}>Hussein Kanaan</i>
                            <br />
                            <i className={`${styles.customList}`}> Telefon: +49 157 343 66370</i> 
                            <br />  
                            <i className={`${styles.customList}`}>E-Mail: husseinkanaan255@gmail.com</i>
                        </div>
                    </div>
                    {/* Newsletter Sektion */}
                    <div /* className={styles.newsletter} */>
                        <ContactForm />
                    </div>
                </div>
                {/* Navigationslinks */}
                <div className={styles.footerLinks}>
                    <div className={styles.footerColumn}>
                        <h5>Portfolio</h5>
                        <ul>
                            <li><a href="#">Projekte</a></li>
                            <li><Link href="#service">Leistungen</Link></li>
                            <li><Link href="/about/#piechart">Technologien</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h5>Informationen</h5>
                        <ul>
                            <li><Link href="/about">Über mich</Link></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h5>Rechtliches</h5>
                        <ul>
                            <li><Link href="/datenschutz"> Datenschutz</Link></li>
                            <li><Link href='/#cookie-settings'>Cookie-Einstellungen</Link></li>
                            <li><Link href="/impressum"> Impressum</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Social Media und Bottom Section */}
                <div className={styles.footerBottom}>
                    <div className={styles.socialIcons}>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-github"></i>
                        <i className="bi bi-dribbble"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-discord"></i>
                    </div>
                    <p>&copy; {new Date().getFullYear()} copyright</p>
                    <a href="#" className={styles.scrollTop}>Nach oben ↑</a>
<CookieBanner/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;