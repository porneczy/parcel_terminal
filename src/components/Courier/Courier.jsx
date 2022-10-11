import React, { useState } from 'react'
import { Box, Grid, FormControl } from '@mui/material'
import BoxSizeCheckbox from './BoxSizeCheckbox'
import StorageSelection from './StorageSelection'
import DeadlinePicker from './DeadlinePicker'
import CustomerEmail from './CustomerEmail'
import CourierSendForm from './CourierSendForm'

function Courier() {
    const [boxSize, setBoxSize] = useState();
    const [userBox, setUserBox] = useState(); // ügyfél tárolója
    const [emailError, setEmailError] = useState('nem megfelelő email');
    const [dateError, setDateError] = useState('válassz későbbi időpontot');
    const [box_A_Disabled, setBox_A_Disabled] = useState(false);
    const [box_B_Disabled, setBox_B_Disabled] = useState(false);
    const [box_C_Disabled, setBox_C_Disabled] = useState(false);

    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <Grid container spacing={2} alignItems="center" sx={{ height: '100vh' }}>
                <Grid item xs={12}>
                    <FormControl>
                        <BoxSizeCheckbox
                            setBoxSize={setBoxSize} />
                        <StorageSelection
                            boxSize={boxSize}
                            box_A_Disabled={box_A_Disabled}
                            setBox_A_Disabled={setBox_A_Disabled}
                            box_B_Disabled={box_B_Disabled}
                            setBox_B_Disabled={setBox_B_Disabled}
                            box_C_Disabled={box_C_Disabled}
                            setBox_C_Disabled={setBox_C_Disabled}
                            userBox={userBox}
                            setUserBox={setUserBox} />
                        <DeadlinePicker
                            dateError={dateError}
                            setDateError={setDateError} />
                        <CustomerEmail
                            emailError={emailError}
                            setEmailError={setEmailError} />
                        <CourierSendForm
                            userBox={userBox}
                            dateError={dateError}
                            emailError={emailError} />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Courier