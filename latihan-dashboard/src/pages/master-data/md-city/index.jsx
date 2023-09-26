import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../../../components/layout/signed/Header";
import { GridToolbarExport, GridToolbarContainer } from "@mui/x-data-grid";
import { tokens } from "../../../common/hooks/Theme";
import { useGetCitiesQuery } from "../../../slices/master-data";

const MDProvince = () => {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data: dataCities, error, isLoading, isFetching, isSuccess } = useGetCitiesQuery();

  const columns = [{ field: "name", headerName: "Name" }];

  if (error) console.log("error:", error);
  else if (isLoading) console.log("status: loading");
  else if (isFetching) console.log("status: fetching");
  else if (isSuccess) console.log("Provinces:", dataCities);

  return (
    <Box m="20px">
      <Header title="CITIES" subtitle="Master Data City" />

      <Box m="40px 0 0 0" height="75vh">
        {isSuccess && <DataGrid rows={dataCities?.data?.city?.records} columns={columns} slots={{  toolbar: CustomToolbar, }}/>}
      </Box>
    </Box>
  );
};

export default MDProvince;
