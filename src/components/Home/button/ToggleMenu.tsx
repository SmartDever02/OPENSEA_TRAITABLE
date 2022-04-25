import styled from 'styled-components';
import ToggleSvg from '../../../resources/images/toggle.svg';
export default function ToggleMenu(prop: any) {
  return (
    <Toggle
      onClick={prop.onClick}
      src={ToggleSvg}
      className='ToggleMenu'
      alt='toggle'
    />
  );
}

const Toggle = styled.img`
  cursor: pointer;
`;
