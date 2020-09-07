import React, {useState} from 'react'
import{locationContext} from '../../context';
import Cart from './Cart'
import ParentChildren from './ParentChildren';

const Parent = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <>
            <div onClick={handleToggle}>
                <locationContext.Consumer>
                    {value => {
                        if (value[value.length-1] === undefined || Object.keys(value[0]) === 0) {
                            return "Loading...."
                        }
                        return <Cart title={value[0].title}  bgc={toggle}/>
                    }}
                </locationContext.Consumer>
            </div>

            {toggle && <div className="subCart"><ParentChildren/></div>}
       </>
    )
}

export default Parent
