import React from 'react'
import {locationContext} from "../../context"
import ChildrenNode from './ChildrenNode'

const ParentChildren = () => {
    return (
        <locationContext.Consumer>
            {value => {
                if (value[value.length - 1] === undefined || Object.keys(value[0]) === 0) {
                    return "Loading...."
                }

                const {children} = value[value.length - 1];
                return children.sort((a, b) => a.srt - b.srt).map(item => {
                    const nodeItem = item.children;
                    return <ChildrenNode key={item.id} title={item.title} nodeItem={nodeItem}/>
                })
            }}
        </locationContext.Consumer>
    )
}

export default ParentChildren
