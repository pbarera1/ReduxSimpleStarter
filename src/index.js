import React from 'react';
import ReactDOM from 'react-dom';


//create new component with html
const App = () => {
    return <div> HI! </div>;
}

// put it in the DOM
React.render( <App />, document.querySelector('.container') );
