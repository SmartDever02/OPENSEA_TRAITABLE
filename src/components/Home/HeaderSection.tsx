import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import LogoIcon from '../Logo/LogoIcon';
import chrome from '../../resources/images/chrome.svg';
import ToggleMenu from './button/ToggleMenu';
import CloseMenu from './button/CloseMenu';
import StyleLink from './button/StyleLink';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    console.log('onScroll');
    event.stopPropagation();
  };

  return (
    <TopHeader onScroll={scrollHandler}>
      <div className='permenent'>
        <LogoIcon className='mr-auto' />
        {toggle ? (
          <CloseMenu onClick={() => setToggle(!toggle)} />
        ) : (
          <ToggleMenu onClick={() => setToggle(!toggle)} />
        )}
      </div>
      <div className={'link-group show-' + toggle}>
        <Link
          to='/chrome-extension'
          className='align-center header-link link-extension'
        >
          <StyleLink className={'align-center'}>
            <img src={chrome} style={{ marginRight: '18px' }}></img>Chrome
            Extension
          </StyleLink>
        </Link>
        <Link to='/faq' className='align-center header-link link-faq'>
          <StyleLink className={'align-center'}>FAQ</StyleLink>
        </Link>
        <Link to='/pricing'>
          <StyleLink className={'align-center btn pricing'}>Pricing</StyleLink>
        </Link>
        <Link to='/dashboard'>
          <StyleLink className={'align-center btn lunching'}>
            Lunch App
          </StyleLink>
        </Link>
      </div>
    </TopHeader>
  );
}

const TopHeader = styled.div`
  padding: 33px;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: -webkit-fill-available;
  backdrop-filter: blur(4px);
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  & .permenent {
    display: flex;
    margin-right: auto;
  }
  & .link-group {
    display: flex;
    gap: 46px;
    & a {
      text-decoration: none;
    }
  }
  & .ToggleMenu {
    display: none;
    margin-left: auto;
    &.show-false {
      display: flex !important;
    }
  }

  & .header-link {
    text-decoration: none;
    cursor: pointer;
  }
  & .mr-auto {
    margin-right: auto;
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    background: transparent;
    & .permenent {
      margin-right: 0px;
    }
    & .ToggleMenu {
      display: block;
      margin-right: 0px;
    }
    & .link-group {
      flex-direction: column;
      align-items: center;
      display: none;
      &.show-true {
        display: flex;
      }
      & *.link-extension {
        margin-top: 60px;
        font-size: 32px;
      }
      & *.link-faq {
        margin-bottom: 200px;
        font-size: 32px;
      }
      & *.btn {
        width: 80vw;
      }
    }
  }
`;

// const StyleLink = styled(Link)`
//   text-decoration: none;
// `;
