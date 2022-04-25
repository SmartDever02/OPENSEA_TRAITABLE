import styled from 'styled-components';
import Content from '../Text/Content';
import Title from '../Text/Title';
import ButtonGroup from './button/ButtonGroup';

import ad1 from '../../resources/images/ad/ad1.png';
import BlurRect from './Background/RectBlur';

export default function FastAdSection(prop: any) {
  return (
    <FastSection>
      <BlurRect
        width='350.35px'
        bottom='100px '
        height='440.47px'
        left='650px'
        background='#43DCF9'
        transform='rotate(45.18deg)'
        opacity='0.4'
      />

      <div className='left-panel'>
        <Title mBottom='33px'>
          Fast reveal.
          <br />
          Fast ranking.
          <br />
          Fast profit.
        </Title>
        <Content>
          Enjoy the front seat of every reveal.
          <br />
          Revealings are detected instantly. Bot alerts on every reveal so you
          don't miss anything. Every collection gets full rarity ranking in 30
          seconds.
        </Content>
        <ButtonGroup />
      </div>
      <div className='right-panel'>
        <BlurRect
          width='150.05px'
          height='213.29px'
          background='#FBC836'
          left='1000px'
          bottom='0px'
          transform='matrix(-0.52, -1.5, 0.57, -0.1, 0, 0)'
        />
      </div>
      <img src={ad1} alt='ad1' className='adImage' />
    </FastSection>
  );
}

const FastSection = styled.div`
  display: flex !important;
  position: relative;
  padding-top: 270px;
  align-items: center;
  overflow: hidden;
  & .text-title {
    @media only screen and (min-width: 1024px and max-width: 1280px) {
      font-size: 56px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 48px;
    }
  }
  & .text-medium {
    @media only screen and (max-width: 1280px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 968px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 1280px) {
    & .left-panel {
      width: 30% !important;
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }
  @media only screen and (max-width: 576px) {
    padding-top: 100px
  }
  & .left-panel {
    width: 35%;
    padding-left: 7%;
    break-word: break-all;

    @media only screen and (max-width: 1024px) {
      width: 85% !important;
      padding-left: 0px !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      order: 2;
    }
  }
  & .right-panel {
    margin-left: 23.3%;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
    width: 65%;
    height: 770px;
    background: linear-gradient(180deg, rgba(54, 58, 144, 0.31) 0%, rgba(32, 12, 255, 0.31) 100%);
    backdrop-filter: blur(163px);
    /* Note: backdrop-filter has minimal browser support */

    display: flex
    align-items: center;
    @media only screen and (max-width: 1280px) {
      height: 620px;
    }
    @media only screen and (max-width: 1024px) {
      width: 100% !important;
      height: 560px;
      margin-left: 50% !important;
      order: 1;
    }
    @media only screen and (max-width: 576px) {
      width: 100% !important;
      height: 300px;
      margin-left: 50% !important;
      order: 1;
    }
  }
  & .adImage {
    margin-top: 300px;
    height: 650px;
    min-width: 61.25vw;
    position: absolute;
    right: -2vw;
    top: 30px;
    @media only screen and (max-width: 1280px) {
     height: 500px;
     width: 50vw;
    }
    @media only screen and (max-width: 1024px) {
     width: 95vw;
     height: 450px;
    }
    @media only screen and (max-width: 576px) {
      margin-top: 95px;
      height: 250px;
    }
  }
`;
