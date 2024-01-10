import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <div className='bigDevicesOnly flex__center' style={{ marginBottom: '3rem' }}>
          <div className='rollingText__fromBottom'>
            <h1 className='headtext__cormorant line'>Find</h1>
            <h1 className='headtext__cormorant line'>Find</h1>
          </div>
          <h1 className='headtext__cormorant'>Us</h1>
        </div>
        <h1 className='smallDevicesOnly headtext__cormorant'>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us
        <span class="BorderTop"></span>
        <span class="BorderBottom"></span>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);


export default FindUs;
