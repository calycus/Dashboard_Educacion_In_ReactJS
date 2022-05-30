import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '../router/Switch';
import {
    BrowserRouter, Link
} from 'react-router-dom';


export default function mainIndex() {

    return (
        <BrowserRouter>
            <Box>
                <Switch />
            </Box>
        </BrowserRouter>
    );
}

