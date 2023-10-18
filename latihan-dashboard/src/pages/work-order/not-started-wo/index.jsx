import React, { useEffect, useMemo, useState } from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { mockDataContacts as data } from "../../../common/data/datapalsu";
import Header from "../../../components/layout/signed/Header";
import Footer from "../../../components//layout/signed/Footer";
import { tokens } from "../../../common/hooks/Theme";
import Create from "../create";

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Create />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

const WorkOrderNS = () => {
  const [pageSize, setPageSize] = useState(10)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDetailClick = (row) => {
    console.log("Detail clicked for row:", row);
  };

  const handleDeleteClick = (id) => {
    console.log("Delete clicked for id:", id);
  };

  const columns = useMemo (() =>
  [
    { field: "number", headerName: "NUMBER", flex: 0.5, type:'number' },
    { field: "subject", headerName: "SUBJECT" },
    {
      field: "departement",
      headerName: "DEPARTMENT",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE(DAYS)",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "work-order",
      headerName: "WORK ORDER TYPE",
      flex: 1,
    },
    {
      field: "assigned",
      headerName: "ASSIGNED TO",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },
    {
      field: "status",
      headerName: "STATUS",
      flex: 1,
      // type: 'singleSelect',
      // valueOptions: ['basic','editor','admin'],
      // editable: true,
    },
    {
      field:"created-at",
      headerName:"CREATED AT",
      type: 'text'
      
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      type: 'actions',
      editable:true,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleDetailClick(params.row)}>Detail</button>
          <button onClick={() => handleDeleteClick(params.row.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ], []
  ) 
  
  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Work Orders" subtitle="All Work Orders" />

      </Box>


      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              667
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              All
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              0
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              Not Assign
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              108
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              Not Started
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              10
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              Started
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              335
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              Completed <br /> /Need <br /> Feedback
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          gridRow="span 1"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="10px"
          sx={{
            background: "#7D7C7C",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box mx={3}>
            <Typography variant="h7" color="white">
              224
            </Typography>
            <br />
            <Typography variant="h7" color="white">
              Finished
            </Typography>
          </Box>
        </Box>
      </Box>



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
            columns={columns}
            rows= {data}
            // getRowId={row=>row.id}
            rowsPerPageOptions={[10, 25, 50, 100]}
            pageSize={pageSize}
            onPageSizeChange = {(newPageSize)=> setPageSize(newPageSize)}
            getRowSpacing={params => ({
              top:params.isFirstVisible ? 0:5,
              bottom:params.isFirstVisible ? 0:5,
            })}
            slots={{ toolbar: CustomToolbar }}
          //  pagination
          //  autoPageSize
          //   // rows={dataProvinces?.data?.province?.records}
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

export default WorkOrderNS