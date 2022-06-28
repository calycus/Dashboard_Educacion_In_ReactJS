import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, IconButton } from '@mui/material'
import { OpenInFull, Close } from '@mui/icons-material/';
import Highcharts from "highcharts";
import HcMore from "highcharts/highcharts-more";
import { selectOptionsGraphic } from '../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral'
import { useSelector } from "react-redux";

HcMore(Highcharts);

export default function DialogMaterias() {

    const [open, setOpen] = useState(false);
    const opcionGraphic = useSelector(selectOptionsGraphic);

    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            Highcharts.chart('SpaiderWebPeriodSubjects', opcionGraphic)
        }, 500)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="expanded" onClick={handleClickOpen}>
                <OpenInFull />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent className="dialogCloseIcon">
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogContent>
                <DialogContent>
                    <div id="SpaiderWebPeriodSubjects"></div>
                </DialogContent>
            </Dialog>
        </div>
    );
}