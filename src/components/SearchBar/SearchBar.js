import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <>
                <div className="ui segment">
                    <form
                        onSubmit={this.onFormSubmit}
                        action=""
                        className="ui form">
                        <div className="field">
                            <label htmlFor="">Search for your favorite Video</label>
                            <div className="ui input">
                                <input
                                    value={this.state.term}
                                    placeholder="Kid Cudi..."
                                    onChange={(e) => this.setState({ term: e.target.value })}
                                    type="text" />
                                <br />
                                <br />
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar;