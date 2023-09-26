import { Box } from "@mui/material";

import Header from "../../../components/layout/signed/Header";

const DashboardWO = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Work Order" />
      </Box>
    </Box>
  );
};

export default DashboardWO;
