import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <div className='app__subHeading'>
        <SubHeading title='Chase the new flavour' />
        </div>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button type='button' className='custom__button '>Explore Menu
          <span class="BorderTop"></span>
          <span class="BorderBottom"></span>
        </button>
      </div>
      <div className='app__wrapper_img relative'>
        <img src={images.welcome} alt='header img' />
        <div className='app__header-figure-1 '></div>
        <div className='app__header-figure-2'></div>
      </div>
    </header>
  )
};

export default Header;
