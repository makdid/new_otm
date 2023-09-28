import { Box, Button, useTheme, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Header from "../../components/layout/signed/Header";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { tokens } from "../../common/hooks/Theme";
import { useGetProvincesQuery } from "../../slices/master-data";
import { green,  } from "@mui/material/colors";
import Create from "./create";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Create />
        <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const MDProvince = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: dataProvinces, error, isLoading, isFetching, isSuccess } = useGetProvincesQuery();

  const columns = [
    { field: "registrarId", headerName: "No" },
    {
      field: "name",
      headerName: "Repeat Every",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Aset",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Internal",
      flex: 1,
    },
    {
      field: "city",
      headerName: "External",
      flex: 1,
    },
  ];

  if (error) console.log("error:", error);
  else if (isLoading) console.log("status: loading");
  else if (isFetching) console.log("status: fetching");
  else if (isSuccess) console.log("Provinces:", dataProvinces);

  const [file, setFile] = useState();
  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }

  return (
    <Box m="20px">
      <Header title="Project" subtitle="Project List" />
        <Paper
          sx={{
            p: 3,
            borderRadius: "10px 10px 10px 10px",
          }}
        >
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
            <Box>
              {isSuccess && (
                <DataGrid
                  rows={dataProvinces?.data?.province?.records}
                  columns={columns}
                  slots={{ toolbar: CustomToolbar }}
                />
              )}
            </Box>
            </Box>
          </Paper>
          </Box>
          
          
  );
};

export default MDProvince;
