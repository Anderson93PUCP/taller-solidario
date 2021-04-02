import React from 'react';
import {
    ScheduleComponent,
    Inject,
    ViewsDirective,
    ViewDirective,
    Day, Week, WorkWeek
} from '@syncfusion/ej2-react-schedule';

class ReservationView extends React.Component {

    constructor({props, match}){
        super(props);
        this.hour = match.params.hour;
        this.workingDays = [1, 2, 3, 4, 5, 6 ];
    }

    

    render() {
        return (

            <div id="page-body" >
                <h2>Reservación en linea - {this.hour} hora(s)</h2>
                <div id="calendar">
                    <ScheduleComponent hideEmptyAgendaDays={false} showWeekend={false} workDays={this.workingDays} startHour='09:00' endHour='17:00'>
                        <ViewsDirective>
                        <ViewDirective option='Day'/>
        <ViewDirective option='Week'/>
        <ViewDirective option='WorkWeek'/>
                        </ViewsDirective>
                        <Inject services={[Day, Week, WorkWeek]} />
                    </ScheduleComponent>
                </div>
            </div>
        );

    }
};

export default ReservationView;