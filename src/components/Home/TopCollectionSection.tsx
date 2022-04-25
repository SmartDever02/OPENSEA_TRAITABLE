import styled from 'styled-components';

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';

import '../../resources/css/TopCollection.css';
import columns from './TopCollectionColumnConfig';
import { Link } from 'react-router-dom';
import Title from '../Text/Title';

const rows = [
  {
    id: 1,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 2,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 3,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 4,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 5,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 6,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
  {
    id: 7,
    name: 'Snow',
    floor: 'Ξ4.4',
    volume1: 'Ξ4,806',
    volume7: 'Ξ4,806',
    volume30: 'Ξ4,806',
    volume: 'Ξ4,806',
  },
];

export default function TopCollectionSection() {
  return (
    <CollectionSection>
      <Title>Top Collections Today</Title>
      <div style={{ width: '1190px', height: '422px', marginTop: '66px' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      <DiscoverButton>
        <Link to='/collections'>Discover all collections</Link>
      </DiscoverButton>
    </CollectionSection>
  );
}

const CollectionSection = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiscoverButton = styled.div`
  margin-top: 64px;
  width: 230px;
  height: 64px;
  display: flex;
  & a {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* Branding/Colors/04 */

    color: #030531;
    /* Branding/Colors/06 */
  }

  background: #53e0ff;
  border-radius: 16px;
`;
