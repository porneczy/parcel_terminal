import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'

function CustomerDialogSuccess({ handleCloseSuccessDialog, openSuccessDialog }) {

    return (
        <>
            <Dialog
                open={openSuccessDialog}
                onClose={handleCloseSuccessDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Sikeres rögzités!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        na ez jó lesz
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