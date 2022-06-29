import React, { useState } from "react";
import {
    Dialog, DialogContentText, DialogContent, DialogActions, IconButton, Card, ListItemText, Button,
    CardContent, List, ListItemIcon, ListItemButton, Collapse, Typography, Paper, Divider
} from '@mui/material'
import { OpenInFull, Close, ExpandLess, ExpandMore } from '@mui/icons-material/';
import { renderHighchartGraphic } from '../../HighchartsComponent/HighchartsRepitencia/TasaDeRepitencia/DashCardListRepitencia'
import {
    selectArrayTotalInscripcionesRepitencia, selectArrayTotalInscripcionesPerdidasRepitencia,
    selectArrayTotalInscripcionesPasadasRepitencia, selectArrayAbreviaturasPeriodoRepitencia
} from "../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral";
import './DashcardRepitenciaDialogMateriasSelected.css'
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/system";

const DialogMaterias = () => {

    let AbreviaturasPeriodoRepitencia = useSelector(selectArrayAbreviaturasPeriodoRepitencia)
    let ArrayTotalInscripcionesRepitencia = useSelector(selectArrayTotalInscripcionesRepitencia)
    let ArrayTotalInscripcionesPerdidasRepitencia = useSelector(selectArrayTotalInscripcionesPerdidasRepitencia)
    let ArrayTotalInscripcionesPasadasRepitencia = useSelector(selectArrayTotalInscripcionesPasadasRepitencia)

    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(true);
    const [scroll, setScroll] = useState('paper');

    const handleClickListInscritos = () => {
        setOpenList(!openList);
    };

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
        renderHighchartGraphic()
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="expanded" onClick={handleClickOpen("body")}>
                <OpenInFull />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                style={{ minWidth: "200px" }}
            >
                <DialogContent className="dialogCloseIcon">
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogContent>
                <DialogContent >
                    <Box style={{ display: "flex" }}>
                        <div id="SpaiderWebPeriodSubjects"></div>
                        <Card className="cardInscriocionesPorPeriodo">
                            <Typography className="TitelCardDialog">INSCRIPCIONES POR PERIODO</Typography>
                            <CardContent>
                                {AbreviaturasPeriodoRepitencia.map((element, index) => {
                                    return (
                                        <List key={index} style={{ padding: "0px", paddingTop: "10px" }}>
                                            <ListItemButton onClick={handleClickListInscritos}>
                                                <ListItemIcon>
                                                    <div className='DivPaperContents'>
                                                        <Paper key={2} elevation={2} className='PaperDesercion'>
                                                            <div className='dialogDivContents' style={{ minHeight: '1.6rem', backgroundColor: 'rgb(0 0 0 / 10%)' }}>
                                                                {ArrayTotalInscripcionesRepitencia[index]}
                                                            </div>
                                                            <Divider />
                                                            <div className='dialogDivContents' style={{ minHeight: '1.8rem', backgroundColor: 'rgb(0 0 0 / 20%)' }}>Inscripciones</div>
                                                        </Paper>
                                                    </div>
                                                </ListItemIcon>
                                                <CardContent style={{ display: "flex", flexGrow: "1" }}>
                                                    <Typography className="dialogTitelListText">{element.abreviatura}</Typography>
                                                    {openList ? <ExpandLess /> : <ExpandMore />}</CardContent>
                                            </ListItemButton>
                                            <Collapse in={openList} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding className="dialogListRepitencia">
                                                    <Typography className="dialogListText">Total Aprobadas: {ArrayTotalInscripcionesPasadasRepitencia[index]}</Typography>
                                                    <Typography className="dialogListText">Total Perdidas: {ArrayTotalInscripcionesPerdidasRepitencia[index]}</Typography>
                                                </List>
                                            </Collapse>
                                        </List>
                                    )
                                })}
                            </CardContent>
                            <Typography className="TitelCardDialog" style={{ paddingTop: '20px' }}>INCIDENCIA POR PERIODO</Typography>
                            <CardContent>
                                <div id="DialogColumnPeriodSubjects"></div>
                                <Divider/>
                            </CardContent>
                        </Card>
                    </Box>
                </DialogContent>
            </Dialog>
        </div >
    );
}

export default DialogMaterias