import React, { Component } from 'react'
import CounterRenderProp from './CounterRenderProp'
import HoverRenderProp from './HoverRenderProp'
import RenderProp from './RenderProp'

export class ParentRenderProp extends Component {
    render() {
        return (
            <div>
                ParentRenderProp Component
                <h3 className='info2'>
                    Render Props are used for code reuse-ability which is similar to HOC but with a different approach<br />
                    The term "render prop'" refers to a technique for sharing code between React Components using a prop whose value is a function.
                </h3>
                <hr />
                <RenderProp render={(counter, incrementCounter) => {
                    return <CounterRenderProp name={() => { return "Prudhvi Teja Karanam" }} counter = {counter} incrementCounter = {incrementCounter}/>
                }} /><hr />
                <RenderProp render={(counter, incrementCounter) => {
                    return <HoverRenderProp name={() => { return "Prudhvi Teja Karanam" }} counter = {counter} incrementCounter = {incrementCounter}/>
                }} />

                {/* Below method is via using this.props.children */}
                {/* <RenderProp>
                    {
                        (counter, incrementCounter) => {
                            return <HoverRenderProp name={() => { return "Prudhvi Teja Karanam" }} counter={counter} incrementCounter={incrementCounter} />
                        }
                    }
                </RenderProp> */}
            </div>
        )
    }
}

export default ParentRenderProp