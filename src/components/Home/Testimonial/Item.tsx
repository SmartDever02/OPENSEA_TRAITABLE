import styled from 'styled-components';

export default function Item(prop: any) {
  return <Testimonialitem className='item'>{prop.children}</Testimonialitem>;
}

const Testimonialitem = styled.div`
  @media only screen and (max-width: 968px) {
    width: 301px;
    height: 342.5px;
    border-radius: 20px;
  }
  & .top-image {
    @media only screen and (max-width: 968px) {
      width: 250px !important;
      top: -35px !important;
    }
  }
  & .item-text {
    @media only screen and (max-width: 968px) {
      width: 245px !important;
      padding-top: 140px !important;
      font-size: 14px !important;
      line-height: 18px !important;
    }
  }
  & .member {
    @media only screen and (max-width: 968px) {
      margin-top: 20px !important;
    }
  }

  & .s-avatar {
    @media only screen and (max-width: 600px) {
        margin-left: 40px !important;
      }
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
  width: 476px;
  height: 541px;
  margin-right: 100px !important;
  background: linear-gradient(
    49.37deg,
    rgba(37, 59, 255, 0.1457) 9.73%,
    rgba(37, 59, 255, 0.31) 116.16%
  );
  backdrop-filter: blur(110px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 32px;
  & .item-text {
    padding-top: 239px;
    width: 362px;
  }
  & .top-image {
    position: absolute;
    top: -55px;
  }
  & .member {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    & img.s-avatar {
      margin-left: 74px;
    }
  }
`;
