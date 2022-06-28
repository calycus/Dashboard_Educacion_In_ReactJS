import React, { useState } from "react";
import {
    Dialog, DialogContent, IconButton, Card, ListItemText,
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

const DialogMaterias = () => {

    let AbreviaturasPeriodoRepitencia = useSelector(selectArrayAbreviaturasPeriodoRepitencia)
    let ArrayTotalInscripcionesRepitencia = useSelector(selectArrayTotalInscripcionesRepitencia)
    let ArrayTotalInscripcionesPerdidasRepitencia = useSelector(selectArrayTotalInscripcionesPerdidasRepitencia)
    let ArrayTotalInscripcionesPasadasRepitencia = useSelector(selectArrayTotalInscripcionesPasadasRepitencia)

    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(true);

    const handleClickListInscritos = () => {
        setOpenList(!openList);
    };

    const handleClickOpen = () => {
        setOpen(true);
        renderHighchartGraphic()
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
                <DialogContent style={{ display: "flex" }}>
                    <div id="SpaiderWebPeriodSubjects"></div>
                    <Card>
                        <Typography>INSCRIPCIONES POR PERIODO</Typography>
                        <CardContent>
                            {AbreviaturasPeriodoRepitencia.map((element, index) => {
                                return (
                                    <List key={index}>
                                        <ListItemButton onClick={handleClickListInscritos}>
                                            <ListItemIcon>
                                                <div className='DivPaperContents'>
                                                    <Paper key={2} elevation={2} className='PaperDesercion'>
                                                        <div className='divContents' style={{ minHeight: '1.6rem', backgroundColor: 'rgb(0 0 0 / 10%)' }}>
                                                            {ArrayTotalInscripcionesRepitencia[index]}
                                                        </div>
                                                        <Divider />
                                                        <div className='divContents' style={{ minHeight: '1.8rem', backgroundColor: 'rgb(0 0 0 / 20%)' }}>Inscripciones</div>
                                                    </Paper>
                                                </div>
                                            </ListItemIcon>
                                            <ListItemText primary={element.abreviatura} />
                                            {openList ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openList} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <Typography>Total Aprobadas: {ArrayTotalInscripcionesPasadasRepitencia[index]}</Typography>
                                                <Typography>Total Perdidas: {ArrayTotalInscripcionesPerdidasRepitencia[index]}</Typography>
                                            </List>
                                        </Collapse>
                                    </List>
                                )
                            })}
                        </CardContent>
                        <CardContent>
                            <div id="DialogColumnPeriodSubjects"></div>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default DialogMaterias