import React from 'react';
import AutoComplete from 'material-ui/AutoComplete'

export default React.createClass({
    getPair: function () {
        return this.props.pair || [];
    },



    render: function () {
        console.log(this.childContext);
        return <div className="voting">
            <div>
                <AutoComplete id="abc" dataSource = {['unu','doi', 'trei', 'patru', 'unsprezece', 'usa']} maxSearchResults={2} />
            </div>

        {this.getPair().map(entry =>
                <button key={entry}
                        onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                </button>
            )}
        </div>;
    }
});