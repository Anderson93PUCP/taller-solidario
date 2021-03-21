import React from 'react';
import '../BookRow.css';

function BookRow() {
    return (

        <ul className="BookRow-list">
            <li> Icon</li>
            <li> Free space to 1 hour</li>
            <li> 1 h</li>
            <li> <button> Reserve </button></li>
        </ul>
    );
}

export default BookRow;