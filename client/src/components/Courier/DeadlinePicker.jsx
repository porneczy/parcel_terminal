import React from 'react'
import { FormLabel, Stack, TextField, Box, Typography } from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function DeadlinePicker({
    setDateError,
    dateError,
    setDateValue,
    dateValue
}) {


    /* const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54')); */

    const handleChange = (newValue) => {
        if (newValue) {
            if (newValue.$d.toString() === "Invalid Date") {
                setDateError('válassz valós dátumot');
                return
            }
            const today = new Date().toISOString().slice(0, 10);
            const newDate = newValue.toISOString().slice(0, 10);
            if (newDate <= today) {
                setDateError('válassz későbbi időpontot');
            } else {
                setDateError(null);
                setDateValue(newValue);
            }
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormLabel id="demo-row-radio-buttons-group-label">Határidő kiválaszása</FormLabel>
            {dateError && <Typography component={'span'} style={{ color: 'red' }}>{dateError}</Typography>}
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px', marginTop: '20px' }}>
                <Stack spacing={3} maxWidth={300}>
                    <DesktopDatePicker
                        disablePast={true}
                        label="Dátum"
                        inputFormat="YYYY/MM/DD"
                        value={dateValue}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>

            </Box>
        </LocalizationProvider>
    )
}

export default DeadlinePicker