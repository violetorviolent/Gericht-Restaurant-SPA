
import images from '../../constants/images';
import './RollingItem.css';

const RollingItem = () => {
  return (
    <>
      <div className='app__rollingitem-delight' >
        <img src={images.delight} alt="Delight in every bite" className='rotate'/>
        <div className='app__rollingitem-spoons'>
          <img src={images.spoons} alt="Delight in every bite" />
        </div>
      </div>
    </>
  )
}

export default RollingItem;
