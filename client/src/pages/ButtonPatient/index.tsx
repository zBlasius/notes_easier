import React from "react";
import { Button } from 'primereact/button';

export default function ButtonPatient({patientName}){

    return(
        <div style={{width:'100%', marginTop:30}}>
            <Button style={{width:'100%', height:40}} label={patientName} icon="pi pi-check" iconPos="left"/>            
        </div>
    )
}