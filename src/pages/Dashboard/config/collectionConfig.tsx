import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import styled from 'styled-components';

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: 'NFT TOKEN IMAGE',
    width: 130,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <div className='index' style={{ color: '#5B7FFF' }}>
          {params.value}
        </div>
      );
    },
  },
  {
    field: 'id',
    headerName: 'NFT TOKEN ID',
    width: 200,
    sortable: true,
    renderCell: (params: GridRenderCellParams<any>) => {
      return (
        <CollectionName className='innerContent' style={{ display: 'flex' }}>
          {params.value}
        </CollectionName>
      );
    },
  },
  {
    field: 'volume',
    headerName: 'TRADED VOLUME IN ETH',
    width: 170,
    sortable: true,
  },
  {
    field: 'rarity',
    headerName: 'RARITY RANK',
    width: 170,
    sortable: true,
  },
  {
    field: 'hbid',
    headerName: 'HIGHEST BID',
    width: 160,
    sortable: true,
  },
  {
    field: 'lprice',
    headerName: 'LISTED PRICE',
    width: 180,
    sortable: true,
  },
  {
    field: 'traits',
    headerName: 'Traits',
    width: 190,
  },
];

const CollectionName = styled.div`
  display: flex;
  align-items: center;
`;

export default columns;
