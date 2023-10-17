import React from "react";
import {
  Box,
  Paper,
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
import Create from "./create";
import { styled } from "@mui/material/styles";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Create />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function DailyReport() {
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

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Handle file upload logic here
    }
  };

  const handleChooseFileClick = () => {
    // Membuka dialog pencarian file saat tombol "Choose File" diklik
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleUploadClick = () => {
    // Handle upload logic here
  };

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
          <button onClick={() => handleDeleteClick(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  

  return (
    <Box m="10px">
      <Header title="Daily Report"  />
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

export default DailyReport;
