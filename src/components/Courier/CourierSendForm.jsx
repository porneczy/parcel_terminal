import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
function CourierSendForm({
    userBox,
    dateError,
    emailError
}) {
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (userBox && dateError === null && emailError === null) {
            setButtonDisabled(false)
        }
    }, [setButtonDisabled, userBox, dateError, emailError]);


    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Button disabled={buttonDisabled} variant="contained">Rögzités</Button>
        </Box>
    )
}

export default CourierSendForm