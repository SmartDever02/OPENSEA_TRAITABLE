import styled from 'styled-components';

export default function Subscribe() {
  return (
    <Redbar>
      <span>
        You are not subscribed. Take better services and snipe more effectively
        at our
        <span className='dark'>Discord</span>
        or
        <span className='dark'>Buy Subscription</span>
      </span>
    </Redbar>
  );
}

const Redbar = styled.div`
  height: 40px;
  background: #f13c3c;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .dark {
    background: rgba(3, 5, 49, 1);
    padding: 0px 13px 1px;
    margin: 0px 10px;
    border-radius: 8px;
  }
`;
