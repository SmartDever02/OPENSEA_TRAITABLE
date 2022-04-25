import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import Setting from '../../../components/Dashboard/button/Setting';
import BasicSelect from './select';
export default function ToolBar() {
  const filterStatusData = [
    {
      value: 'All',
      text: 'All',
    },
    {
      value: 'Revealed',
      text: 'Revealed',
    },
    {
      value: 'Unrevealed',
      text: 'Unrevealed',
    },
    {
      value: 'Revealing',
      text: 'Revealing',
    },
  ];
  const filterTimeData = [
    {
      value: '1m',
      text: '1 min',
    },
    {
      value: '5m',
      text: '5 min',
    },
    {
      value: '15m',
      text: '15 min',
    },
    {
      value: '1H',
      text: '1 hr',
    },
    {
      value: '4h',
      text: '4 hr',
    },
    {
      value: '1d',
      text: '1 day',
    },
    {
      value: '7d',
      text: '7 day',
    },
    {
      value: '1mon',
      text: '1 month',
    },
    {
      value: '1y',
      text: '1 year',
    },
    {
      value: 'all',
      text: 'All time',
    },
  ];
  return (
    <Toolbar className='dashboard-toolbar'>
      <div className='left'>
        <span className='title'>Ongoing Projects</span>
        <BasicSelect
          lebel={false}
          items={filterStatusData}
          width={170}
          value='All'
        />
        <BasicSelect
          lebel={false}
          items={filterTimeData}
          width={164}
          value='5m'
          calender={true}
        />
      </div>
      <div className='right'>
        <Setting />
      </div>
    </Toolbar>
  );
}

const Toolbar = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 16px;
  height: 48px;
  & .left {
    display: flex;
    gap: 17.5px;
    padding-left: 23px;
    & .title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 93.52%;
      /* or 22px */

      display: flex;
      align-items: center;
      letter-spacing: -0.05em;
      color: white;
    }
  }

  & .right {
    margin-left: auto;
  }

  & .MuiSelect-select {
    padding-top: 12.5px !important;
    padding-bottom: 12.5px !important;
    padding-left: 24px;
  }
  & .MuiInputLabel-root {
    top: -4px !important;
  }
  & .MuiOutlinedInput-root {
    border-radius: 12px;
    background: rgba(16, 18, 63, 0.3);
    box-sizing: border-box;
  }
  & .MuiOutlinedInput-root.Mui-focused {
    background: #10123f;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 0.843137px solid rgba(102, 104, 161, 0.6);
  }
  &
    .css-1vrqiqu-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: 2px solid #3750a8 !important;
  }
`;
