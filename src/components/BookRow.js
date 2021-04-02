import React from 'react';
import '../SelectionableBookTable.css';
import clock from '../assets/clock.png';
import { Link } from 'react-router-dom';
import ColoredLine from './ColoredLine';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock } from '@fortawesome/free-solid-svg-icons'



class BookRow extends React.Component {

    render() {
        return (

            <ul className="BookRow-list">
                <ColoredLine color='gray'/>
                <li>
                    <img className="ClockIcon" src={clock} alt="clock icon"></img>
                </li>
                <li id="bookrow-description"> Espacio libre de {this.props.time} hora(s)</li>
                <li id="bookrow-time"> {this.props.time} h</li>
                <li id="button-reserve">
                    <Link to={`/reservation/${this.props.time}`} >
                        <button > Reservar
                        </button>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default BookRow;