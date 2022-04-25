import Item from './Testimonial/Item';

import { data, getImage, getAvatar } from '../../helpers/testimonial';
import styled from 'styled-components';
import Title from '../Text/Title';

import backline from '../../resources/images/testimonial/backLine.svg';

const MultiCarousel = () => {
  console.log(
    data.map((one) => {
      return (
        <Item>
          <img src={getImage(1)} alt='item' />
          <span className='item-text'>{one.text}</span>
          <div className='memeber'>
            <img src={getAvatar(1)} alt='avatar' />
            {one.name}
          </div>
        </Item>
      );
    })
  );
  const settings = {
    dots: true,
    infinite: false,
    speed: 1200,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: 'relative' }}>
      {window.innerWidth > 968 ? (
        <BackLine src={backline} alt='backline' />
      ) : null}
      <TestimonialTitle>
        <Title>Testimonials</Title>
      </TestimonialTitle>
      <Testimonial>
        <Slider className='slider-card' {...settings}>
          {data.map((one, index) => {
            return (
              <Item key={index}>
                <img src={getImage(1)} alt='item' className='top-image' />
                <div className='item-text text-mini'>{one.text}</div>
                <div className='member'>
                  <img src={getAvatar(1)} alt='avatar' className='s-avatar' />
                  {one.name}
                </div>
              </Item>
            );
          })}
        </Slider>
      </Testimonial>
    </div>
  );
};

const BackLine = styled.img`
  position: absolute;
  top: -100px;
`;

const Testimonial = styled.div`
  padding-left: 200px;
  @media only screen and (max-width: 1280px) {
    padding-left: 150px !important;
  }
  @media only screen and (max-width: 968px) {
    margin-right: calc(100vw - 1025px) !important;
    padding-left: 60px !important;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 40px !important;
    margin-right: calc(100vw - 1025px) !important;
  }
  margin-right: calc(100vw - 1700px);
  & .slick-list {
    overflow: visible;
  }
  & .member {
    margin-top: 80px;
  }
  & .slick-dots {
    z-index: 10;
    text-align: start;
    bottom: -60px;
    margin: 0;
    padding: 1rem 0;

    list-style-type: none;

    li {
      width: 13px;
    }

    button {
      display: block;
      width: 13px;
      height: 13px;
      padding: 0;

      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 100%;
      background-color: transparent;

      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: white;
      border-color: white;
    }
  }
`;

const TestimonialTitle = styled.div`
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 968px) {
    justify-content: flex-start;
    padding-left: 50px;
    margin-bottom: 80px;
  }
  & .text-title {
    font-size: 64px;
    @media only screen and (max-width: 1280px) {
      font-size: 60px;
    }
    @media only screen and (max-width: 10240px) {
      font-size: 57px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 50px;
    }
  }
`;

export default MultiCarousel;
