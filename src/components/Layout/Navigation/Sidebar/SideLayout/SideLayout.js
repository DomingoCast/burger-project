import React from 'react'
import Backdrop from '../../../../UI/Backdrop/Backdrop'
import classes from './SideLayout.module.sass'

const sideLayout = (props) => (
    <div>
        <Backdrop click={console.log('wpw')} display={true} color={'rgba(94,94,94, 0.6)'}/>
        <div className={classes.sideBlock}></div>
    </div>
)

export default sideLayout
