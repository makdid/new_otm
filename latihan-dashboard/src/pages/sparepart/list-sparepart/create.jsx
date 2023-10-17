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
import { blue, grey } from "@mui/material/colors";
import { Formik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
                        Category
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="1">Sparepart</MenuItem>
                        <MenuItem value="2">Consumbale</MenuItem>
                        <MenuItem value="3">Tools</MenuItem>
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
                        Detail Category
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="1">Critical</MenuItem>
                        <MenuItem value="2">Normal</MenuItem>
                        <MenuItem value="3">Tools</MenuItem>
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
                        Item Code
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="1">Electrical</MenuItem>
                        <MenuItem value="2">Instrument</MenuItem>
                        <MenuItem value="3">Mechanical</MenuItem>
                        <MenuItem value="4">Civil</MenuItem>
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
                        ID Number
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
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
                        Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
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
                        Department
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="1">Select Depatermen</MenuItem>
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
                        Brand
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
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
                        Type / Description
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
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
                        Storage Location
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
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
                        Minimum Quantity
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
                        Unit
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Remarks
                      </FormLabel>
                      <textarea></textarea>
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
