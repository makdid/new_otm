import { Box, Paper, TextField, Autocomplete, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../../components/layout/signed/Header";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { useGetProvincesQuery } from "../../../slices/master-data";
import { tokens } from "../../../common/hooks/Theme";


function CustomToolbar () {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const MdProvince = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const years = Array.from(new Array(24 * 2)).map(
    (_, index) => `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${index % 2 === 0 ? "00" : "40"}`,
  );

  const [value, setValue] = useState("");

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
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />

      <Paper
        sx={{
          p: 3,
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <Box
          sx={{
            fontSize: "11px",
            padding: "2px 10px",
            fontWeight: "bold",
            marginLeft: "8px",
          }}
        >
          <Typography> Calender Year : </Typography>
          <Autocomplete
            id="disabled-options-demo"
            options={years}
            getOptionDisabled={(option) => option === years[0] || option === years[2]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Disabled options" />}
          />
        </Box>
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

export default MdProvince;
