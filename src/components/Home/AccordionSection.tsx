import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import '../../resources/css/Accordion.css';
import styled from 'styled-components';
import Title from '../Text/Title';
import { data, getIcon } from '../../helpers/accordionHelper';
import BlurCircle from './Background/CircleBlur';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <SectionAccordion>
      <div className='left-section'>
        <Title>In case you missed anything</Title>
      </div>
      <div className='right-section'>
        {data.map((one, index: any) => {
          return (
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === 'panel' + index}
              onChange={handleChange('panel' + index)}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel' + index ? (
                    <img src={getIcon('minus')} />
                  ) : (
                    <img src={getIcon('plus')} />
                  )
                }
                aria-controls={'panel' + index + 'bh-content'}
                id={'panel' + index + 'bh-header'}
              >
                <Typography className='text-medium'>{one.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='text-mini'>{one.content}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      {/* <div className='blur-back'></div> */}
      <BlurCircle
        height='541px'
        width='541px'
        left='-285px'
        top='-278px'
        background='rgba(67, 220, 249, 0.23)'
      />
    </SectionAccordion>
  );
}

// height: 541px;
// width: 541px;
// left: -285px;
// top: -278px;
// background: rgba(67, 220, 249, 0.23);

const SectionAccordion = styled.div`
  position: relative;
  overflow: visible;
  margin-top: 216px;
  padding: 0% 10%;
  display: flex;
  @media only screen and (max-width: 968px) {
    flex-direction: column;
    gap: 50px;
  }
  & .left-section {
    width: 40%;
    & div {
      width: 75%;
    }
    @media only screen and (max-width: 968px) {
      width: 100%;
    }
  }
  & .right-section {
    flex-direction: column;
    display: flex;
    gap: 15px;
    width: 60%;
    @media only screen and (max-width: 968px) {
      width: 100%;
    }
  }
  & .blur-back {
    position: absolute;
    height: 541px;
    width: 541px;
    left: -285px;
    top: -278px;
    border-radius: 100%;
    filter: blur(300px);
    background: rgba(67, 220, 249, 0.23);
  }
  & .text-title {
    @media only screen and (max-width: 1280px) {
      font-size: 54px;
    }
    @media only screen and (max-width: 968px) {
      font-size: 48px !important;
    }
    @media only screen and (max-width: 576px) {
      font-size: 40px !important;
    }
  }
`;
