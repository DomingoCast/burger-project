import React from 'react'
import SideLayout from './SideLayout/SideLayout'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidebar.module.sass'

const sideBar = (props) => {
    let style
    if (props.display){
        style={display: 'block'}
    }else{
        style={display: 'none'}
    }

    return(
        <div className={classes.container}style={style}>
            <div class={classes.items}>
                <NavigationItems 
                mobile={true}
                clickMenu={props.clickMenu}
                firstClass={classes.primaryItems}
                secClass={classes.secondaryItems}
                />
            </div>
            <SideLayout Back={props.Back}/>
        </div>
    )

}

export default sideBar
