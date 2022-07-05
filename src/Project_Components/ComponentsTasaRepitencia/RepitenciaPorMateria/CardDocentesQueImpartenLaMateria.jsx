import React, { useState } from "react"
import {
    Dialog, DialogContent, IconButton, Card,
    CardContent, Box, Button, ListItemButton, Collapse, Typography, Paper, Divider
} from '@mui/material'
import { OpenInFull, Close } from '@mui/icons-material/';
import { useSelector } from "react-redux";

//Dependencias
import { selectArrayDataMateriasPorIdMateria } from "../../../store/HighchartStore/DashboardRepitencia/RepitenciaPorMateria/ListTableStoreRepitenciaPorMateria"
import DialogDocentesContainer from './DashcardDialogDataDocentes'
import './CardDocentesQueImpartenLaMateria.css'

let array_Data_Materias_Por_Id_Materia = [];
const setCssPorfile = (docentes, index) => {
    const style = document.documentElement.style
    {
        (docentes % 2 > 0 && index == docentes - 1)
            ? style.setProperty('--gridColumn', 'span 2')
            : style.setProperty('--gridColumn', 'span 1')
    }
}


const CardDocentes = () => {

    const [open, setOpen] = useState(false);
    array_Data_Materias_Por_Id_Materia = useSelector(selectArrayDataMateriasPorIdMateria)

    const setOpenDialogDocente = (id_Docente) => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    if (array_Data_Materias_Por_Id_Materia.length != 0) {
        return (
            <Box className="BoxDocentesContainer">
                {array_Data_Materias_Por_Id_Materia[0].docentes.map((docente, index) => {
                    setCssPorfile(array_Data_Materias_Por_Id_Materia[0].docentes.length, index);
                    return (
                        <Card key={index} className="CardDocentes" onClick={() => setOpenDialogDocente(docente.id)}>
                                <CardContent>
                                    <div label="Alert">
                                        <div >
                                            <div className="dashCardHeading">
                                                {docente.docente}
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div >
                                            <div>
                                                {docente.tot_reprobados}/{docente.tot_inscritos}
                                            </div>
                                            <label>Reprobados</label>
                                        </div>
                                    </div>
                                </CardContent>
                        </Card>
                    )
                })}
                {(open)
                    ?
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
                            <DialogDocentesContainer/>
                        </DialogContent>
                    </Dialog>
                    :
                    <div></div>}
            </Box>
        )
    }
}

export default CardDocentes
