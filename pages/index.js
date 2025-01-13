import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ShuffleCarousel from '../components/ShuffleCarousel';
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import FAQAccordion from "../components/FAQAccordion";
import Status from '../components/Status';
import Workflow from '../components/Workflow';
import ButtonDark from '../components/ButtonDark';
import ButtonLight from '../components/ButtonLight';
import StepsSection from '../components/StepsSection';
import ExpertSteps from '../components/ExpertSteps';
import WebsiteAnalysisForm from '../components/WebsiteAnalysisForm';
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
                  Frontend-Entwickler mit Full-Stack-Skills aus Norderstedt – ich bringe Ihr Business und Ihre Vision in den Browser.
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
                  blurDataURL="/images/meBlur.png"
                  placeholder="blur"
                  alt="Smooth Loaded Image"
                  width={1304}
                  height={997}
                  priority
                  className={`position-absolute img-fluid fade-in ${heroImageLoaded ? 'loaded' : ''}`}
                  onLoad={() => setHeroImageLoaded(true)}
                />
              </div>
            </div>
          </div>
          {/*//// Overlap */}
          {/* top-10 start-50  */}
          <section id="divAbsolute" className="overlap rounded-3 position-absolute bottom-0 start-50 translate-middle-x shadow-lg d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row justify-content-between align-items-center custom-text-overlap">
                <div className="col">
                  <p className="uppercase">
                    Freelancer <span className="arrow"> › ›</span> Next.js | React | Bootstrap | Figma
                  </p>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <div className="climate-info">
                    <p className='no-margin-bottom'>Klimafreundlich entwickelt</p>
                    <p className='no-margin-bottom'>0.18g CO₂ / Seitenaufruf</p>
                  </div>
                  <div className="container-tree-icon">
                    <Image
                      src="/icons/undraw_tree.svg"
                      width={36}
                      height={36}
                      alt="sibi"
                      className='climate-icon'
                    />
                  </div>
                </div>
              </div>
            </div>


          </section>
        </div>
      </header>
      {/*/// Main Content */}
      <main>
        {/* Seite 2 Vorteile */}
        <section id='vorteile' className={`container py-5}`} >
          <div className='vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <div /* width={1000} */ className={`heading-vorteile  fade-in ${visibleTexts[0] ? 'loaded' : ''}`} ref={el => textRefs.current[0] = el}>
              <h2 className='fw-bold mb-5'>Heben Sie sich von Ihrer Konkurrenz ab und gewinnen Sie neue Kunden!</h2>
              <strong className='customText'>Ihr digitaler Auftritt – maßgeschneidert, modern und perfekt für Suchmaschinen.</strong>
              <p className='customText '>Ich erstelle Websites, die sowohl optisch überzeugen als auch technisch auf dem neuesten Stand sind. Mit blitzschnellen Ladezeiten und einem responsiven Design. Je nach Projekt arbeite ich mit einem erfahrenen Team zusammen, um Ihre Ziele effektiv umzusetzen.</p>
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
                      Mit maßgeschneidertem Webdesign biete ich Ihnen eine funktionale und ansprechende Website. Durch React sorge ich dafür, dass Ihre Seite blitzschnell lädt und sich einfach pflegen lässt. Egal ob Smartphone oder Desktop – Ihre Website sieht auf jedem Gerät immer top aus. In einem persönlichen Gespräch erarbeiten wir gemeinsam Ihre Ziele und die beste Umsetzung.
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
                      Um das volle Potenzial Ihrer App auszuschöpfen, braucht es ein durchdachtes Design, das einfach funktioniert. Eine benutzerfreundliche App, die auf Ihre Bedürfnisse zugeschnitten ist, sorgt für eine top Nutzererfahrung. Mit modernen Technologien stelle ich sicher, dass die App einfach zu bedienen und unkompliziert zu pflegen ist. Gemeinsam entwickeln wir eine App, die Ihre Ziele erfüllt und auf allen Geräten perfekt läuft.
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
                      Um das volle Potenzial Ihrer Website auszuschöpfen, ist eine smarte API-Integration entscheidend. Ein cooles Design allein reicht nicht aus. Durch die Anbindung von Schnittstellen wie CRM oder Zahlungslösungen verbessern wir die Funktionalität und Nutzererfahrung. Ich helfe Ihnen, Ihre Website technisch und strategisch auf das nächste Level zu bringen.
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
                      Service, Wartung und Updates – ich halte Ihre Website immer up to date. Ich kümmere mich um alle Sicherheitslücken, Schadsoftware und Spam, damit Sie sich keine Sorgen machen müssen. Ihre Inhalte bleiben frisch, und Ihr Online-Shop läuft reibungslos. Regelmäßige Wartung sorgt dafür, dass Ihre Website stabil und performant bleibt. Melden Sie sich einfach, und ich lege sofort direkt los, um alles effizient zu optimieren!
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
                    <p>In der heutigen Zeit ist eine starke digitale Präsenz mehr als nur wichtig, sie ist ein Muss. Gerade jetzt, wo jeder Klick zählt, geht es nicht nur um den ersten Eindruck, sondern um die Wirkung. Mit maßgeschneidertem Webdesign und effizienter Programmierung optimiere ich Ihre Webseite – ich mache sie zu Ihrem digitalen Erfolg. Sie haben eine Vision? Ich helfe Ihnen, sie zu verwirklichen, indem ich die neuesten Technologien nutze, um Ihre Seite heute zukunftssicher zu gestalten. Denn der Erfolg im Web kommt nicht von ungefähr, er entsteht durch die richtigen Schritte zur richtigen Zeit. Und ich bin der Partner, der Ihnen dabei nicht nur zur Seite steht, sondern an Ihrer Seite.</p>
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
        {/* Seite 6 */}
        <section id="regional-services" className="custom-background-lightblue h-25">
          <div className="container custom-height-container d-flex justify-content-center align-items-center">
            <div
              className={`heading-vorteile text-center fade-in ${visibleTexts[2] ? 'loaded' : ''}`}
              ref={(el) => (textRefs.current[2] = el)}
            >
              <h2 className="">
                Webdesigner für Deutschland, Österreich und die Schweiz
              </h2>
              <p className="customText">
                Ich arbeite mit kleinen und mittelständischen Unternehmen sowie Werbe- und Grafikagenturen aus ganz Deutschland, Österreich und der Schweiz. Was ich täglich mache? Beratung, individuelles Webdesign, Webentwicklung und SEO. Wenn Sie ein unverbindliches und kostenloses Angebot wollen, lassen Sie uns sprechen – Ihre erfolgreiche Website ist nur einen Klick entfernt.
              </p>
              <div className="d-flex justify-content-center frame">
                <ButtonLight text="Jetzt Kontakt aufnehmen" />
              </div>
            </div>
          </div>
          <div className="background-overlay">
            <Image
              src="/images/hintergrund.png"
              alt="Hintergrund"
              fill // Ersetzt "layout='fill'"
              style={{
                objectFit: "cover", // Ersetzt "objectFit"
                objectPosition: "center", // Ersetzt "objectPosition"
              }}
            />
          </div>
        </section>
        {/* Seite 7 */}
        <ExpertSteps />
        {/* Seite 8 */}
        <WebsiteAnalysisForm />

        {/* Workflow */}
        {/*         <div className='workflow-container'>
          <Workflow />
        </div> */}
        {/*Random Facts */}
        {/*         <div>
          <SmoothMovingImage />
        </div> */}
        {/* Bar-chart */}
        {/*         <div className=''>
          <VerticalBarChart />
        </div> */}
        {/*         <div className='vh-100'>
        </div>
        <div className='vh-100'>
        </div> */}
        <StepsSection />
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
