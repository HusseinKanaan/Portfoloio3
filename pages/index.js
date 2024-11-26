import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ShuffleCarousel from '../components/ShuffleCarousel';
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import FAQAccordion from "../components/FAQAccordion";
import PieChart from '../components/PieChart';
import Status from '../components/Status';
import Workflow from '../components/Workflow';
import ButtonDark from '../components/ButtonDark';
import ButtonLight from '../components/ButtonLight';
import { useMultipleScrollTextAnimation } from '../hooks/useMultipleScrollTextAnimation'; // Neuer Hook für mehrere Texte
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
/* import HoverButton from '@/components/HoverButton'; */




export default function Home() {
  // Für Text-Animationen
  const { visibleTexts, textRefs } = useMultipleScrollTextAnimation();

  // Für Bild-Scroll-Effekte
  const [scrollImageLoaded, setScrollImageLoaded] = useState(false);
  const scrollImageRef = useRef(null);

  // Für Hero-Bild, das nur beim Laden der Seite erscheint
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const handleScrollImage = () => {
    if (scrollImageRef.current) {
      const rect = scrollImageRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
      setScrollImageLoaded(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollImage);
    return () => {
      window.removeEventListener('scroll', handleScrollImage);
    };
  }, []);

  useEffect(() => {
    setHeroImageLoaded(true); // Hero-Bild-Fade-In beim Laden der Seite
  }, []);
  return (
    <>
      <Head>
        <title>Hussein</title>
      </Head>
      {/*/// Navbar */}
      <>
        <StickyHeader />
      </>
      {/*/// Header */}
      <header id="custom-header">
        <div id="divRelative" className="container position-relative custom-height">
          <div className="row custom-height">
            <div className="col-md-4 d-flex align-items-center custom-height-header-text">
              <div>
                {/*                 <h3 className="h5 customText">
                  <small className=' customTextSmall'>Webdesigner aus Norderstedt</small><br />
                </h3> */}
                <h1 className="customTextHeading fw-bold mb-3">Professionelles  Webdesign & <br /><span> Webentwicklung</span></h1>
                <p className="customText mb-5">
                  Suchst du eine effektive Online-Lösung? Als Freelancer aus Norderstedt biete ich Webdesign und Webentwicklung mit React, Bootstrap oder Webflow. Fordere jetzt dein kostenloses Angebot an!
                </p>
                {/*                 <p className=' customTextSmall text-muted'> Front-end Entwickler / Webdesigner </p> */}
                <div className=' '>
                  <Status />
                </div>
                {/*                 <a href="#" className="typewrite" data-period="3000" data-type='["Front-end Entwickler / Webdesigner.", "I Love Javascript"]'>
                  <span className="wrap"></span>
                </a> */}
                <div className='d-flex gap-3'>
                  <a href="https://github.com/HusseinKanaan" target="_blank" rel="noopener noreferrer"><i className="custom-logo-color bi bi-github me-2 fs-2"></i></a>
                  <a href="https://discord.gg/23HPW8mX" target="_blank" rel="noopener noreferrer"><i className="custom-logo-color bi bi-discord me-2 fs-2"></i></a>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><i className=" custom-logo-color bi bi-linkedin fs-2"></i></a>
                  {/*                   <div className=''>
                    <HoverButton />
                  </div> */}
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <div id=' divRelative' className="col-md-8 d-flex align-items-end position-relative">
              <div id="divAbsoluteHero" className='position-absolute'>
                <Image
                  style={{ clipPath: "inset(0 0 20% 0)", top: "20%", right: '7rem' }}
                  src="/me.png"
                  loading="lazy"
                  blurDataURL="/images/meBlur.png"
                  placeholder="blur"
                  alt="Smooth Loaded Image"
                  width={1304}
                  height={997}
                  className={`position-absolute img-fluid fade-in ${heroImageLoaded ? 'loaded' : ''}`}
                  onLoad={() => setHeroImageLoaded(true)}
                />
              </div>
            </div>
          </div>
          {/*//// Overlap */}
          {/* top-10 start-50  */}
          <section id="divAbsolute" className="overlap rounded-3 position-absolute bottom-0 start-50 translate-middle-x shadow-lg d-flex align-items-center">
            <div className="container-fluid  text-center">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 custom-text-overlap">
                <div className="col">Responsive Design</div>
                <div className="col">Programmierung</div>
                <div className="col">Dev</div>
                <div className="col">mobile-first</div>
              </div>
            </div>
          </section>
        </div>
      </header>
      {/*/// Main Content */}
      <main>
        {/* Seite 2 Vorteile */}
        <section id='vorteile' className={`container h-25}`} >
          <div className=' text-center vh-100 d-flex justify-content-center align-items-center'>
            <div /* width={1000} */ className={`h-25 fade-in ${visibleTexts[0] ? 'loaded' : ''}`} ref={el => textRefs.current[0] = el}>
              <h2 className='display-5  fw-bold cutomTextColor2'>Heben Sie sich von der Konkurrenz ab und erreichen Sie mehr Kunden!!</h2>
              <strong className='customText'>Ihr digitaler Auftritt – professionell, individuell und suchmaschinenoptimiert.</strong>
              <p className='customText'>Ich entwickle individuelle Website Designs für Unternehmen und bringe Ihre Online-Präsenz auf den neuesten Stand. Kurze Ladezeiten und Responsive Design sind natürlich inklusive. Je nach Projekt und Umfang arbeite ich dabei mit einem Team aus Experten zusammen</p>
              <div className='frame'>
                <ButtonLight text="Projekt Anfragen" />
              </div>
            </div>
          </div>
        </section>
        {/* Seite 3 Service */}
        <div className='custom-background-blue'>
          <div
            id='service'
            className={`heading-service-bgcolor container-heading-service fade-in ${visibleTexts[5] ? 'loaded' : ''
              }`}
            ref={(el) => (textRefs.current[5] = el)}
          >
            <div className='heading-service'>
              <h1 className='display-5 heading-service-bgcolor text-center'>
                Webdesigner für React, Next und Api-Anbindungen usw....
              </h1>
            </div>
          </div>
          <section className='vh-auto container d-flex flex-column align-items-center'>
            <div className='custom-text-color-service row custom-height-service container-fluid'>
              {/* Erste Spalte (React / Webdesign und App) */}
              <div className='col-md-6 d-flex flex-column align-items-center'>
                {/* React / Webdesign */}
                <div
                  className={`custom-margin-service col fade-in ${visibleTexts[6] ? 'loaded' : ''
                    }`}
                  ref={(el) => (textRefs.current[6] = el)}
                >
                  <div className='custom-margin-service col fs-5'>
                    <h2 className='custom-text-color-service display-6 fw-bold'>
                      <small>React / Webdesign</small>
                    </h2>
                    <p className='text-left-service'>
                      Ich erstelle für Sie die Website, die Sie wirklich benötigen. Ihr
                      neues Webdesign wird kreativ, seriös, übersichtlich und auf allen
                      gängigen Endgeräten optimal dargestellt. Durch die Anwendung von
                      WordPress wird eine einfache Handhabung sichergestellt. Dadurch
                      können Sie Ihre Website selbstständig pflegen und aktualisieren.
                      In einem Beratungsgespräch erörtern wir gemeinsam Ihre Ziele und
                      die Möglichkeiten der Umsetzung.
                    </p>
                    <div className='d-flex justify-content-left frame'>
                      <ButtonDark text='Mehr erfahren' />
                    </div>
                  </div>
                </div>
                {/* App */}
                <div
                  className={`custom-margin-service col fade-in ${visibleTexts[7] ? 'loaded' : ''
                    }`}
                  ref={(el) => (textRefs.current[7] = el)}
                >
                  <div className='custom-margin-service col fs-5'>
                    <h2 className='custom-text-color-service display-6 fw-bold'>
                      <small>App</small>
                    </h2>
                    <p className='text-left-service'>
                      Ich erstelle für Sie die Website, die Sie wirklich benötigen. Ihr
                      neues Webdesign wird kreativ, seriös, übersichtlich und auf allen
                      gängigen Endgeräten optimal dargestellt. Durch die Anwendung von
                      wird eine einfache Handhabung sichergestellt. Dadurch können Sie
                      Ihre Website selbstständig pflegen und aktualisieren. In einem
                      Beratungsgespräch erörtern wir gemeinsam Ihre Ziele und die
                      Möglichkeiten der Umsetzung.
                    </p>
                    <div className='d-flex justify-content-left frame'>
                      <ButtonDark text='Mehr erfahren' />
                    </div>
                  </div>
                </div>
              </div>
              {/* Zweite Spalte (Api und Support / Wartung) */}
              <div className='col-md-6 d-flex flex-column align-items-center'>
                {/* Api */}
                <div
                  className={`custom-margin-service col fade-in ${visibleTexts[8] ? 'loaded' : ''
                    }`}
                  ref={(el) => (textRefs.current[8] = el)}
                >
                  <div className='custom-margin-service col fs-5'>
                    <h2 className='custom-text-color-service display-6 fw-bold'>
                      <small>Api</small>
                    </h2>
                    <p className='text-left-service'>
                      Ich erstelle für Sie die Website, die Sie wirklich benötigen. Ihr
                      neues Webdesign wird kreativ, seriös, übersichtlich und auf allen
                      gängigen Endgeräten optimal dargestellt. Durch die Anwendung von
                      WordPress wird eine einfache Handhabung sichergestellt. Dadurch
                      können Sie Ihre Website selbstständig pflegen und aktualisieren.
                      In einem Beratungsgespräch erörtern wir gemeinsam Ihre Ziele und
                      die Möglichkeiten der Umsetzung.
                    </p>
                    <div className='d-flex justify-content-left frame'>
                      <ButtonDark text='Mehr erfahren' />
                    </div>
                  </div>
                </div>
                {/* Support / Wartung */}
                <div
                  className={`custom-margin-service col fade-in ${visibleTexts[11] ? 'loaded' : ''
                    }`}
                  ref={(el) => (textRefs.current[11] = el)}
                >
                  <div className='custom-margin-service col fs-5'>
                    <h2 className='custom-text-color-service display-6 fw-bold'>
                      <small>Support / Wartung</small>
                    </h2>
                    <p className='text-left-service'>
                      Ich erstelle für Sie die Website, die Sie wirklich benötigen. Ihr
                      neues Webdesign wird kreativ, seriös, übersichtlich und auf allen
                      gängigen Endgeräten optimal dargestellt. Durch die Anwendung von
                      WordPress wird eine einfache Handhabung sichergestellt. Dadurch
                      können Sie Ihre Website selbstständig pflegen und aktualisieren.
                      In einem Beratungsgespräch erörtern wir gemeinsam Ihre Ziele und
                      die Möglichkeiten der Umsetzung.
                    </p>
                    <div className='d-flex justify-content-left frame'>
                      <ButtonDark text='Mehr erfahren' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seite 4 Portfolio */}
        {/* Carousell */}
        <div className='container'>
          <ShuffleCarousel />
        </div>
        {/* Seite 5 About */}
        <div className='vh-100 margin-about'>
          <div id='divRelative' className={` d-flex align-items-center custom-height-about custom-background-blue container position-relative shadow-lg fade-in ${scrollImageLoaded ? 'loaded' : ''}`}>
            <section id='vorteile' className={`container  fade-in ${visibleTexts[9] ? 'loaded' : ''}`} ref={el => textRefs.current[9] = el}>
              <div className=''>
                <div /* width={1000} */ className='h-25 custom-text-container '>
                  <h1 className='fw-bold display-4 about-heading'> Ihr Webdesigner <br></br>
                    <span>in HH und Norderstedt</span></h1>
                  <div className='custom-about-text-div mb-5'>
                    <p className=''>Hallo ich bin Hussein Kanaan, Webdesigner / Frontend Entwickler in Norderstedt und Hamburg. Ich arbeite als Webdesign Freelancer sowie projektbezogen im Auftrag von Agenturen.</p>
                    <p>Ein innovativer und effizienter Internetauftritt ist für ein Unternehmen im 21. Jahrhundert unverzichtbar. Für Ihre erfolgreiche Präsentation im Internet biete ich individuelles Webdesign und professionelle Webprogrammierung. Mein Ziel ist es, Ihnen als Person oder Unternehmen ein seriöses Erscheinungsbild im World Wide Web zu verleihen. Um Ihre Projekte und Ideen erfolgreich umzusetzen, arbeite ich stets mit dem neusten technischen Standard. Ich begleite Sie vom ersten Gespräch bis zur Fertigstellung und darüber hinaus, denn die persönliche Kundenbindung hat bei mir oberste Priorität.</p>
                  </div>
                  <div className='d-flex justify-content-left'>
                    <ButtonDark text="Jetzt beraten lassen" />
                  </div>
                </div>
              </div>
            </section>
            <div id="divAbsoluteAbout" className="position-absolute translate-middle-y" style={{ clipPath: "inset(0 0 30% 0)", right: "-1rem", top: "25%" }}>
              <Image
                ref={scrollImageRef}
                className={`position-absolute top-50 translate-middle-y translate-middle fade-in ${scrollImageLoaded ? 'loaded' : ''}`}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/images/meBlur2.png"
                src="/me.png"
                alt="Smooth Loaded Image"
                width={800}
                height={611}
                style={{ clipPath: "inset(0 0 30% 0)", right: "-15rem" }}
                onLoad={() => setScrollImageLoaded(true)} // Nur hier notwendig
              />
            </div>
          </div>
        </div>
        {/*Seite 6 regional-services */}
        <section id='regional-services' className={`custom-background-lightblue h-25`}>
          <div className='container custom-height-container d-flex justify-content-center align-items-center'>
            <div /* width={1000} */ className={`text-center h-25 fade-in ${visibleTexts[2] ? 'loaded' : ''}`} ref={el => textRefs.current[2] = el}>
              <h2 className='display-5 fw-bold'> Webdesigner für Deutschland,
                Österreich und die Schweiz</h2>
              <p className='customText'>Ich betreue Kunden in ganz Deutschland, Österreich und der Schweiz. Mein Kundenkreis umfasst kleine und mittelständische Unternehmen bis hin zu Werbe- und Grafikagenturen. Zu meiner täglichen Arbeit gehört Beratung, Betreuung, individuelles Webdesign, Webentwicklung und Suchmaschinenoptimierung (SEO).
                Sie hätten gern ein unverbindliches und kostenloses Webdesign-Angebot? Ihre erfolgreiche Website ist nur einen Klick entfernt. Ich freue mich auf Ihre Anfrage, um Ihr Projekt gemeinsam zu verwirklichen.</p>
              <div className='d-flex justify-content-center frame'>
                <ButtonLight text='Jetzt Kontakt aufnehmen' />
              </div>
            </div>
          </div>
        </section>
        {/* Pie-chart */}
        <div id='service' className='bg-color-heading-piechart'>
          <div id='divAbsolute' className='position-absolute heading-piechart text-white container'>
            <div id='divAbsolute' className='position-absolute sibi'>
              <h1 className={`display-6 text-left fade-in heading ${visibleTexts[10] ? 'loaded' : ''}`} ref={el => textRefs.current[10] = el}>Skills</h1>
            </div>
          </div>
          <section className='pie-chart-container-height d-flex align-items-center'>
            {/*         <div className='pie-chart-heading'></div> */}
            <div className="container d-flex align-items-center justify-content-evenly">
              <div className='pie-chart-text position-relative'>
                {/*             <p className={`display-6 pie-chart-heading-left mb-4 fade-in ${visibleTexts[22] ? 'loaded' : ''}`} ref={el => textRefs.current[22] = el}>Part-Designer</p> */}

                <p className={`fade-in ${visibleTexts[12] ? 'loaded' : ''}`} ref={el => textRefs.current[12] = el}> <span className='pie-chart-span'>✔</span  >BOOTSTRAP</p>

                <p className={` fade-in ${visibleTexts[13] ? 'loaded' : ''}`} ref={el => textRefs.current[13] = el}> <span className='pie-chart-span' >✔</span>SASS</p>

                <p className={` fade-in ${visibleTexts[14] ? 'loaded' : ''}`} ref={el => textRefs.current[14] = el}> <span className='pie-chart-span'>✔</span>ADOBE XD / FIGMA </p>

                <p className={` fade-in ${visibleTexts[15] ? 'loaded' : ''}`} ref={el => textRefs.current[15] = el}> <span className='pie-chart-span'>✔</span>RESPONSIVE WEBDESIGN</p>

                <p className={` fade-in ${visibleTexts[16] ? 'loaded' : ''}`} ref={el => textRefs.current[16] = el}> <span className='pie-chart-span'>✔</span>HTML / CSS</p>
              </div>
              <PieChart />
              <div className='pie-chart-text pie-chart-container-partcoder'>
                {/*           <p className={`display-6 pie-chart-heading-right mb-4 fade-in ${visibleTexts[23] ? 'loaded' : ''}`} ref={el => textRefs.current[23] = el}>Part-Coder</p> */}

                <p className={`fade-in ${visibleTexts[17] ? 'loaded' : ''}`} ref={el => textRefs.current[17] = el}> <span className='pie-chart-span'>✔</span>FRONTEND ENTWICKLUNG</p>

                <p className={`fade-in ${visibleTexts[18] ? 'loaded' : ''}`} ref={el => textRefs.current[18] = el}> <span className='pie-chart-span'>✔</span>JAVASCRIPT</p>

                <p className={`fade-in ${visibleTexts[19] ? 'loaded' : ''}`} ref={el => textRefs.current[19] = el}> <span className='pie-chart-span'>✔</span>REACT / NEXT</p>

                <p className={`fade-in ${visibleTexts[20] ? 'loaded' : ''}`} ref={el => textRefs.current[20] = el}> <span className='pie-chart-span'>✔</span>MEINEN COMPUTER ANSCHREIEN</p>

                <p className={`fade-in  ${visibleTexts[21] ? 'loaded' : ''}`} ref={el => textRefs.current[21] = el}> <span className='pie-chart-span'>✔</span>PIZZA ESSEN</p>
              </div>
            </div>
          </section>
        </div>
        {/* Seite 8 */}
        <section id='regional-services' className={`custom-background-lightblue  h-25`}>
          <div className='custom-height-container-umsetzung d-flex justify-content-center align-items-center'>
            <div /* width={1000} */ className={`text-center h-25 fade-in ${visibleTexts[3] ? 'loaded' : ''}`} ref={el => textRefs.current[3] = el}>
              <h2 className='display-5 fw-bold cutomTextColor2'> Starten wir mit der Umsetzung
                Ihrer Website!</h2>
              <p className='customText'>Erläutern Sie Ihre Projektwünsche und erhalten Sie ein unverbindliches und kostenloses Webdesign-Angebot für Ihre neue Webseite.</p>
              <div className='d-flex justify-content-center frame'>
                <ButtonLight text='jetzt Kontakt aufnehmen' />
              </div>
            </div>
          </div>
        </section>
        {/* Workflow */}
        <div className='workflow-container'>
          <Workflow />
        </div>
        {/*Random Facts */}
        {/*         <div>
          <SmoothMovingImage />
        </div> */}
        {/* Bar-chart */}
        {/*         <div className=''>
          <VerticalBarChart />
        </div> */}
        <div className='vh-100'>
        </div>
        <div className='vh-100'>
        </div>
        {/* Seite 9 FAQ */}
        <div id='faq'>
          <Container className="py-5">
            <motion.h2
              className="text-center mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Häufig gestellte Fragen
            </motion.h2>
            <FAQAccordion />
          </Container>
        </div>
        {/* <div id="divAbsolute" className="rounded-3 position-absolute top-10 start-50 translate-middle shadow-lg d-flex align-items-center   shadow-lg d-flex align-items-center   "></div> */}
        {/*           <button id="animation-button" type="button" value="My Work" className="bt1 mt-5" />
          <input type="button" value="contact" className="bt2 mt-5" /> */}
        <section id="text-container"></section> {/* Container für die Typing-Animation */}
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
