import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'

function CustomerDialogSuccess({
    handleCloseSuccessDialog,
    openSuccessDialog,
    userBoxName }) {

    return (
        <>
            <Dialog
                open={openSuccessDialog}
                onClose={handleCloseSuccessDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Box nyitva!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {userBoxName ? userBoxName.toUpperCase() : userBoxName} box nyitva, a felugró ablakból kilépve törlődik a rekord az adatbázisból.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuccessDialog}>Bezárás</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CustomerDialogSuccess