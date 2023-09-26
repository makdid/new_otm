import { Box } from "@mui/material";

import Header from "../../../components/layout/signed/Header";

const DashboardAll = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="WBMS Dashboard" />
      </Box>
    </Box>
  );
};

export default DashboardAll;
