import React, { Component } from 'react'

export class ChildClassLC extends Component {
    constructor(props) {
        super(props);
        console.log('Child Constructor');
        this.state = {
            name : 'Teja'
        }
    }


    static getDerivedStateFromProps(props,state){
        // It is used to change the state based on the props and it is an ideal place where if we want to update the state (again based on props) before the render method gets called.
        console.log('Child getDerivedStateFromProps component props',props);
        console.log('Child getDerivedStateFromProps component state',state);

    }

    render() {
        console.log('Child render');
        return (
            <div>
                <h3>ChildClassLC</h3>
            </div>
        )
    }
    componentDidMount(){
        console.log('Child ComponentDidMount');
    }
}

export default ChildClassLC