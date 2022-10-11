import React from 'react'
import { Box, Grid, FormControl } from '@mui/material'
import BoxSizeCheckbox from './BoxSizeCheckbox'
import StorageSelection from './StorageSelection'
import DeadlinePicker from './DeadlinePicker'
import CustomerEmail from './CustomerEmail'
import CourierSendForm from './CourierSendForm'

function Courier() {
    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <Grid container spacing={2} alignItems="center" sx={{ height: '100vh' }}>
                <Grid item xs={12}>
                    <FormControl>
                        <BoxSizeCheckbox />
                        <StorageSelection />
                        <DeadlinePicker />
                        <CustomerEmail />
                        <CourierSendForm />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Courier