import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.module.sass'

const style = {
}
//console.log(classes)
const layout = props => (
    <Aux>
        <div>Toolbar, sidedrawer, Backdrop</div>
        <main style={style}className={classes.content}>{props.children}</main>

    </Aux>
)

export default layout
