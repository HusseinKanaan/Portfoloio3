import HoverButton from '../components/HoverButton';
import ScrollControl from './ScrollControl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const StickyHeader = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [targetId, setTargetId] = useState(null);
    const router = useRouter();

    // Scrollen zum "Leistungen" Bereich und Hinzufügen der 'active'-Klasse
    // Funktion zur Einstellung der 'active' Klasse
    const setActiveLink = () => {
        document.querySelectorAll('.navbar li').forEach(item => {
            item.classList.remove('active');
        });

        // Verwende `router.pathname` für den aktuellen Pfad
        const activeLink = document.querySelector(`.navbar a[href="${router.pathname === '/' ? '/' : router.pathname}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add('active');
        }
    };

    useEffect(() => {
        // Setze die 'active' Klasse beim Laden der Seite
        setActiveLink();

        // Füge den Routenwechsel-Event-Listener hinzu
        router.events.on('routeChangeComplete', setActiveLink);

        // Entferne den Listener, wenn der Component unmounted wird
        return () => {
            router.events.off('routeChangeComplete', setActiveLink);
        };
    }, [router.pathname]); // Trigger nur bei `pathname`-Änderungen

    // Funktion zur Steuerung der Anzeige der Navbar
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > lastScrollY && scrollY > 50) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setIsScrolled(scrollY > 100);
            setLastScrollY(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (
        <div className="background-container">
            <div className={`navbar navbar-expand-lg d-flex justify-content-center sticky-header ${isHidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link href="/" className='navbar-brand'>
                        <Image priority={true} src="/logo4.png" alt="Logo" width={100} height={100} className="img-fluid max-width-100" />
                        <span className="logoSpan" id="logoSchrift"></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul id="primary-menu" className="m-auto nav-underline list-unstyled d-flex align-items-center">
    <li className={`menu-item ${router.pathname === '/about' ? 'active' : ''}`}>
        <Link href="/about" className="text-decoration-none">Über mich</Link>
    </li>
    <li className="menu-item">
        <a className="text-decoration-none">Vorteile</a>
    </li>
    <li className={`menu-item ${router.pathname === '/' ? 'active' : ''}`}>
        <Link href="/#service" className="text-decoration-none">Leistungen</Link>
    </li>
    <li className={`menu-item ${router.pathname === '/#faq' ? 'active' : ''}`}>
        <Link href="/#faq" className="text-decoration-none">FAQ</Link>
    </li>
    <li className="d-lg-none menu-item">
        <a className="text-decoration-none">Kontakt</a>
    </li>
</ul>

                        <div className="d-flex">
                            <button className="custom-btn btn-5">
                                Kontakt
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ScrollControl Komponente */}
            <ScrollControl targetId={targetId} />
        </div>
    );
};

export default StickyHeader;