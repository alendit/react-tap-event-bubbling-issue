const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

import React from 'react';
import ReactDOM from 'react-dom';
import { DropDownMenu, MenuItem } from 'material-ui/lib';



const divStyle={
  width: 200,
  border: "1px dotted",
  marginBottom: 12,
}

const HelloTapOnly = () => (<div style={ divStyle } onTouchTap={() => (setLastAction('tap')) } >Tap me!</div>);
const HelloClickAndTap = () => (<div style={ divStyle } onTouchTap={() => (setLastAction('tap')) } onClick={() => (setLastAction('click')) }>Tap or click me!</div>);
const LastAction = (props) => (<p>The last event was { props.lastAction }</p>);

class Driver extends React.Component {
  componentDidMount() {
    this.refs.root.addEventListener('mousedown', (el) => el.stopPropagation(), false);
  }
  render() {
    return (<div ref="root">
            <HelloTapOnly />
            <HelloClickAndTap />
            <LastAction lastAction={ this.props.lastAction } />
            <DropDownMenu value={ 0 }>
            <MenuItem value={ 0 } primaryText="Item 1" />
            <MenuItem value={ 1 } primaryText="Item 2" />
            </DropDownMenu>
    </div>);
  }

}

const setLastAction = (lastAction) => {
  ReactDOM.render(
    (<Driver lastAction={ lastAction }/>),
    document.getElementById('app')
  );
}

setLastAction('Click one of the above!!');
