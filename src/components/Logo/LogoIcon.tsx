import styled from 'styled-components';
import logo from '../../resources/images/logo.svg';

export default function LogoIcon(prop: any | undefined) {
  return (
    <LogoImage
      src={logo}
      className={prop.className ? prop.className : 'logoIcon'}
    />
  );
}

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`;
