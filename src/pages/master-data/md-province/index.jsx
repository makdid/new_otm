import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

import Header from "../../../components/layout/signed/Header";

import { tokens } from "../../../common/hooks/Theme";
import { useGetProvincesQuery } from "../../../slices/master-data";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const MDProvince = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data: dataProvinces, error, isLoading, isFetching, isSuccess } = useGetProvincesQuery();

  const columns = [{ field: "name", headerName: "Name" }];

  if (error) console.log("error:", error);
  else if (isLoading) console.log("status: loading");
  else if (isFetching) console.log("status: fetching");
  else if (isSuccess) console.log("Provinces:", dataProvinces);

  return (
    <Box m="20px">
      <Header title="PROVINCES" subtitle="Master Data Province" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {isSuccess && (
          <DataGrid rows={dataProvinces?.data?.province?.records} columns={columns}  slots={{  toolbar: CustomToolbar, }}/>
        )}
      </Box>
    </Box>
  );
};

export default MDProvince;
