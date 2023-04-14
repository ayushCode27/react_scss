import React from 'react';
import small from './assets/small-paris.jpg';
import barca from './assets/barcelona.jpg';
import moscow from './assets/moscow.jpg';
import nyc from './assets/barcelona.jpg';
import '../src/components/styles/Second.scss';

const Second = () => {
  return (
    <section className='second' id='gallery'>
      <h1>Gallery</h1>
      <div className='images'>
        <div>
          <img src={small} alt='paris' />
          <p>Paris, France 2011</p>
        </div>
        <div>
          <img src={barca} alt='barca' />
          <p>Barcelona, Spain 2019</p>
        </div>
        <div>
          <img src={moscow} alt='moscow' />
          <p>Moscow, Russia 2017</p>
        </div>
        <div>
          <img src={nyc} alt='new york' />
          <p>NYC, USA 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Second;
