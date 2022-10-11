import React, { useEffect } from 'react'
import { Box, Grid, FormLabel, FormControlLabel, Radio } from '@mui/material'

function StorageSelection({
    boxSize,
    box_A_Disabled,
    setBox_A_Disabled,
    box_B_Disabled,
    setBox_B_Disabled,
    box_C_Disabled,
    setBox_C_Disabled,
}) {

    useEffect(() => {
        if (boxSize === "b") {
            setBox_A_Disabled(true)
        } else if (boxSize === "c") {
            setBox_A_Disabled(true)
            setBox_B_Disabled(true)
        } else {
            setBox_A_Disabled(false)
            setBox_B_Disabled(false)
            setBox_C_Disabled(false)
        }
    }, [setBox_A_Disabled, setBox_B_Disabled, setBox_C_Disabled, boxSize]);



    const box_A_radioInputs = [
        {
            value: "a1",
            label: "A1"
        },
        {
            value: "a2",
            label: "A2"
        },
        {
            value: "a3",
            label: "A3"
        },
        {
            value: "a4",
            label: "A4"
        },
        {
            value: "a5",
            label: "A5"
        }
    ];
    const box_B_radioInputs = [
        {
            value: "b1",
            label: "B1"
        },
        {
            value: "b2",
            label: "B2"
        },
        {
            value: "b3",
            label: "B3"
        },
        {
            value: "b4",
            label: "B4"
        },
        {
            value: "b5",
            label: "B5"
        }
    ];
    const box_C_radioInputs = [
        {
            value: "c1",
            label: "C1"
        },
        {
            value: "c2",
            label: "C2"
        },
        {
            value: "c3",
            label: "C3"
        },
        {
            value: "c4",
            label: "C4"
        },
        {
            value: "c5",
            label: "C5"
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Szabad tároló kiválasztása</FormLabel>
            <Grid container spacing={1}>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        {box_A_radioInputs.map((radioInput) => {
                            return (
                                <Grid key={radioInput.label} item xs={2}>
                                    <FormControlLabel
                                        disabled={box_A_Disabled}
                                        value={radioInput.value}
                                        control={<Radio />}
                                        label={radioInput.label} />
                                </Grid>
                            );
                        })}
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        {box_B_radioInputs.map((radioInput) => {
                            return (
                                <Grid key={radioInput.label} item xs={2}>
                                    <FormControlLabel
                                        disabled={box_B_Disabled}
                                        value={radioInput.value}
                                        control={<Radio />}
                                        label={radioInput.label} />
                                </Grid>
                            );
                        })}
                    </React.Fragment>
                </Grid>
                <Grid container item spacing={3} justifyContent="center" alignItems="center">
                    <React.Fragment>
                        {box_C_radioInputs.map((radioInput) => {
                            return (
                                <Grid key={radioInput.label} item xs={2}>
                                    <FormControlLabel
                                        disabled={box_C_Disabled}
                                        value={radioInput.value}
                                        control={<Radio />}
                                        label={radioInput.label} />
                                </Grid>
                            );
                        })}
                    </React.Fragment>
                </Grid>
            </Grid>
        </Box>
    )
}

export default StorageSelection