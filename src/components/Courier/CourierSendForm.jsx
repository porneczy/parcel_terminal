import React, { useState, useEffect } from 'react'
import CourierDialog from './CourierDialog'
import { Box, Button } from '@mui/material'

function CourierSendForm({
    userBox,
    dateError,
    emailError,
    dateValue,
    userEmail
}) {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (userBox && dateError === null && emailError === null) {
            setButtonDisabled(false)
        }
    }, [setButtonDisabled, userBox, dateError, emailError]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };

    return (
        <>
            <CourierDialog
                handleClose={handleClose}
                open={open}
                userBox={userBox}
                dateValue={dateValue}
                userEmail={userEmail} />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button onClick={handleClickOpen} disabled={buttonDisabled} variant="contained">Rögzités</Button>
            </Box>
        </>
    )
}

export default CourierSendForm