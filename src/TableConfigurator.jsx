import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const style = {
    root: {maxWidth: '650px'}
};


class TableConfigurator extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {

        };
    }

    handleTitleChange () {

    }

    handleVisibility() {

    }


    render() {
        const {columns, tableName} = this.props.config;
        return (<Card >
            <CardTitle title={`${tableName} properties`}/>
            <div>
                <table>
                    {columns.map(column=> {
                        return (
                            <tr>
                                <td>
                                    <div style={{marginLeft: '40px'}}>
                                        {column.id}
                                    </div>
                                </td>
                                <td>
                                    <div style={{marginLeft: '40px'}}>
                                        <Toggle label='visible'
                                                onChange={this.handleVisibility}
                                                labelPosition="right"/>
                                    </div>
                                </td>
                                <td>
                                    <div style={{marginLeft: '40px'}}>
                                    <TextField onChange={this.handleTitleChange}/>
                                        </div>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <CardActions>
                <FlatButton label="Apply"/>
            </CardActions>
        </Card>)

    }
}
TableConfigurator.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default TableConfigurator;

