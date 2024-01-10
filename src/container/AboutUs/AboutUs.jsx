import './AboutUs.css';
import { images } from '../../constants';
import {RollingItem}  from '../../components';

const AboutUs = () => {
  return (
    <section className='app__aboutus app__bg flex__center section__padding relative' id='about'>
      <div className='topLeft'><RollingItem/></div>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="G letter" />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_aboutus'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know More
            <span class="BorderTop"></span>
            <span class="BorderBottom"></span>
          </button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about knife" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know More
            <span class="BorderTop"></span>
            <span class="BorderBottom"></span>
          </button>
        </div>
      </div>

    </section>
  )

};

export default AboutUs;
