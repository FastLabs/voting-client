import {React } from 'react';
import {ReactDOM} from 'react-dom';
import {Voting} from './Voting.jsx';

const pair = ['Trainspotting', 'Terminator'];

ReactDOM.render(<Votting pair={pair}/>,
    document.getElementById('app'));


console.log('started');