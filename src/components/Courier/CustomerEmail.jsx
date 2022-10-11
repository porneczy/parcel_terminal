import React from 'react'
import { Box, TextField, FormLabel } from '@mui/material'

function CustomerEmail() {
    return (
        <>
            <FormLabel id="demo-row-radio-buttons-group-label">Ügyféladatok</FormLabel>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px' }}>
                <TextField id="outlined-basic" label="Ügyfél e-mail cime" variant="outlined" />
            </Box>
        </>
    )
}

export default CustomerEmail