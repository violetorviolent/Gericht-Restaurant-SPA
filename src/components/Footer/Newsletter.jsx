import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <div className='bigDevicesOnly flex__center'>
          <div className='rollingText__fromBottom'>
            <h1 className='headtext__cormorant line'>Subscribe</h1>
            <h1 className='headtext__cormorant line'>Subscribe</h1>
          </div>
          <h1 className='headtext__cormorant'>To Our Newsletter</h1>
        </div>
        <h1 className='smallDevicesOnly headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe
        <span class="BorderTop"></span>
        <span class="BorderBottom"></span>
      </button>
    </div>
  </div>
);

export default Newsletter;