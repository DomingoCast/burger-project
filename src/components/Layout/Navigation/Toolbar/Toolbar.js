import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.sass'

const toolbar = (props) => (
    <header>
        <nav className={classes.Toolbar}>
            <div className={classes.content}>
                <Logo className= {classes.Logo}/>
                <NavigationItems clickMenu={props.clickMenu}secClass={classes.secClass}/>
            </div>
        </nav>
    </header>
    )

export default toolbar
