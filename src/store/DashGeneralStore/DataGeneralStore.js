import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../ApiUrl';


//Componentes
import HighchartsGeneral from '../../Project_Components/HighchartsComponent/HighchartsGeneral/HighchartsLineDependiente'

function DasGeneralIndices(idMalla){
    axios.get(ApiUrl.Api + '/api/educacion/dash_general/indices/' + idMalla, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
            //Authorization: "Bearer " + "6fa09fb132a94120f385423a72b5a9d84930ed2d887b0beaf67d52f9f7cff603"
        },
    })
        .then(res => {
            console.log(res.data.data);
            /* HighchartsGeneral.LineVariableDependiente(res.data.data) */
        })
}
export default {
    DasGeneralIndices,
}
