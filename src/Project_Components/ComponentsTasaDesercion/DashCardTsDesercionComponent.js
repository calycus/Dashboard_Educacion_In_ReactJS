import React from "react";
import { CardHeader, CardContent } from '@mui/material';
import { IconButton } from "@mui/material";
import { Announcement, AspectRatio } from '@mui/icons-material';
import { Divider } from '@mui/material';

//componentes


const DashCardLineDesercion = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded" key={2}>
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="FENÓMENOS ACADÉMICOS DE VARIABLE DEPENDIENTE"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardCircularProgressDesercion = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded" key={1}>
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="AspectRatio" key={2}>
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="TASA DE REPITENCIA"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardDesercionPorMaternidad = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded" key={1}>
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="AspectRatio" key={2}>
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="TASA DE DESERCIÓN"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardDesercionPorRangoDeEdad = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded" key={1}>
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="AspectRatio" key={2}>
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="TASA DE RETENCION"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardDesercionPorGenero = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded" key={1}>
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="AspectRatio" key={2}>
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="TASA DE RETENCION"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

export default {
    DashCardLineDesercion,
    DashCardCircularProgressDesercion,
    DashCardDesercionPorMaternidad,
    DashCardDesercionPorRangoDeEdad,
    DashCardDesercionPorGenero
}