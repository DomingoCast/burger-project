import React, { Component  } from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Form.module.sass'

class Form extends Component{
    render(){
        return(
            <div className={classes.bigContainer}>
                <div className={classes.formContainer}>
                    <Input type="name"/>
                    <Input type="email"/>
                    <Input type="adress"/>
                    <Input type="card"/>
                </div>
            </div>
            

        )
    }
} 

export default Form
