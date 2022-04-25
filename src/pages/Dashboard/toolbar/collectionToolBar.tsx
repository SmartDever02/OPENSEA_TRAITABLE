import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import BasicSelect from './select';
export default function ToolBar() {
  const chartData = [
    {
      value: 100,
      text: 'All',
    },
    {
      value: 1,
      text: 'Transaction Data',
    },
    {
      value: 2,
      text: 'Volume/Price Data',
    },
  ];
  return (
    <Toolbar>
      <div className='left'>
        <BasicSelect label={true} items={chartData} />
        <BidMode>
          <FormControlLabel
            value='start'
            control={<Switch color='primary' />}
            label='Bid Mode'
            labelPlacement='start'
          />
        </BidMode>
      </div>
      <div className='right'>
        <BasicSelect lebel={false} items={chartData} width={105} />
      </div>
    </Toolbar>
  );
}

const BidMode = styled.div`
  height: 48px;
  width: 167.14px;
  background: rgba(16, 18, 63, 0.3);
  border: 0.843137px solid rgba(102, 104, 161, 0.6);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
`;

const Toolbar = styled.div`
  display: flex;
  margin-top: 25px;
  & .left {
    display: flex;
    gap: 9.93px;
  }

  & .right {
    margin-left: auto;
  }

  & .MuiSelect-select {
    padding-top: 12.5px !important;
    padding-bottom: 12.5px !important;
  }
  & .MuiInputLabel-root {
    top: -4px !important;
  }
  & .MuiSwitch-switchBase {
    top: 9px;
    left: 7px;
  }
  & .css-dnkzfa-MuiSwitch-track {
    height: 80%;
    margin-top: 2px;
    background: #2e305d;
    /* Branding/Color/04 */

    border: 1px solid #030531;
    box-sizing: border-box;
    backdrop-filter: blur(18.0698px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 99px;
  }
  & .MuiFormControlLabel-label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #ffffff;
    padding-right: 12.5px;
  }
  & .MuiOutlinedInput-root {
    border-radius: 12px;
  }
  & .css-jsexje-MuiSwitch-thumb {
    background: #5f61a3;
    border: 1.58333px solid rgba(102, 104, 161, 0.3);
    box-sizing: border-box;
    backdrop-filter: blur(22.5349px);
  }
  &
    .css-mghcik-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background: #53e0ff;
    backdrop-filter: blur(18.0698px);
    opacity: 1;
  }
  .Mui-checked .css-jsexje-MuiSwitch-thumb {
    background: #5b7fff;
    border: 1.58333px solid rgba(102, 104, 161, 0.3);
    box-sizing: border-box;
    backdrop-filter: blur(22.5349px);
  }
`;
