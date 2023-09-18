import { Box, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
// import PopUp from "./popup";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const City = () => {
  const theme = useTheme();
  const { citiesData } = useSelector((state) => state.city);
  const citiesData2 = citiesData.map((city) => {
    const city2 = { ...city, provinceName: city.province.name };
    return city2;
  });

  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Kota",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "provinceName",
      headerName: "Provinsi",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Kota" subtitle="Nama Kota di Indonesia" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={citiesData2}
          columns={columns}
          getRowId={(row) => row.id}
          slots={{ toolbar: CustomToolbar }}
        />
        <Box>
      {/* <PopUp /> */}
      </Box>
      </Box>
    </Box>
  );
};

export default City;
