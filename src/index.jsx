import React  from 'react';
import ReactDOM from 'react-dom';
import Voting from './Voting.jsx';

import {createStore, applyMiddleware} from 'redux';
import {createAction, handleAction, handleActions} from 'redux-actions'
import promiseMiddleware from 'redux-promise';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TableContainer from './TableContainer.jsx';
import DarkTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


injectTapEventPlugin();
const pair = ['Trainspotting', 'Terminator'];

const muiTheme = getMuiTheme(DarkTheme);

let reducer = handleActions({
    'INIT': (state, action) => {
        return {status: 'initialized', appState: action.payload}
    }
});

const store = createStore(reducer, {}, applyMiddleware(promiseMiddleware));
store.dispatch(createAction('INIT')(['one1'], ['two']));


const tabConfig = {
    columns: [{
        id: 'price',
        title: 'Price',
        visible: true
    }]
};

class MainView extends React.Component {
    constructor(props, context) {
        super(props, context);

    }


    render() {
        let {pair} = this.props;
        let config = {
            tableName: 'Yield Curve',
            columns: [
                {
                    id: 'col1',
                    visible: true
                },
                {
                    id: 'col2',
                    visible: true
                }

            ]
        };

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div>
                        <Voting pair={pair}/>
                    </div>
                    <div>
                        <TableContainer title="Pricing" config={config}/>
                    </div>
                </div>


            </MuiThemeProvider>);
    }
}

ReactDOM.render(<MainView pair={pair}/>, document.getElementById('app'));


console.log('started');