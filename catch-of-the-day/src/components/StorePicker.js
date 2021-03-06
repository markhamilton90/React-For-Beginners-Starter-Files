import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = e => {
        e.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    ref={this.myInput}
                    type="text"
                    placeholder="Store Name"
                    defaultValue={ getFunName() }
                    required />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
