import styled from 'styled-components';
import logoBlur from '../../../resources/images/background/blurLogo.svg';

export function BlurLogo(prop: any) {
  return (
    <LogoBlur
      src={logoBlur}
      style={{
        top: prop.top || '',
        left: prop.left || '',
        right: prop.right || '',
        bottom: prop.bottom || '',
      }}
    />
  );
}

const LogoBlur = styled.img`
  position: absolute;
  filter: blur(70px);
`;
