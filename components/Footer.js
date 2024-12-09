import styles from "./Footer.module.css";
import Typewriter from "../components/Typewriter";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Branding und Beschreibung */}
                <div id="contact" className={styles.footerTop}>
                    <div>
                        <h1 className={styles.footerLogo}>Hussein Kanaan</h1>
                        {/* E-Mail und Telefon Icons */}
                        <div className={styles.contactIcons}>
                            <i className=""></i> E-Mail: husseinkanaan255@gmail.com
                            <br />
                            <i className=""></i> Telefon: +49 157 343 66370
                        </div>
                        <p className={styles.footerDescription}>
                            Innovatives Webdesign, das Marken auf die nächste Ebene bringt. Wir schaffen digitale Erlebnisse, die beeindrucken.
                        </p>
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
                            <li><a href="#">Leistungen</a></li>
                            <li><a href="#">Technologien</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h5>Informationen</h5>
                        <ul>
                            <li><a href="#">Über mich</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h5>Rechtliches</h5>
                        <ul>
                            <li><a href="#">Datenschutzerklärung</a></li>
                            <li><a href="#">AGB</a></li>
                            <li><a href="#">Impressum</a></li>
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
                    <p>&copy; {new Date().getFullYear()} H.K</p>
                    <a href="#" className={styles.scrollTop}>Nach oben ↑</a>
                </div>
            </div>
        </footer>
    );
}