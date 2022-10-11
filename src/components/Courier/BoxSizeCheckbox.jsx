import React from 'react'
import { Box, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material'
function BoxSizeCheckbox() {
    return (
        <>
            <FormLabel id="demo-row-radio-buttons-group-label">Csomag mérete</FormLabel>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: '60px' }}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="a" control={<Radio />} label="A (kicsi)" />
                    <FormControlLabel value="b" control={<Radio />} label="B (közepes)" />
                    <FormControlLabel value="c" control={<Radio />} label="C (nagy)" />
                </RadioGroup>
            </Box>
        </>
    )
}

export default BoxSizeCheckbox