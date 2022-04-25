import styled from 'styled-components';
import BidSvg from '../../resources/images/landing/massbid.png';
import BlurCircle from './Background/CircleBlur';
import { BlurLogo } from './Background/LogoBlur';
export default function MassiveBidSection() {
  return (
    <MassiveSection>
      <div className='bid-image'>
        <img src={BidSvg} />
      </div>

      <div className='blur-black'>
        <div className='bid-content'>
          <div className='left-panel text-title'>Bid and mass bid</div>
          <div className='right-panel text-medium'>
            <div>Massive bid.</div>
            <div>Allows making multiple bids by turning bid mode on</div>
          </div>
        </div>
      </div>
      {window.innerWidth > 1024 ? (
        <>
          <BlurCircle
            height='541px'
            width='541px'
            right='-200px'
            top='-278px'
            background='rgba(67, 220, 249, 0.13)'
          />
          <BlurCircle
            bottom='-100px'
            left='-80px'
            height='575px'
            width='575px'
            background='rgba(250, 83, 210, 0.15)'
          />
          <BlurLogo bottom='100px' right='100px' />
        </>
      ) : null}
    </MassiveSection>
  );
}

const MassiveSection = styled.div`
  position: relative;
  & .text-title {
    font-size: 64px;
  }
  & .text-title {
    font-size: 64px;
    @media only screen and (max-width: 1280px) {
      font-size: 50px !important;
    }
    @media only screen and (max-width: 968px) {
      font-size: 56px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 40px !important;
    }
  }
  & .text-medium {
    @media only screen and (max-width: 1280px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 968px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
  & .bid-image {
    z-index: 1;
    position: absolute;
    width: 100%;
    & img {
      margin: 0px auto;
      display: block;
      width: 90vw;
      @media only screen and (max-width: 1024px) {
        width: 95vw;
      }
    }
    top: -134px;

    @media only screen and (max-width: 1024px) {
      top: -96px;
    }
    @media only screen and (max-width: 576px) {
      top: -80px;
    }
  }
  & .blur-black {
    display: flex;
    justify-content: center;
    & .bid-content {
      display: flex;
      justify-content: center;
      border-radius: 50px;
      width: 1440px;
      padding-top: 43vw;
      padding-bottom: 100px;
      background: linear-gradient(
        0deg,
        rgba(54, 58, 144, 0.31) 0%,
        rgba(32, 12, 255, 0.31) 100%
      );
      backdrop-filter: blur(163px);

      gap: 11vw;
      & .left-panel {
        width: 250px;
        display: flex;
        justify-content: center;
        @media only screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      & .right-panel {
        width: 450px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media only screen and (max-width: 1024px) {
          width: 100%;
          text-align: center;
          gap: 0px;
        }
        @media only screen and (max-width: 576px) {
          width: 75%;
        }
      }
      @media only screen and (max-width: 1440px) {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        border-radius: 0px;
      }
      @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
        background: linear-gradient(
          0deg,
          rgba(250, 83, 210, 0.31) 0%,
          rgba(32, 12, 255, 0.31) 100%
        );
        backdrop-filter: blur(36.8253px);
        padding-top: 44vw;
        padding-bottom: 60px;
      }
      @media only screen and (max-width: 576px) {
        padding-top: 39vw;
        padding-bottom: 40px;
        align-items: center;
        gap: 15px;
      }
    }
  }
`;
