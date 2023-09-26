import { Box } from "@mui/material";

import Header from "../../../components/layout/signed/Header";

const DashboardPM = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Priventive Maintenaince" />
      </Box>
    </Box>
  );
};

export default DashboardPM;
