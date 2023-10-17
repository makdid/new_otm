import React from "react";
import {
  Box,
  FormLabel,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  useTheme,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
// import { useGetProvincesQuery } from "../../../slices/master-data";
import { mockDataContacts } from "../../../common/data/datapalsu";
import Header from "../../../components/layout/signed/Header";
import Footer from "../../../components//layout/signed/Footer";
import { tokens } from "../../../common/hooks/Theme";
import { Search } from "@mui/icons-material";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Box>
          <FormLabel
            sx={{
              marginBottom: "2px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            Calender Year :
          </FormLabel>
          <Select
            fullWidth
            variant="outlined"
            name="repeatevery"
            sx={{
              marginBottom: "2px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            <MenuItem value="">Non Select</MenuItem>
            <MenuItem value="1">2020</MenuItem>
            <MenuItem value="2">2021</MenuItem>
            <MenuItem value="3">2022</MenuItem>
            <MenuItem value="4">2023</MenuItem>
            <MenuItem value="4">2024</MenuItem>
          </Select>
      </Box>

      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div style={{ flex: 1 }}></div>
        <Box variant="countainer" ml="auto" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1, }} placeholder="Search" />
        <IconButton type="button">
          <Search />
        </IconButton>
      </Box>
        <GridToolbarExport />
      </div>
    </GridToolbarContainer>
  );
}


function PMSchedule() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const {
  //   data: dataProvinces,
  //   error,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  // } = useGetProvincesQuery;

  // if (error) console.log("error:", error);
  // else if (isLoading) console.log("status: loading");
  // else if (isFetching) console.log("status: fetching");
  // else if (isSuccess) console.log("Provinces:", dataProvinces);

  const handleDetailClick = (row) => {
    console.log("Detail clicked for row:", row);
  };

  const handleDeleteClick = (id) => {
    console.log("Delete clicked for id:", id);
  };

  const columns = [
    { field: "id", headerName: "No", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleDetailClick(params.row)}>Detail</button>
          <button onClick={() => handleDeleteClick(params.row.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Box m="10px">
      <Header title="Priventive Maintenance" subtitle="Schedules (year)" />
      <Box sx={{ width: "100%" }}></Box>
      <Paper sx={{ borderRadius: "10px 10px 10px 10px" }}>
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
              backgroundColor: colors.primary[900],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.grey[900],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          {/* {isSuccess && ( kalo make APi */}
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            slots={{ toolbar: CustomToolbar }}
            // rows={dataProvinces?.data?.province?.records}
            // columns={columns} ini kalo udah make API
            // slots={{ toolbar: CustomToolbar }}
          />
          {/* )}Ini pasangannya  */}
        </Box>
      </Paper>
      <Paper>
        <Footer />
      </Paper>
    </Box>
  );
}

export default PMSchedule;
