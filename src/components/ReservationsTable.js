import React from 'react';
import BookRow from './BookRow';



function ReservationTable () {

    return (
        <div className="ReservationTable">
            <h2> Reserva el tiempo adecuado para ti</h2>
            
            <BookRow time="1"/>
            <BookRow time="2"/>
            <BookRow time="3"/>
        </div>
        

    );
}

export default ReservationTable;