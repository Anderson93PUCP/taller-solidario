import React from 'react';
import SelectionableBookTable from './SelectionableBookTable';
import background from '../assets/architecture-background.jpg';
import '../SelectionableBookTable.css';

function MainPage() {

    return (

        <div id="main-page" style={{background: `url(${background})`, backgroundSize: 'cover', height: '1100px'}}>
            <SelectionableBookTable />
        </div>
    );

}

export default MainPage;