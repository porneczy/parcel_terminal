import React from 'react'
import { Box, TextField, FormLabel, Typography } from '@mui/material'

function CustomerEmail({
    setEmailError,
    emailError,
    setUserEmail
}) {

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('nem megfelelő email');
        } else {
            setEmailError(null);
            setUserEmail(event.target.value)
        }
    };

    return (
        <>
            <FormLabel id="demo-row-radio-buttons-group-label">Ügyféladatok</FormLabel>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px', marginTop: '20px' }}>
                <TextField
                    id="validation-outlined-input"
                    required
                    helperText={emailError && <Typography component={'span'} style={{ color: 'red' }}>{emailError}</Typography>}
                    type='email'
                    label="Ügyfél e-mail cime"
                    variant="outlined"
                    onChange={handleChange}
                />
            </Box>
        </>
    )
}

export default CustomerEmail