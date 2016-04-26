import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ColumnEditor from './ColumnEditor.jsx';


const style = {
    root: {maxWidth: '650px'}
};


class TableConfigurator extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.applyConfigChanges = this.applyConfigChanges.bind(this);
        this.handleColumnConfigChange = this.handleColumnConfigChange.bind(this);
        this.state = props.config;

    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.config);
    }

    handleColumnConfigChange(index, config) {
        const columns = this.state.columns;
        columns[index] = config;
        this.setState(Object.assign({}, this.state, {columns}));
    }

    applyConfigChanges() {

    }

    render() {
        const {columns, tableName } = this.state,
            {onConfigChange} = this.props;

        return (<Card>
            <CardTitle title={`${tableName} properties`}/>
            <div style={{width: '300px'}}>
                {
                    columns.map((column, index)=> {
                        return (
                            <ColumnEditor index={index} column={column} changeHandler={this.handleColumnConfigChange}/>)
                    })}

            </div>
            <CardActions style={{float: 'right'}}>
                <FlatButton label="Apply"
                            onTouchTap={() =>{ if(onConfigChange) onConfigChange({columns, tableName}); }}/>
            </CardActions>
        </Card>)

    }
}
TableConfigurator.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default TableConfigurator;

