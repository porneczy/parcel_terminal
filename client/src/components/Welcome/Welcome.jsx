import React from 'react'
import { Box, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <Grid container spacing={2} alignItems="center" sx={{ height: '100vh' }}>

                <Grid item xs={6}>
                    <Button component={Link} to="/courier" variant="contained" size="large">
                        Futár vagyok
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button component={Link} to="/customer" variant="contained" size="large">
                        Ügyfél vagyok
                    </Button>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Welcome