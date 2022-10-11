import React from 'react'
import { FormLabel, Stack, TextField, Box, Typography } from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function DeadlinePicker({
    setDateError,
    dateError,
    setDateValue,
    dateValue
}) {


    /* const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54')); */

    const handleChange = (newValue) => {
        setDateValue(newValue);

        if (dateValue.date() !== dayjs().date() && dateValue.month() !== dayjs().month() && dateValue.year() !== dayjs().year()) {
            setDateError('válassz későbbi időpontot');
        } else {
            setDateError(null);
        }

    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormLabel id="demo-row-radio-buttons-group-label">Határidő kiválaszása</FormLabel>
            {dateError && <Typography component={'span'} style={{ color: 'red' }}>{dateError}</Typography>}
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px', marginTop: '20px' }}>
                <Stack spacing={3} maxWidth={300}>
                    <MobileDatePicker
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