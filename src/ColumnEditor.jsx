import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

class ColumnEditor extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.rowId = props.rowId;
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.state = {column: props.column};
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


    handleVisibility(ev, checked) {
        const {changeHandler, index} = this.props,
            changed = Object.assign({}, this.state, {visible: checked});
        if (changeHandler) {
            changeHandler(index, changed);
        }
    }


    render() {
        const {title, id} = this.state;
        return (<div style={{display : 'inline'}}>
                <div style={{marginLeft: '40px', width: '100px'}}>{id}</div>
                <div style={{marginLeft: '40px', width: '200px'}}>
                    <Toggle label='visible'
                            onToggle={this.handleVisibility}
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