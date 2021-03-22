import React from 'react';
import BookRow from './BookRow';
import ColoredLine from './ColoredLine';


function ReservationTable () {

    return (
        <div className="ReservationTable">
            <h2> Reserva el tiempo adecuado para ti</h2>
            <ColoredLine color='gray'/>
            <BookRow time="1"/>
            <ColoredLine color='gray'/>
            <BookRow time="2"/>
            <ColoredLine color='gray'/>
            <BookRow time="3"/>
        </div>
        

    );
}

export default ReservationTable;