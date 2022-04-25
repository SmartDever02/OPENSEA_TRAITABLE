import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../Logo/LogoIcon';
import LogoText from '../Logo/LogoText';
import LandingText from './LandingText';
import discord from '../../resources/images/discord.svg';
import StyleLink from './button/StyleLink';
import ButtonGroup from './button/ButtonGroup';
import BlurCircle from './Background/CircleBlur';

export default function LandingSection() {
  return (
    <LandBody>
      <Logo>
        <LogoIcon />
        <LogoText />
      </Logo>
      <LandingText>
        Easily automate your NFT bids like a programmer. Don't miss the new
        additions.
      </LandingText>
      <ButtonGroup className={'pricing-lunch'} />
      <div className='join-discord'>
        <img src={discord} />
        <span>Join Discord</span>
      </div>
      <BlurCircle
        height='541px'
        width='541px'
        left='-300px'
        top='17px'
        background='rgba(67, 220, 249, 0.23)'
      />
    </LandBody>
  );
}

const LandBody = styled.div`
  margin-top: 205px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 400px;

  & div.join-discord {
    display: flex;
    align-items: center;
    gap: 20px;
    & img.discord-icon {
      width: 50px;
      height: 50px;
    }
  }
  & .landingText {
    width: 610px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1024px) {
      width: 430px;
    }
    @media only screen and (max-width: 650px) {
      width: 80%;
    }
  }
  & .text-medium {
    @media only screen and (max-width: 1280px) {
      font-size: 20px;
    }
  }
  & .text-header {
    font-size: 82.5px;
    @media only screen and (max-width: 1024px) {
      font-size: 62.2544px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 46px !important;
    }
  }
  & .text-medium {
    font-size: 24px;
    @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
  & .landingContent {
    @media only screen and (max-width: 1024px) {
      font-size: 19px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 240px;
  }

  @media only screen and (max-width: 576px) {
    margin-top: 150px;
    margin-bottom: 200px;
    .text-header {
      font-size: 10.33vw;
    }
    .landingContent {
      font-size: 16px;
    }
    .btn {
      width: 124px;
      height: 53.5px;
      font-size: 16px;
    }
    .join-discord {
      font-size: 15.36px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 50px;
  @media only screen and (max-width: 576px) {
    & * {
      display: none;
    }
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   padding-right: 30px;
// `;

// const StyledButton = styled.button`
//   border: none;
//   border-radius: 22px;
//   font-size: 18px;
//   min-width: 170px;
//   padding: 20px;
//   cursor: pointer;
//   background-color: rgb(83, 244, 255);
//   color: rgb(3, 5, 49);
//   &.pricing {
//     background-color: rgb(37, 59, 255);
//     color: white;
//     margin-right: 30px;
//   }
// `;
