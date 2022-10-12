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
    const [pin, setPin] = useState(Math.floor(100000 + Math.random() * 900000))
    const axios = require('axios').default;

    const createParcel = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/parcel/',
            data: {
                box: userBox,
                deadLine: dateValue.year() + "." + (dateValue.month() + 1) + "." + dateValue.date(),
                email: userEmail,
                pw: pin,
            }
        })
    }

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
                userEmail={userEmail}
                pin={pin}
            />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => { handleClickOpen(); createParcel(); }} disabled={buttonDisabled} variant="contained">Rögzités</Button>
            </Box>
        </>
    )
}

export default CourierSendForm