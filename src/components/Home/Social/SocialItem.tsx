import styled from 'styled-components';

// import Social Data and Helper
import getSocial from '../../../helpers/social';

export default function SocialItem(prop: any | undefined) {
  return (
    <Item className='socialLink'>
      <img src={getSocial(prop.order + 1)} alt='social' />
    </Item>
  );
}

const Item = styled.div`
  width: 63px;
  height: 63px;
  background: linear-gradient(
    64.72deg,
    rgba(176, 165, 194, 0.074) 26.48%,
    rgba(176, 165, 194, 0.034) 101.16%
  );
  border: 1.58333px solid rgba(102, 104, 161, 0.3);
  box-sizing: border-box;
  backdrop-filter: blur(22.5349px);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
