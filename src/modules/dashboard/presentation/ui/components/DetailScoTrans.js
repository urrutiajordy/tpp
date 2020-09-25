import React from 'react';
import {Grid} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import Button from '@material-ui/core/Button';
const transferencia = [
    {score : 'medium', reason : 'realizo 2 transferencias al mes', fecha : '2020-09-10 22:02:13'},
];
const columnas_transferencia = [
    {
        name: 'Score',
        selector: 'score',
        sortable: true
    },
    {
        name: 'Reason',
        selector: 'reason',
        sortable: true
    },
    {
        name: 'Fecha',
        selector: 'fecha',
        sortable: true
    },
    {
        name: 'Detalle',
        cell: () => <Button variant="contained" color="primary">Json</Button>,
        button: true,
    }
];
const DetalleTarjeta = [
    {num_tar : 'medium', status : 'realizo 2 transferencias al mes'},
];
const columnas_det_tar = [
    {
        name: 'Numero Tarjeta',
        selector: 'num_tar',
        sortable: true
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true
    }
];
const DetalleRecargas = [
    {num_tar_re : 'medium', mount : 'realizo 2 transferencias al mes'}
];
const columnas_det_rec = [
    {
        name: 'Numero Tarjeta',
        selector: 'num_tar_re',
        sortable: true
    },
    {
        name: 'Monto Mes Anterior',
        selector: 'mount',
        sortable: true
    }
];

const paginacionOpciones={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos' 
}
function DetailScoTrans() {
    return (
        <div>
            <div className="app-content--inner">
            <div className="app-page-title--first">
                <div class="app-page-title--iconbox d-70">
                    <div class="d-70 d-flex align-items-center justify-content-center display-1">
                        <svg class="MuiSvgIcon-root text-primary" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-3.26 0l1.26.84V7z"></path><path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z"></path><path d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"></path><path d="M10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4z" opacity=".3"></path></svg>
                    </div>
                </div>
                <div className="app-page-title--heading justify-content-center">
                    <h1>Detalle Usuario</h1>
                <div className="app-page-title--description">Detalle de Usuario por Scoring Transferencia.</div>
                </div>
            </div>
            </div>
            <Grid container>
                <Grid md={6}>
                <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Nombre y Apellidos :</span>
                        <span className="text-black-50">Morris David Cardenas Espiritu</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Tipo de Documento :</span>
                        <span className="text-black-50">DNI</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Numero Documento :</span>
                        <span className="text-black-50">42206530</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">Transferencia Score :</span>
                        <span className="text-black-50">High</span>
                    </div>
                </div>
                </Grid>
            </Grid>
            <DataTableExtensions
             columns={columnas_transferencia}
             data={transferencia}
            >
            <DataTable 
            title="Transferencia"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='350px'
            />
            </DataTableExtensions>

            <DataTableExtensions
             columns={columnas_det_tar}
             data={DetalleTarjeta}
            >
            <DataTable 
            title="Detalle de Tarjetas"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='350px'
            />
            </DataTableExtensions>

            <DataTableExtensions
             columns={columnas_det_rec}
             data={DetalleRecargas}
            >
            <DataTable 
            title="Detalle Recargas"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='350px'
            />
            </DataTableExtensions>

            
            
        </div>
        
    );
}

export default DetailScoTrans;