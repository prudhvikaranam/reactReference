const div = React.createElement('div', { id: 'parent' }, [
    [

        React.createElement('div', { id: 'childA' }, [
            React.createElement('h2', { id: 'h1react' }, 'Hey Im h1A created with React'),
            React.createElement('h2', { id: 'h1react' }, 'Hey Im h2A created with React')
        ])
    ],
    [
        React.createElement('div', { id: 'childB' }, [
            React.createElement('h2', { id: 'h1react' }, 'Hey Im h1B created with React'),
            React.createElement('h2', { id: 'h1react' }, 'Hey Im h2B created with React')
        ])
    ],
]);


const head = React.createElement('h1', { id: 'h1react' }, 'Hey Im h1 created with React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([div, head]);
