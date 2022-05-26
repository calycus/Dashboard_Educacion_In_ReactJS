import React from "react";
import { Card, CardHeader, CardActions, CardContent } from '@mui/material';
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Announcement, AspectRatio, BarChart } from '@mui/icons-material';
import { Divider } from '@mui/material';

//dependencias he importacion para el select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const CardSelect = (
    <React.Fragment>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" label="Age">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </React.Fragment>
);

const DashCardVD = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded">
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="expanded">
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="PRUEBA DE TITULO"
            subheader="hola"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardVI = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded">
                        <Announcement />
                    </IconButton>,
                    <IconButton aria-label="expanded">
                        <AspectRatio />
                    </IconButton>
                ]
            }
            title="PRUEBA DE TITULO"
            subheader="hola"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);
const DashCardTRE = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded">
                        <BarChart />
                    </IconButton>,
                ]
            }
            title="PRUEBA DE TITULO"
            subheader="hola"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);
const DashCardTDE = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded">
                        <BarChart />
                    </IconButton>,
                ]
            }
            title="PRUEBA DE TITULO"
            subheader="hola"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

const DashCardTRT = (
    <React.Fragment>
        <CardHeader
            action={
                [
                    <IconButton aria-label="expanded">
                        <BarChart />
                    </IconButton>,
                ]
            }
            title="PRUEBA DE TITULO"
            subheader="hola"
        />
        <Divider />
        <CardContent>
        </CardContent>
    </React.Fragment>
);

export default{
    CardSelect,
    DashCardVD,
    DashCardVI,
    DashCardTRE,
    DashCardTDE,
    DashCardTRT
}