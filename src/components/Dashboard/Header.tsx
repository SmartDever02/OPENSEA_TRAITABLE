import styled from 'styled-components';
import LogoIcon from '../Logo/LogoIcon';

import backArrow from '../../resources/images/Dashboard/backArrow.svg';
import SearchBox from './SearchBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import myBid from '../../resources/images/Dashboard/myBid.svg';
import marketFeed from '../../resources/images/Dashboard/marketFeed.svg';

import icon1 from '../../resources/images/Dashboard/explore/icon1.svg';
import icon2 from '../../resources/images/Dashboard/explore/icon2.svg';
import icon3 from '../../resources/images/Dashboard/explore/icon3.svg';
import icon4 from '../../resources/images/Dashboard/explore/icon4.svg';
import Connect from './button/connect';

export default function Header(prop: any) {
  const [result, setResult] = useState(false);
  return (
    <HeadBar>
      <LogoIcon />
      {result ? (
        <>
          <Section>
            <BackButton>
              <img src={backArrow} alt='back' />
            </BackButton>
            <span className='cName'>Bored Ape Yacht</span>
          </Section>
          <Section className='digits'>
            <Detail>
              <span className='value'>293</span>
              <span className='description'>OF TOKENS</span>
            </Detail>
            <Detail>
              <span className='value'>293</span>
              <span className='description'>OF OWNERs</span>
            </Detail>
            <Detail>
              <span className='value'>293</span>
              <span className='description'>ROYALTY</span>
            </Detail>
            <Detail>
              <span className='value'>293</span>
              <span className='description'>FLOOR PRICE</span>
            </Detail>
          </Section>
          <Section>
            <div className='explore'>
              <div>EXPLORE</div>
              <div className='icons'>
                <img src={icon1} alt='icon1' />
                <img src={icon2} alt='icon1' />
                <img src={icon3} alt='icon1' />
                <img src={icon4} alt='icon1' />
              </div>
            </div>
          </Section>
        </>
      ) : (
        <SearchBox />
      )}
      <div className='button-group'>
        <Button to='pricing' className='blue'>
          Pricing
        </Button>
        {prop.parent == 'COLLECTION' ? (
          <Button to='market-feed'>
            <img src={marketFeed} />
            Market Feed
          </Button>
        ) : null}

        <Button to='my-bids'>
          <img src={myBid} />
          My Bids
        </Button>
        <Connect />
      </div>
    </HeadBar>
  );
}

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Section = styled.div`
  display: flex;
  border-right: 1px solid #171943;
  color: white;
  padding-right: 23px;
  padding-left: 23px;
  height: 100%;
  align-items: center;

  & .explore {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 11px;
    /* identical to box height */

    letter-spacing: -0.02em;
    text-transform: uppercase;

    color: rgba(125, 127, 168, 0.53);
    display: flex;
    flex-direction: column;
    gap: 10.74px;
    & .icons {
      display: flex;
      gap: 4.1px;
    }
  }

  &.digits {
    gap: 12px;
    & .value {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 144.52%;
      /* or 23px */

      letter-spacing: -0.02em;
    }
    & .description {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 85.02%;
      /* or 9px */

      letter-spacing: -0.02em;
      text-transform: uppercase;
    }
  }
`;

const HeadBar = styled.div`
  color: white;
  padding-left: 24px;
  height: 78px;
  background: rgb(3, 5, 49);
  display: flex;
  align-items: center;
  & .button-group {
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding-right: 24px;
  }
  & .cName {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 93.52%;
    /* or 22px */

    display: flex;
    align-items: center;
    letter-spacing: -0.05em;
    padding-left: 21px;
  }
`;

const BackButton = styled.div`
  width: 50.15px;
  height: 32px;
  padding: 8px 16px;
  background: rgba(102, 104, 161, 0.3);
  backdrop-filter: blur(8.17204px);
  border-radius: 8.03851px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  width: 167px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(16, 18, 63, 0.3);
  border: 0.843137px solid rgba(102, 104, 161, 0.3);
  /* Branding/Colors/01 */

  box-sizing: border-box;
  border-radius: 12px;
  &.blue {
    border: 0.843137px solid #253bff;
    background: #253bff;
  }
`;
