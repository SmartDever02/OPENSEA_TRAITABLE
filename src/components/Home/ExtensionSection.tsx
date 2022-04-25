import styled from 'styled-components';
import Content from '../Text/Content';
import Title from '../Text/Title';

import openSeaSvg from '../../resources/images/ad/opensea.svg';
import Extension from './button/Extension';
import BlurRect from './Background/RectBlur';

export default function ExtensionSection() {
  return (
    <SnipeSection>
      <div className='container'>
        <div className='Extension'>
          <div className='left'>
            <Title>Snipe with our extension</Title>
          </div>
          <div className='right'>
            <Content>
              Improve your Opensea experience. Rankings and floor prices can now
              be accessed for free on Opensea by installing the extension.
            </Content>
          </div>
        </div>
        <div className='opensea-img'>
          <img src={openSeaSvg} alt='opensea' />
        </div>
        <div className='Extension-button'>
          <Extension />
        </div>
        {window.innerWidth < 576 ? (
          <BlurRect
            width='91.72px'
            height='102.57px'
            background='#FA53D2'
            transform='matrix(-0.61, -1.82, -0.44, 0.05, 0, 0);'
            opacity='10'
            top='200px'
            left='40px'
            filter='blur(40px)'
            zIndex='-1'
          />
        ) : null}
      </div>
    </SnipeSection>
  );
}

// background: #FA53D2;
// transform: matrix(-0.61, -1.82, -0.44, 0.05, 0, 0);

const SnipeSection = styled.div`
  @media only screen and (max-width: 1280px) {
    margin-bottom: 750px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 650px;
  }
  @media only screen and (max-width: 968px) {
    margin-top: 200px;
    margin-bottom: 500px;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 100px;
    margin-bottom: 350px;
  }
  & .extensionButton {
    @media only screen and (max-width: 576px) {
      padding: 20px 47px 20px 35px;
      & span {
        font-size: 14px !important;
      }
      & img {
        width: 23.5px;
        height: 23.5px;
      }
    }
  }
  & .text-title {
    @media only screen and (max-width: 1280px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 968px) {
      font-size: 48px;
    }
  }
  & .text-medium {
    @media only screen and (max-width: 1280px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 17px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
  display: flex;
  margin-top: 300px;
  justify-content: center;
  margin-bottom: 700px;
  & .opensea-img img {
    width: 100%;
  }
  & .Extension {
    display: flex;
    position: static;
    padding: 87px 0px 57px 0px;
    gap: 4%;
    @media only screen and (max-width: 968px) {
      flex-direction: column;
      gap: 20px;
      align-items: center;
      padding-top: 30px;
      padding-bottom: 0px;
      text-align: center;
    }
    @media only screen and (max-width: 1024px) {
      padding-top: 45px;
      padding-bottom: 10px;
    }
  }
  & .Extension-button {
    display: flex;
    justify-content: center;
  }
  & .container {
    position: relative;
    background: linear-gradient(
      0deg,
      rgba(54, 58, 144, 0.31) 0%,
      rgba(32, 12, 255, 0.31) 100%
    );
    backdrop-filter: blur(163px);

    border-radius: 38px;
    height: 45vw;
    width: 1312px;

    @media only screen and (max-width: 1312px) {
      background: linear-gradient(
        0deg,
        rgba(250, 83, 210, 0.31) 0%,
        rgba(32, 12, 255, 0.31) 100%
      );
      border-radius: 0px;
      backdrop-filter: blur(36.9583px);
      height: 50vw;
    }

    @media only screen and (max-width: 1024px) {
      height: 55vw;
    }
    @media only screen and (max-width: 576px) {
      height: 350px;
    }
  }
  & .left {
    display: flex;
    width: 30%;
    padding-left: 20%;
    @media only screen and (max-width: 968px) {
      width: 50%;
      padding: 0%;
      justify-content: center;
      text-align: center;
    }
    @media only screen and (max-width: 576px) {
      width: 70%;
      padding: 0%;
      justify-content: center;
      text-align: center;
    }
  }
  & .right {
    width: 30%;
    @media only screen and (max-width: 968px) {
      width: 80%;
    }
  }
`;
