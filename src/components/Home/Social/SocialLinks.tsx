import styled from 'styled-components';
import SocialItem from './SocialItem';
// import Social Data and Helper
import { socials } from '../../../helpers/social';

export default function SocialLinks() {
  return (
    <StyleSocial>
      {socials.map((social: any, index: any) => (
        <SocialItem key={index} order={index} className='socialLink' />
      ))}
    </StyleSocial>
  );
}

const StyleSocial = styled.div`
  position: fixed;
  right: 0px;
  top: 470px;
  gap: 10px;
  display: grid;
`;
