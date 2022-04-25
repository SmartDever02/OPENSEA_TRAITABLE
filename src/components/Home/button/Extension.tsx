import styled from 'styled-components';

import chromeSvg from '../../../resources/images/chrome.svg';

export default function Extension() {
  return (
    <ExtensionButton className='extensionButton'>
      <img src={chromeSvg} />
      <span>Install Extension</span>
    </ExtensionButton>
  );
}

const ExtensionButton = styled.div`
  padding: 19px 54px;
  background: rgba(67, 220, 249, 0.1);
  /* Branding/Colors/02 */

  border: 2px solid #5b7fff;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 30px;
  & span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
`;
