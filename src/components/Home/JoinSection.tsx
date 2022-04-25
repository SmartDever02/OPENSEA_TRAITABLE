import styled from 'styled-components';
import Content from '../Text/Content';
import Title from '../Text/Title';
import ButtonGroup from './button/ButtonGroup';

import topRight from '../../resources/images/join/topRight.svg';
import bottomLeft from '../../resources/images/join/bottomLeft.svg';

export default function JoinSection() {
  return (
    <SectionJoin>
      <div className='JoinTitle'>
        <Title>Let's join with us!</Title>
      </div>
      <div className='JoinContent'>
        <Content>
          Use traitable to spot undervalued NFTs before official rarity is
          published, like a Sniper lining up his shot.
        </Content>
      </div>
      <ButtonGroup />
      <div className='background'>
        <img src={topRight} alt='topRight' className='topRight' />
        <img src={bottomLeft} alt='bottomLeft' className='bottomLeft' />
      </div>
    </SectionJoin>
  );
}

const SectionJoin = styled.div`
  margin-top: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div.JoinTitle {
    & * {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    width: 300px;
    @media only screen and (max-width: 576px) {
      width: 250px;
    }
  }
  & div.JoinContent {
    & * {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    width: 447px;
    @media only screen and (max-width: 576px) {
      width: 300px;
    }
  }
  & .text-title {
    font-size: 72px !important;
    @media only screen and (max-width: 968px) {
      font-size: 48px !important;
    }
    @media only screen and (max-width: 576px) {
      font-size: 46.4px !important;
    }
  }
  & .text-medium {
    @media only screen and (max-width: 968px) {
      font-size: 16px !important;
    }
    @media only screen and (max-width: 576px) {
      font-size: 15px !important;
    }
  }
  & .background {
    & .topRight {
      position: absolute;
      top: -15vw;
      right: 5vw;
      width: 18.875vw;
      @media only screen and (max-width: 768px) {
        right: 2vw;
      }
    }
    & .bottomLeft {
      position: absolute;
      left: 1vw;
      bottom: -20vw;
      width: 30vw;
      @media only screen and (max-width: 1280px) {
        left: -2vw;
      }
    }
  }
`;
