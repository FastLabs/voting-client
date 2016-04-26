import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import transitions from 'material-ui/styles/transitions';
import ThemeManager from 'material-ui/styles/themeManager';
import TableConfigurator from './TableConfigurator.jsx'
import TableContent from './TableContent.jsx';

const styles = {
    root: {
       // background: '#f8f8f8',
        borderTop: 'solid 1px #e0e0e0',
    },
    title: {
        cursor: 'pointer'
    },
    table: {
        overflow: 'auto',
        maxHeight: 1400,
        transition: transitions.create('max-height', '800ms', '0ms', 'ease-in-out'),
        marginTop: 0,
        marginBottom: 0

    },
    tableRetracted: {
        maxHeight: 0
    },


};

class ContainerTitle extends React.Component {
    render() {
        const {title} = this.props;

        return (
            <Toolbar>
                <ToolbarGroup float="left">
                    <ToolbarTitle text={title||''}/>
                </ToolbarGroup>
                <ToolbarGroup float="right">
                    <FlatButton label="po"/>
                </ToolbarGroup>

            </Toolbar>);
    }
}


class TableContainer extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.handleTap = this.handleTap.bind(this);
        this.handleConfigChange = this.handleConfigChange.bind(this);
        this.state = {};

    }


    handleTap() {
        this.setState({expand: !this.state.expand});
    }

    handleConfigChange (newConfig) {
        console.log('this is the new config', newConfig);
    }


    render() {
        const {title, config} = this.props,
            palette = this.context.muiTheme.rawTheme.palette;


        let codeStyle = Object.assign({}, styles.table, styles.tableRetracted),

            paperStyle = {
                backgroundColor: palette.canvasColor,
                marginBottom: 32
            };

        if (this.state.expand) {
            codeStyle = styles.table;
        }

        let data = {
            columns : [
                {id: 'id'}
            ]
        };

        return (
            <Paper id="pp" style={paperStyle}>
                <div style={styles.root}>
                    <div style={styles.title} onTouchTap={this.handleTap}>
                        <ContainerTitle title={title}/>
                    </div>
                    <div style={codeStyle}>
                        <TableConfigurator config={config} onConfigChange={this.handleConfigChange} />
                    </div>
                    <div>
                        <TableContent data={data} config={config}/>
                    </div>
                </div>
            </Paper>
        );
    }
}

TableContainer.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default TableContainer;