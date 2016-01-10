import React from 'react';
import ReactDOM from 'react-dom';
const injectTouchTapEvent = require('react-tap-event-plugin');
injectTouchTapEvent();

const divStyle={
  width: 200,
  border: "1px dotted",
  marginBottom: 12,
}

const HelloTapOnly = () => (<div style={ divStyle } onTouchTap={() => (setLastAction('tap')) } >Tap me!</div>);
const HelloClickAndTap = () => (<div style={ divStyle } onTouchTap={() => (setLastAction('tap')) } onClick={() => (setLastAction('click')) }>Tap or click me!</div>);
const LastAction = (props) => (<p>{ props.lastAction }</p>);

const setLastAction = (lastAction) => {
  ReactDOM.render(
    (<div>
     <HelloTapOnly />
     <HelloClickAndTap />
     <LastAction lastAction={ lastAction } />
     </div>),
    document.getElementById('app')
  );
}

setLastAction('Click one of the above');
