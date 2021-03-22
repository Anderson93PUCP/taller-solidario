import React from 'react';
import '../SelectionableBookTable.css';
import clock from '../assets/clock.png';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock } from '@fortawesome/free-solid-svg-icons'



class BookRow extends React.Component {

    render() {
        return (

            <ul className="BookRow-list">
                <li> 
                    <img className="ClockIcon" src={clock} alt="clock icon"></img>
                </li>
                <li id="bookrow-description"> Espacio libre de {this.props.time} hora(s)</li>
                <li id="bookrow-time"> {this.props.time} h</li>
                <li id="button-reserve"> <button> Reservar </button></li>
            </ul>
        );
    }
}

export default BookRow;