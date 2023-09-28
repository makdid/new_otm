import { Typography, Box, useTheme } from "@mui/material";

import { tokens } from "../../../common/hooks/Theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[400]} fontFamily="bold">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
