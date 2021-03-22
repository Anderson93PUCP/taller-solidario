import React from 'react';

import PresentationTitle from './PresentationTitle';
import ReservationTable from './ReservationsTable';


function SelectionableBookTable() {

    return (

        <div id="page-body" >
            <PresentationTitle />
            <ReservationTable />

        </div>
    );

}

export default SelectionableBookTable;