import VerticalBarChart from '../components/VerticalBarChart';
import StickyHeader from '../components/StickyHeader';
import SmoothMovingImage from '../components/SmoothMovingImage';
import Footer from '../components/Footer';
import Arbeitsweise from '../components/Arbeitsweise';


export default function about() {
  return (
    <div>
      <StickyHeader />

      <div className='abstand'></div>
      {/*Random Facts */}
      <div >
        <SmoothMovingImage />
      </div>
      <VerticalBarChart />

      <div>
        <Arbeitsweise/>
      </div>
      <Footer />
    </div>
  );
}