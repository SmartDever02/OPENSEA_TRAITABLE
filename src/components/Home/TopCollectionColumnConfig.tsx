import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import styled from 'styled-components';

import item from '../../resources/images/collection/collection.svg';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '',
    width: 70,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <div className='index' style={{ color: '#5B7FFF' }}>
          {params.value}
        </div>
      );
    },
  },
  {
    field: 'name',
    headerName: 'Collection Name',
    width: 278,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <CollectionName className='innerContent' style={{ display: 'flex' }}>
          <img src={item} />
          {params.value}
        </CollectionName>
      );
    },
  },
  {
    field: 'floor',
    headerName: 'Floor',
    width: 140,
  },
  {
    field: 'volume1',
    headerName: 'One Day Volumn',
    width: 170,
  },
  {
    field: 'volume7',
    headerName: '7d Volumn',
    width: 160,
  },
  {
    field: 'volume30',
    headerName: '30d Volumn',
    width: 180,
  },
  {
    field: 'volume',
    headerName: 'Volumn',
    width: 190,
  },
];

const CollectionName = styled.div`
  display: flex;
  align-items: center;
`;

export default columns;
