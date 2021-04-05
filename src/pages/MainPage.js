import React from 'react';
import PresentationTitle from '../components/PresentationTitle';
import ReservationTable from '../components/ReservationsTable';

function MainPage() {

    return (

        <div id="page-body">
            <PresentationTitle />
            <ReservationTable />
        </div>
    );

}

export default MainPage;