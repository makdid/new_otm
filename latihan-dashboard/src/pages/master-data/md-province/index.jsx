import { Box, Button, InputBase, IconButton, useTheme, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Header from "../../../components/layout/signed/Header";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { tokens } from "../../../common/hooks/Theme";
import { useGetProvincesQuery } from "../../../slices/master-data";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { green, grey } from "@mui/material/colors";
import Create from "./create";
import Search from "@mui/icons-material/Search";
import Upload from "./upload";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Create />
      <GridToolbarExport />
      <Box variant="countainer" ml="auto" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
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
      <Header title="PROVINCES" subtitle="Master Data Province" />
      <Paper
            sx={{
              p: 3,
              borderRadius: "10px 10px 10px 10px",
            }}
          >
      <TabContext value={value}>
        <Box>
          <TabList
          onChange={handleChange}>
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": {color: "inherit",},
              }}
              label="LIST"
              value=""
            />
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": {color: "inherit",},
              }}
              label="FILES"
              value="0"
            />
          </TabList>
        </Box>

        <TabPanel value="">
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
        </TabPanel>

        <TabPanel value="0">
            <Box>
              <div style={{ marginBottom: "5px" }}>
                <Box
                  sx={{
                    fontSize: "11px",
                    padding: "80px 19px",
                    marginLeft: "2px",
                  }}
                >
                  <Upload />
                </Box>
              </div>
            </Box>
        </TabPanel>
      </TabContext>
      </Paper>
    </Box>
  );
};

export default MDProvince;
