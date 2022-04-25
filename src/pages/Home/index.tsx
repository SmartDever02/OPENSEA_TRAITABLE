import styled from 'styled-components';
import LandingSection from '../../components/Home/LandingSection';
import Header from '../../components/Home/HeaderSection';
import Footer from '../../components/Home/FooterSection';
import SocialLinks from '../../components/Home/Social/SocialLinks';

import getData from '../../helpers/theme';
import MassiveBidSection from '../../components/Home/MassiveBidSection';
import FastAdSection from '../../components/Home/FastAdSection';
import ExtensionSection from '../../components/Home/ExtensionSection';
import TestimonialSection from '../../components/Home/TestimonialSection';
import TopCollectionSection from '../../components/Home/TopCollectionSection';

import '../../resources/css/fonts.css';
import './style.css';
import { useEffect, useState } from 'react';
import AccordionSection from '../../components/Home/AccordionSection';
import JoinSection from '../../components/Home/JoinSection';

export default function Home(palette: any) {
  const [width, setWidth] = useState(window.innerWidth);
  console.log('WIDTH: ', width);
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWidth(width);
  };
  useEffect(() => {
    window.onresize = resizeHanlder;
    // document.title = `Hello ${width}`;
  });
  return (
    <HomePage className={palette.palette.mode}>
      <Header />
      <LandingSection />
      <MassiveBidSection />
      <FastAdSection dir='ltr' />
      <ExtensionSection />
      <TestimonialSection />
      {width > 1280 ? <TopCollectionSection /> : null}

      <AccordionSection />
      <JoinSection />
      <SocialLinks />
      <Footer />
    </HomePage>
  );
}

const HomePage = styled.div`
  overflow-x: hidden;
  position: absolute;
  width: 100%;
  background: ${getData('dark').background} !important;
  color: ${getData('dark').color} !important;
  a {
    color: ${getData('dark').color} !important;
  }
  &.light {
    background: ${getData('light').background} !important;
    color: ${getData('light').color} !important;
    a {
      color: ${getData('light').color} !important;
    }
  }
  & .btn {
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 18px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 600;
    width: 149px;
    height: 56px;
    cursor: pointer;
    background-color: rgb(83, 244, 255);
    color: rgb(3, 5, 49);
    &.pricing {
      background-color: rgb(37, 59, 255);
      color: white;
    }
  }
  & .align-center {
    display: flex;
    align-items: center;
  }

  .text-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 4vw;
    line-height: 93.52%;
    /* or 60px */

    display: flex;
    align-items: center;
    letter-spacing: -0.05em;
    @media only screen and (max-width: 576px) {
      font-size: 40px !important;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 3.9vw;
    }
  }

  .text-mini {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    /* or 28px */

    letter-spacing: -0.02em;
  }

  .text-medium {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 144.52%;

    display: flex;
    letter-spacing: -0.02em;
    @media only screen and (max-width: 1280px) {
      font-size: 1.8vw;
    }
    @media only screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
`;
