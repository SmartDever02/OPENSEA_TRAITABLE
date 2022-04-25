import styled from 'styled-components';
import connect from '../../../resources/images/Dashboard/toolbar/connect.svg';

export default function Connect() {
  return (
    <ConnectButton>
      Connect <img src={connect} alt='c' />
    </ConnectButton>
  );
}

const ConnectButton = styled.div`
  width: 139.72px;
  height: 48px;
  background: #5b7fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  gap: 15px;
`;
