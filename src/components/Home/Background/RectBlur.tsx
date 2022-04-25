import styled from 'styled-components';

export default function BlurRect(prop: any) {
  return (
    <RectBlur
      style={{
        width: prop.width || '',
        height: prop.height || '',
        left: prop.left || '',
        right: prop.right || '',
        bottom: prop.bottom || '',
        top: prop.top || '',
        background: prop.background || '',
        transform: prop.transform || '',
        opacity: prop.opacity || 1,
        filter: prop.filter || 'blur(70px)',
        zIndex: prop.zIndex || 0,
      }}
    >
      {null}
    </RectBlur>
  );
}

const RectBlur = styled.div`
  position: absolute;
`;
