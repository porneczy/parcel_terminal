import React, { useState, useEffect } from 'react'
import { Box, Avatar, Typography, TextField, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CustomerDialogSuccess from './CustomerDialogSuccess';
import CustomerDialogError from './CustomerDialogError';

function Customer() {

    const [data, setData] = useState([]); // összes adatbázis adat
    const [userEmail, setUserEmail] = useState(); // ügyfél mail cime
    const [userPin, setUserPin] = useState(); // ügyfél kódja //string
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const axios = require('axios').default;

    const getData = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/parcels/',
        })
            .then(function (response) {
                setData(response.data.data)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const handleClickOpenSuccessDialog = () => {
        setOpenSuccessDialog(true);
    };
    const handleClickOpenErrorDialog = () => {
        setOpenErrorDialog(true);
    };
    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false);
        window.location.reload(false);
    };
    const handleCloseErrorDialog = () => {
        setOpenErrorDialog(false);
        window.location.reload(false);
    };

    const handleChange = event => {
        if (event.target.id === "email") {
            setUserEmail(event.target.value)
        }
        if (event.target.id === "password") {
            setUserPin(event.target.value)
        }
    }

    const checkEmailAndPin = () => {
        let validation = false
        data.map((parcel) => {
            if (parcel.email === userEmail && parcel.pw === Number(userPin)) {
                handleClickOpenSuccessDialog()
                validation = true
            }
        })
        if (!validation) {
            handleClickOpenErrorDialog()
        }

    }

    return (
        <>
            <CustomerDialogSuccess
                openSuccessDialog={openSuccessDialog}
                handleCloseSuccessDialog={handleCloseSuccessDialog} />
            <CustomerDialogError
                openErrorDialog={openErrorDialog}
                handleCloseErrorDialog={handleCloseErrorDialog} />

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Csomag átvétele
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email cim"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Kapott kód"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Button
                        type="button"
                        onClick={checkEmailAndPin}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Küldés
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Customer