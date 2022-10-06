import React, { Component } from 'react'


const EnhancedComponentHOC = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }
        increment(){
            this.setState({
                count : this.state.count + 1
            })
        }
        render(){
            console.log('PROPS in Enhancedcomponent',this.props);
            return <OriginalComponent count = {this.state.count} increment = {this.increment.bind(this)} {...this.props}/>
        }
    }
    return NewComponent;
}

export default EnhancedComponentHOC;