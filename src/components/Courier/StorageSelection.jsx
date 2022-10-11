import React from 'react'
import { Box, Grid, FormLabel, FormControlLabel, Radio } from '@mui/material'

function StorageSelection() {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Szabad tároló kiválasztása</FormLabel>
            <Grid container spacing={1}>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        <Grid item xs={2}>
                            <FormControlLabel value="a1" control={<Radio />} label="A1" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="a2" control={<Radio />} label="A2" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="a3" control={<Radio />} label="A3" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="a4" control={<Radio />} label="A4" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="a5" control={<Radio />} label="A5" />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        <Grid item xs={2}>
                            <FormControlLabel value="b1" control={<Radio />} label="B1" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="b2" control={<Radio />} label="B2" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="b3" control={<Radio />} label="B3" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="b4" control={<Radio />} label="B4" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="b5" control={<Radio />} label="B5" />
                        </Grid>
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        <Grid item xs={2}>
                            <FormControlLabel value="c1" control={<Radio />} label="C1" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="c2" control={<Radio />} label="C2" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="c3" control={<Radio />} label="C3" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="c4" control={<Radio />} label="C4" />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControlLabel value="c5" control={<Radio />} label="C5" />
                        </Grid>
                    </React.Fragment>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StorageSelection