import React from 'react';
import {images} from "../../constants";
import{SubHeading} from "../../components";
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="cheff"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__cheff-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <p className='p__opensans'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className='app__chef-sign'>
          <p>Sn_Ghauri</p>
          <p className='p__opensans'>Cheff & Founder</p>
          <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
