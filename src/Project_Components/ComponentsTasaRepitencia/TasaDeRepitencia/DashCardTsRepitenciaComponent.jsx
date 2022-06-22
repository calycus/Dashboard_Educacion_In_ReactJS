import React from "react";
import { CardHeader, CardContent } from '@mui/material';
import { IconButton } from "@mui/material";
import { Announcement, AspectRatio } from '@mui/icons-material';
import { Divider } from '@mui/material';

//componentes
import ListPeriodosRepitencia from '../../HighchartsComponent/HighchartsRepitencia/TasaDeRepitencia/DashcardRadioListRepitencia'
import ListMateriasRepitencia from '../../HighchartsComponent/HighchartsRepitencia/TasaDeRepitencia/DashCardListRepitencia'

const DashCardListRepitencia = (
    <React.Fragment>

        <CardContent>
        </CardContent>
        <ListPeriodosRepitencia />
        <ListMateriasRepitencia />
    </React.Fragment>
);

const DashCardSpaiderWeb = (
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

const DashCardColumnComparativo = (
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

export default {
    DashCardListRepitencia,
    DashCardSpaiderWeb,
    DashCardColumnComparativo,
}