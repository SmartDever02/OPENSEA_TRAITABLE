import styled from 'styled-components';

export default function BlurCircle(prop: any) {
  return (
    <CircleBlur
      style={{
        width: prop.width || '',
        height: prop.height || '',
        left: prop.left || '',
        right: prop.right || '',
        bottom: prop.bottom || '',
        top: prop.top || '',
        background: prop.background || '',
      }}
    >
      {null}
    </CircleBlur>
  );
}

const CircleBlur = styled.div`
  position: absolute;
  border-radius: 100%;
  filter: blur(70px);
`;
