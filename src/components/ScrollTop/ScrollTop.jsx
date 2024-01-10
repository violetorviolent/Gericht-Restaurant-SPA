
import React, {useState} from 'react'; 
import './ScrollTop.css';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    
    window.addEventListener('scroll', toggleVisible);
    return (
        <>
        {visible && <div className='app__scrollTop' style={{display: visible ? 'inline' : 'none'}}>
            <a href="#">
                <div className='app__scrollTop-line'></div>
                <div className='app__scrollTop-h2'><h2>TOP</h2></div>
            </a>
        </div>
    }
    </>
    )
}

export default ScrollTop