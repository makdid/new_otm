import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  TextField,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="countainer" onClick={handleClickOpen}>
        <AddIcon />
        NEW
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
        <DialogTitle
          sx={{ color: "white", backgroundColor: "black", fontSize: "27px" }}
        >
          Insert
        </DialogTitle>
        <DialogContent>
          <DialogContentText dividers>
            <Formik onSubmit={handleClose}>
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleClose}>
                  <Box
                    display="grid"
                    padding={2}
                    paddingBottom={2}
                    paddingLeft={3}
                    paddingRight={3}
                    gap="20px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  >
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Nama
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Masukkan Name...."
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Vendor
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="">Non Select</MenuItem>
                        <MenuItem value="1">Week</MenuItem>
                        <MenuItem value="2">2 Month</MenuItem>
                        <MenuItem value="3">3 Month</MenuItem>
                        <MenuItem value="4">Custom</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Purchase Order
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Masukkan Order...."
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Value
                      </FormLabel>
                      <TextField required type="number" />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Date
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </FormControl>
                    
                    
                  </Box>
                  <DialogActions>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: grey[700],
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: blue[700],
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Simpan
                      </Button>
                    </Box>
                  </DialogActions>
                </form>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
