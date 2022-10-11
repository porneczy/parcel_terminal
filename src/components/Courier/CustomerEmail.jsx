import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box, TextField, FormLabel } from '@mui/material'

function CustomerEmail() {

    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('nem megfelelő email');
        } else {
            setError(null);
        }

    };

    return (
        <>
            <FormLabel id="demo-row-radio-buttons-group-label">Ügyféladatok</FormLabel>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px', marginTop: '20px' }}>
                <TextField
                    id="validation-outlined-input"
                    required
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