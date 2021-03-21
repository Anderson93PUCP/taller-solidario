import React from 'react';

import PresentationTitle from './PresentationTitle';
import ReservationTable from './ReservationsTable';


function SelectionableBookTable () {

    return (

        <div className="SelectionableBookTable"> 
            <PresentationTitle />
            <ReservationTable />
        
        </div>
    );

}

export default SelectionableBookTable;