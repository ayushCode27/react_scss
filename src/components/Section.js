import React, { useState } from 'react';
import './styles/Section.scss';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Section = ({ slides }) => {
  const [first, setFirst] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setFirst(first === length - 1 ? 0 : first + 1);
  };

  const prevSlide = () => {
    setFirst(first === 0 ? length - 1 : first - 1);
  };

  return (
    <section >
      <div className='slide'>
        <ArrowBack className='back' onClick={prevSlide}/>
        <ArrowForward className='forward' onClick={nextSlide}/>
        {slides.map((item, index) => (
          <div className={item.className} key={index}>
            <div className={index === first ? 'slides active' : 'slides'}>
              {index === first && (
                <div>
                  <img src={item.image} alt={item.text} />
                  <p className='places'>{item.text}</p>
                  <p className='status'>{item.status}</p>

                  <div className='buttons'>
                    <button>Join</button>
                    <button>Discover</button>
                  </div>

                  <div className='bottom'>
                    <p>You will get 50% off on your first purchase !</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
