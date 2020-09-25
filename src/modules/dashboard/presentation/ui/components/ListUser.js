import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import Button from '@material-ui/core/Button';
const tablaUser = [
    {id : '1', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '2', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '3', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '4', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '5', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '6', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '7', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '8', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '9', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '10', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '11', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '12', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '13', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '14', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '15', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '16', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '17', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'},
    {id : '18', nombres : 'Jordy', apellidos : 'Urrutia',score : 'Medium',tipo_doc : 'DNI',num_doc : '70767761',nom_tar : '5'}
];

const columnas = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Nombres',
        selector: 'nombres',
        sortable: true
    },
    {
        name: 'Apellidos',
        selector: 'apellidos',
        sortable: true
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true
    },
    {
        name: 'Tipo Documento',
        selector: 'tipo_doc',
        sortable: true
    },
    {
        name: 'Numero Documento',
        selector: 'num_doc',
        sortable: true
    },
    {
        name: 'Nombre Tarjeta',
        selector: 'nom_tar',
        sortable: true
    },
    {
        name: 'Opción',
        cell: () => <Button variant="contained" color="primary">Detalle</Button>,
        button: true,
    }
]

const paginacionOpciones={
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos' 
}

function ListUser() {
    return (
        <div>
            <DataTableExtensions
             columns={columnas}
             data={tablaUser}
            >
            <DataTable 
            title="Usuarios Scoring Transferencia"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='350px'
            />
            </DataTableExtensions>
        </div>
    );
}

export default ListUser;