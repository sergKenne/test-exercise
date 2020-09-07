import React, {useState} from 'react'
import Cart from './Cart'

const ChildrenNode = ({title, nodeItem}) => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    const subNodeItem = nodeItem.sort((a, b) => a.srt - b.srt).map(item => {
        return <Cart title={item.title} key={item.id} />
    })

    return (
        <>
            <div onClick={handleToggle}>
                <Cart title={title} bgc={toggle}/>
            </div>
            {toggle && <div className="subCart subNode">{subNodeItem}</div>}
        </>
    )
}

export default ChildrenNode
