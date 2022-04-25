import styled from 'styled-components';

export default function LandingText(props: any) {
  console.log(props);
  return (
    <LandingTextStyle className='landingText'>
      <Title className='flex-column-center text-header'>
        <span className='normal'>Automate your</span>
        <span className='colorful'>NFT Bidding</span>
      </Title>
      <div className='flex-column-center mb-4 text-medium'>
        {props.children}
      </div>
    </LandingTextStyle>
  );
}
const LandingTextStyle = styled.div`
  text-align: center;
  & *.flex-column-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  & span.colorful {
    background: linear-gradient(
      90deg,
      #3d5bfb 0%,
      #635af0 13%,
      #9765ee 25%,
      #b572ed 38%,
      #ea70e2 50%,
      #fd81ae 62%,
      #ffb6aa 75%,
      #ffcba4 87%,
      #ffe5b7 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  margin-bottom: 38px;
`;
