import styled from 'styled-components';
import CloseSvg from '../../../resources/images/toggleClose.svg';
export default function CloseMenu(prop: any) {
  return (
    <ToggleClose
      onClick={prop.onClick}
      src={CloseSvg}
      className='ToggleMenu'
      alt='toggle'
    />
  );
}

const ToggleClose = styled.img`
  cursor: pointer;
`;
