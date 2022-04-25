import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

import columns from './config/collectionConfig';
import './style.css';
import ToolBar from './toolbar/collectionToolBar';

export default function Collection() {
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

  return (
    <CollectionDetail className='dashboard collectionDetail'>
      <div
        style={{
          width: '98%',
          height: '422px',
          marginRight: 'auto',
          marginLeft: 'auto',
          position: 'relative',
        }}
      >
        <ToolBar />
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          pagination
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </CollectionDetail>
  );
}

const CollectionDetail = styled.div`
  background: rgb(3, 5, 49);
  display: flex;
`;
