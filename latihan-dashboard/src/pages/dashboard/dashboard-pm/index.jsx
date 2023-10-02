import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "../../../components/layout/signed/Header";
import { tokens } from "../../../common/hooks/Theme";
import PieChartPM from "../../../components/layout/signed/PieChartPMy";
import Dates from "../../../components/layout/signed/Date";

const DashboardLabanan = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard Preventive Maintenance"/>
        <Box>
        <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <Dates/>
          </Button>
        </Box>

      </Box>
      
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month January
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month February
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

        {/* row 2 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Maret
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month April
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>
        {/* row 3 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Mei
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Juni
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

        {/* row 4 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Juli
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Agustus
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

        {/* row 5 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month September
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Oktober
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

        {/* row 6 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month November
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Month Desember
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartPM isDashboard={true} />
          </Box>
        </Box>

      </Box>
    </Box>
  )
};

export default DashboardLabanan;
