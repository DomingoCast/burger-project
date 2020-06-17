import React from 'react'
import Aux from '../../../Aux/Aux'
import classes from'./NavigationItems.module.sass'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => {

    //const style = {display: 'block'}
    return(
    <Aux>
        <div class={props.firstClass}>
            <NavigationItem click={props.clickMenu} mobile={props.mobile} url='#'>Menu</NavigationItem>
        </div>
        <div className={props.secClass}>   
            <NavigationItem secondWord={true} mobile={props.mobile} url='/burger'>Burger Builder</NavigationItem>
            <NavigationItem mobile={props.mobile} url='/checkout'>Check out</NavigationItem>
        </div>
    </Aux>
)
}

export default navigationItems
