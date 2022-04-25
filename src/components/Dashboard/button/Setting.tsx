import styled from 'styled-components';
import setting from '../../../resources/images/Dashboard/toolbar/setting.svg';

export default function Setting() {
  return (
    <SettingButton>
      <img src={setting} alt='setting' />
    </SettingButton>
  );
}

const SettingButton = styled.div`
  width: 64px;
  height: 48px;
  border: 0.843137px solid rgba(102, 104, 161, 0.6);
  box-sizing: border-box;
  border-radius: 11.8039px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
