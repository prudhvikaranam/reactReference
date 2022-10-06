import React, { Component } from 'react'

const EnhancedReferSourceCompo = (OriginalComponent, title, link) => {
    class NewReferSourceHOC extends Component {
        constructor(props) {
            super(props)
        }
        render() {
            return <OriginalComponent title={title} link={link} />
        }
    }
    return NewReferSourceHOC;
}


export default EnhancedReferSourceCompo;