import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'

function CourierDialog({ handleClose, open, userBox, dateValue, userEmail, pin }) {


    const copyClipboard = () => {
        navigator.clipboard.writeText("Tároló: " + (userBox ? userBox.toUpperCase() : userBox) + "\nHatáridő: " + dateValue.year() + "." + (dateValue.month() + 1) + "." + dateValue.date() + "\ne-mail: " + userEmail + "\njelszó: " + pin)
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Sikeres rögzités!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tároló: {userBox ? userBox.toUpperCase() : userBox} <br></br>
                        Határidő: {dateValue.year()}.{dateValue.month() + 1}.{dateValue.date()} <br></br>
                        e-mail: {userEmail}<br></br>
                        jelszó:{pin}<br></br>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={copyClipboard}>Vágólapra másol</Button>
                    <Button onClick={handleClose}>Bezárás</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CourierDialog