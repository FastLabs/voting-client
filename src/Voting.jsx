import {React} from 'react';

export default React.createClass({

    getPair: ()=> {
        return this.props.pair || [];
    },

    isDisabled: () => {

    },

    render: () => {
        return <div className="voting">
            {
                this.getPair().map(entry =>
                    <button key={entry}
                            onclick={()=>this.props.vote(entry)}>
                        <h1>{entry}</h1>
                    </button>
                )}
        </div>
    }
});