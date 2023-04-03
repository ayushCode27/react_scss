import React, { useState } from 'react';
import './styles/Section.scss';

const Section = ({ slides }) => {
  const [first, setFirst] = useState(0);
  const length = slides.length;

  return (
    <section>
      <div className='slide'>
        {slides.map((item, index) => (
          <div className={item.className} key={index}>
            <div className={index === first ? 'slides active' : 'slides'}>
              {index === first && (
                <div>
                  <img src={item.image} alt={item.text} />
                  <p className='places'>{item.text}</p>
                  <p className='status'>{item.status}</p>

                  <div>
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
