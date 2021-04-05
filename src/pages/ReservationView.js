import React from 'react';
import {
    ScheduleComponent,
    Inject,
    ViewsDirective,
    ViewDirective,
    Week
} from '@syncfusion/ej2-react-schedule';

class ReservationView extends React.Component {

    constructor({ props, match }) {
        super(props);
        this.hour = match.params.hour;
        this.workingDays = [1, 2, 3, 4, 5, 6];
        this.range = match.params.hour * 60;
    }

    onPopupOpen(args) {
        args.cancel = false;
    }



    render() {
        return (

            <div id="page-body" >
                <h2>Reservación en linea - {this.hour} hora(s)</h2>
                <div id="calendar">
                    <ScheduleComponent
                        hideEmptyAgendaDays={false}
                        showWeekend={false}
                        workDays={this.workingDays}
                        startHour='09:00' endHour='18:00'
                        timeScale={{ enable: true, interval: this.range, slotCount: 1 }}
                        popupOpen={this.onPopupOpen.bind(this)}
                        allowMultiCellSelection={false}

                    >
                        <ViewsDirective>
                            <ViewDirective option='Week' />
                        </ViewsDirective>
                        <Inject services={[Week]} />
                    </ScheduleComponent>
                </div>
            </div>
        );

    }
};

export default ReservationView;