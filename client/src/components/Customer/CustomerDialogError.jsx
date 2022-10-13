import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material'

function CustomerDialogError({ handleCloseErrorDialog, openErrorDialog }) {

    return (
        <>
            <Dialog
                open={openErrorDialog}
                onClose={handleCloseErrorDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Valami nem stimmel!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Kérlek Próbáld újra
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseErrorDialog}>Bezárás</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CustomerDialogError