import styled from 'styled-components';
import StyleLink from './StyleLink';

export default function ButtonGroup(prop: any) {
  return (
    <Group className={prop.className ? prop.className : ''}>
      <StyleLink className={'align-center btn pricing'}>Pricing</StyleLink>
      <StyleLink className={'align-center btn lunching'}>Lunch App</StyleLink>
    </Group>
  );
}

const Group = styled.div`
  display: flex;
  gap: 24px;
  margin: 42px 0px;
`;
