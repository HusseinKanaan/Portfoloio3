import VerticalBarChart from '../components/VerticalBarChart';
import StickyHeader from '../components/StickyHeader';
import SmoothMovingImage from '../components/SmoothMovingImage';
import SmoothMovingImageOnLoad from '@/components/SmoothMovingImageOnLoad';
import Footer from '../components/Footer';
import Arbeitsweise from '../components/Arbeitsweise';
import LifeGallery from '../components/LifeGallery';
import PieChart from '@/components/PieChart';
import { useMultipleScrollTextAnimation } from '../hooks/useMultipleScrollTextAnimation'; // Neuer Hook für mehrere Texte
import { motion } from "framer-motion";


export default function About() {

  // Für Text-Animationen
  const { visibleTexts, textRefs } = useMultipleScrollTextAnimation();

  return (
    <div>
      <StickyHeader />
      <SmoothMovingImageOnLoad />
      <LifeGallery />
      {/* Pie-chart */}
      <div id='service' className='bg-color-heading-piechart'>

        {/*           <div id='divAbsolute' className='position-absolute heading-piechart text-white container'>
            <div id='divAbsolute' className='position-absolute custom-heading-piechart'>
              <h1 className={`display-6 text-left fade-in heading ${visibleTexts[30] ? 'loaded' : ''}`} ref={el => textRefs.current[30] = el}>Skills</h1>
            </div>
          </div> */}

        <section className='pie-chart-container-height d-flex align-items-center'>
          {/*         <div className='pie-chart-heading'></div> */}
          <div className=" d-flex vw-100  align-items-center justify-content-center sibi">
            <div className='pie-chart-text position-relative pie-chart-container-partdesigner'>
              {/*             <p className={`display-6 pie-chart-heading-left mb-4 fade-in ${visibleTexts[22] ? 'loaded' : ''}`} ref={el => textRefs.current[22] = el}>Part-Designer</p> */}

              <p className={`fade-in ${visibleTexts[12] ? 'loaded' : ''}`} ref={el => textRefs.current[12] = el}> <span className='pie-chart-span'>✔</span  >BOOTSTRAP</p>

              <p className={` fade-in ${visibleTexts[13] ? 'loaded' : ''}`} ref={el => textRefs.current[13] = el}> <span className='pie-chart-span' >✔</span>SASS</p>

              <p className={` fade-in ${visibleTexts[14] ? 'loaded' : ''}`} ref={el => textRefs.current[14] = el}> <span className='pie-chart-span'>✔</span>ADOBE XD / FIGMA </p>

              <p className={` fade-in ${visibleTexts[15] ? 'loaded' : ''}`} ref={el => textRefs.current[15] = el}> <span className='pie-chart-span'>✔</span>RESPONSIVE WEBDESIGN</p>

              <p className={` fade-in ${visibleTexts[16] ? 'loaded' : ''}`} ref={el => textRefs.current[16] = el}> <span className='pie-chart-span'>✔</span>HTML / CSS</p>
            </div>
            <div>

              <PieChart />
            </div>
            <div className='pie-chart-text pie-chart-container-partcoder'>
              {/*           <p className={`display-6 pie-chart-heading-right mb-4 fade-in ${visibleTexts[23] ? 'loaded' : ''}`} ref={el => textRefs.current[23] = el}>Part-Coder</p> */}

              <p className={`fade-in ${visibleTexts[17] ? 'loaded' : ''}`} ref={el => textRefs.current[17] = el}> <span className='pie-chart-span'>✔</span>FRONTEND ENTWICKLUNG</p>

              <p className={`fade-in ${visibleTexts[18] ? 'loaded' : ''}`} ref={el => textRefs.current[18] = el}> <span className='pie-chart-span'>✔</span>JAVASCRIPT</p>

              <p className={`fade-in ${visibleTexts[19] ? 'loaded' : ''}`} ref={el => textRefs.current[19] = el}> <span className='pie-chart-span'>✔</span>REACT / NEXT</p>

              <p className={`fade-in ${visibleTexts[20] ? 'loaded' : ''}`} ref={el => textRefs.current[20] = el}> <span className='pie-chart-span'>✔</span>COMPUTER ANSCHREIEN</p>

              <p className={`fade-in  ${visibleTexts[21] ? 'loaded' : ''}`} ref={el => textRefs.current[21] = el}> <span className='pie-chart-span'>✔</span>PIZZA ESSEN</p>
            </div>
          </div>
        </section>
      </div>
      {/*      <div className='abstand'></div> */}
      {/*Random Facts */}
      <div >
        <SmoothMovingImage />
      </div>
      <VerticalBarChart />
      <div>
        <Arbeitsweise />
      </div>
      <Footer />
    </div>
  );
}