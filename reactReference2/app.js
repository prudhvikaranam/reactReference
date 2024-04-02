import React from 'react';
import ReactDOM from 'react-dom';


const div = React.createElement('div', { id: 'parent' }, [
    [

        React.createElement('div', { id: 'childA' }, [
            React.createElement('h2', { id: 'h1react' }, 'Hey Im Nsted h1A created with React'),
            React.createElement('h2', { id: 'h1react' }, 'Hey Im  Nsted h2A created with React')
        ])
    ],
    [
        React.createElement('div', { id: 'childB' }, [
            React.createElement('h2', { id: 'h1react' }, 'Hey Im  Nsted h1B created with React'),
            React.createElement('h2', { id: 'h1react' }, 'Hey Im  Nsted h2B created with React')
        ])
    ],
]);


const head = React.createElement('h1', { id: 'h1react' }, 'Hey Im h1 created with React'); // This is an React Element which is in Object format internally

const jsxHead = <h1>Hello, I'm an head coming from JSX format</h1> // Although this looks like a tag but this is also an Object internally, Usually this type of syntax <h1> tagss will not work if we start application normally, If we want to run this type of code we need some kind of the transpilers, In this application case, we have installed parcel which will internally use babel (transpiler) hence we run the applicaion using parcel (npx parcel index.html) it will work...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([jsxHead, div, head]);
