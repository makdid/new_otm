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
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Create() {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    alert("Text was submitted: " + content);
    event.preventDefault();
  };

  return (
    <Box>
      <Button variant="countainer" onClick={handleClickOpen}>
        <AddIcon />
        NEW
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"} onSubmit={handleSubmit}>
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
                <form onSubmit={handleSubmit}>
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
                        Subject
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
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Requister
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
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Depatermen
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
                        Work Order Type
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
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Priority
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
                        Related To
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
                        Assignt To
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
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Aset
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
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Related Contact
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
                        Eksekutor
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      ></Select>
                      <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                      >
                        <Button
                          variant="contained"
                          startIcon={<AddIcon />}
                          sx={{
                            backgroundColor: green[400],
                            color: "white",
                          }}
                        >
                          ADD
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          sx={{
                            backgroundColor: red[400],
                            color: "white",
                          }}
                        >
                          DELETE
                        </Button>
                      </ButtonGroup>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Target Completion
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Tags
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
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          sx={{
                            backgroundColor: blue[400],
                            color: "white",
                          }}
                        >
                          DELETE
                        </Button>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                <FormLabel
                  sx={{
                    marginBottom: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Form Editor
                </FormLabel>
                {/* Integrasikan komponen Editor TinyMCE */}
                <Editor
                  apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                  value={content}
                  init={{
                    height: 200,
                    menubar: false,
                  }}
                  onEditorChange={(newContent) => setContent(newContent)}
                />
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