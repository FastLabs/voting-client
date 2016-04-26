import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

class ColumnEditor extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.rowId = props.rowId;
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        let column = props.column;
        this.state = Object.assign({}, column);
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps.column);
    }


    handleTitle(ev) {
        const title = ev.target.value,
            changed = Object.assign({}, this.state, {title});
        if (this.props.changeHandler) {
            this.props.changeHandler(this.props.index, changed);
        }
    }


    handleVisibility() {
    }


    render() {
        const {title, id} = this.state;
        return (<div>
                <div style={{marginLeft: '40px'}}>{id}</div>
                <div style={{marginLeft: '40px'}}>
                    <Toggle label='visible'
                            onChange={this.handleVisibility}
                            labelPosition="right"/>
                </div>
                <div style={{marginLeft: '40px'}}>
                    <TextField onChange={this.handleTitle} value={title}/>
                </div>
            </div>
        );
    }

}

export default ColumnEditor;