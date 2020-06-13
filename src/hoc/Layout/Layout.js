import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.module.sass'
import Toolbar from './Navigation/Toolbar/Toolbar'
import Sidebar from './Navigation/Sidebar/Sidebar'


const style = {
}
//console.log(classes)
class Layout extends Component{ 
    state = {
        mobile: false,
        displaySB: false,
    }
    hideSB = ()=>{
        console.log('wasap')
        this.setState({displaySB: false})
    }
    showSB = () => {
        this.setState({displaySB: true})
    }
    clickMenu = () => {
        console.log('smt')
        if(this.state.displaySB){
            this.hideSB()
        }else{
            this.showSB()
        }        
    }
    hola= () => {console.log('nice')}
    render(){
        return(
            <Aux>
                <Toolbar
                clickMenu={this.clickMenu}
                />
                <Sidebar clickMenu={this.clickMenu} Back={this.hola} display={this.state.displaySB}/>
                <main style={style} 
                className={classes.content}>
                {this.props.children}
                </main>

            </Aux>
        )
    }
}

export default Layout
