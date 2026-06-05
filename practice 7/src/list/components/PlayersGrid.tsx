import players from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function PlayersGrid() {
  const rows: GridRowsProp = players;
  const columns: GridColDef[] = [
    { field: 'Никнейм', headerName: 'Никнейм', flex: 1 },
    { field: 'Команда', flex: 1 },
    { field: 'Роль', flex: 0.6 },
    { field: 'Страна', flex: 0.8 },
    { field: 'Количество MVP', flex: 0.6 },
    { field: 'Rating 3.0', flex: 0.6 },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        showToolbar={true}
      />
    </Container>
  );
}

export default PlayersGrid;
