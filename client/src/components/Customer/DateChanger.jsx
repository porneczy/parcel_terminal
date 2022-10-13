import React from 'react'
import { FormLabel, Stack, TextField, Box, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function DateChanger({ testDateValue, setTestDateValue, setTestDateError, testDateError }) {

    const handleChange = (newValue) => {
        if (newValue) {
            if (newValue.$d.toString() === "Invalid Date") {
                setTestDateError('válassz valós dátumot');
                return
            } else {
                setTestDateError();
                setTestDateValue(newValue)
            }
        }
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormLabel id="demo-row-radio-buttons-group-label">Teszt Dátum</FormLabel><br></br>
                {testDateError && <Typography component={'span'} style={{ color: 'red' }}>{testDateError}</Typography>}
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px', marginTop: '20px' }}>
                    <Stack spacing={3} maxWidth={300}>
                        <DesktopDatePicker
                            disablePast={false}
                            label="Dátum"
                            inputFormat="YYYY/MM/DD"
                            value={testDateValue}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>

                </Box>
            </LocalizationProvider>
        </div>
    )
}

export default DateChanger