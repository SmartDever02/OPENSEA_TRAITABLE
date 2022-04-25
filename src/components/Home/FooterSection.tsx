import styled from 'styled-components';
import LogoIcon from '../Logo/LogoIcon';
import LogoText from '../Logo/LogoText';

import chromeSvg from '../../resources/images/chrome/white.svg';
import discordSvg from '../../resources/images/discord/white.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <div className='round-box'>
        <Traitable>
          <LogoIcon />
          <LogoText />
        </Traitable>
        <div className='button-group'>
          <FooterButton>
            <img
              src={chromeSvg}
              alt='chrome'
              style={{ paddingRight: '1.85vw' }}
            />
            Chrome Extension
          </FooterButton>
          <FooterButton>
            <img
              src={discordSvg}
              alt='discord'
              style={{ paddingRight: '33px' }}
            />
            Join Discord
          </FooterButton>
        </div>
      </div>
      <FinalLinks>
        <div className='copyright'>
          <span>Copyright © 2021 Traitable. All Rights Reserved</span>
        </div>
        <div className='otherlinks'>
          <span>FAQ</span>
          <span>Privacy Policy</span>
          <span>Terms {'&'} Conditions</span>
        </div>
      </FinalLinks>
    </StyledFooter>
  );
}

const FinalLinks = styled.div`
  margin: 59px 102px 100px 102px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: normal;
    margin: 59px 50px 70px 50px;
    gap: 20px;
  }
  & .otherlinks {
    display: flex;
    gap: 50px;
    @media only screen and (max-width: 1280px) {
      order: 1;
      align-items: center;
      justify-content: center;
    }
    @media only screen and (max-width: 968px) {
      font-size: 1.8vw;
    }
    & span {
      @media only screen and (max-width: 1280px) {
        width: 33.33%;
        text-align: center;
      }
    }
  }
  & .copyright {
    @media only screen and (max-width: 1280px) {
      order: 2;
      text-align: center;
    }
    @media only screen and (max-width: 968px) {
      font-size: 1.75vw;
    }
  }
`;

const StyledFooter = styled.div`
  margin-top: 500px;
  @media only screen and (max-width: 1280px) {
    margin-top: 40vw;
  }
  & div.round-box {
    margin: 0 80px 40px 80px;
    height: 237px;
    background: linear-gradient(
      0deg,
      rgba(250, 83, 210, 0.31) 0%,
      rgba(32, 12, 255, 0.31) 100%
    );
    backdrop-filter: blur(185px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      margin: 0 6.25vw;
      justify-content: space-around;
    }

    & .button-group {
      display: flex;
      gap: 49px;
      margin-right: 115px;
      @media only screen and (max-width: 1280px) {
        margin: 0px;
        gap: 3.9vw;
        margin-bottom: 10px;
      }
    }
  }
`;

const Traitable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 113px;
  @media only screen and (max-width: 1280px) {
    margin: 0px;
  }
  & .logoIcon {
    @media only screen and (max-width: 1280px) {
      margin-top: 10px;
      width: 40px;
      height: 40px;
    }
  }
  & .logoTitle {
    @media only screen and (max-width: 1280px) {
      width: 103px;
      height: 20px;
      margin-top: 20px;
    }
  }
`;

const FooterButton = styled.div`
  display: flex;
  align-items: center;
  padding: 19px 40px;
  background: rgba(154, 239, 255, 0.08);
  border: 1px solid rgba(67, 220, 249, 0.2);
  box-sizing: border-box;
  border-radius: 16px;
  cursor: pointer;
  @media only screen and (max-width: 1280px) {
    min-width: 170px !important;
    width: 10vw;
    height: 44.5px;
    padding: 13.5px 16px 13.2px 21.8px;
    font-size: 11.1px;
  }
`;
