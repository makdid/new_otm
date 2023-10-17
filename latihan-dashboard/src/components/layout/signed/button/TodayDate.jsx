import * as React from 'react';

import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      {label ? `Today: ${label}` : 'Pick a date'}
    </Button>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

const date = dayjs()
//yang dibawah untuk vanila js
// const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}/${date.toDateString()}`
// const dt = date.toDateString()
export default function TodayDate() {
  const [value, setValue] = React.useState(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
        label={value === date ? date.format('DD MMMM YYYY') : value.format('DD MMMM YYYY')}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}
