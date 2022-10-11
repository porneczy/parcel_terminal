import React from 'react'
import { FormLabel, Stack, TextField, Box } from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function DeadlinePicker() {
    const [value, setValue] = React.useState(dayjs());
    /* const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54')); */

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormLabel id="demo-row-radio-buttons-group-label">Határidő kiválaszása</FormLabel>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px' }}>
                <Stack spacing={3} maxWidth={300}>
                    <MobileDatePicker
                        label="Dátum"
                        inputFormat="YYYY/MM/DD"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Idő"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </Box>
        </LocalizationProvider>
    )
}

export default DeadlinePicker