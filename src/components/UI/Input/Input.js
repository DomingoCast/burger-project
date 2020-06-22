import React, {Component} from 'react'
import classes from './Input.module.sass'

class  Input extends Component{
    state = {
        parentClass: ` ${classes.inputBox}` ,
        invalidClass: ` ${classes.invalid}`,
        focusedClass: null
    }
     focused = () => {
        this.setState({parentClass: `${classes.inputBox} ${classes.focusedAdress}`})
    }
    validateName = (e) => {
        const name = e.target.value
        const re = /^[a-zA-Z]{2,10}$/
        console.log(e.target.value)
        if(!re.test(name)){
            console.log('ya')
            this.setState({parentClass:` ${classes.inputBox} ${classes.invalid}`})
                    
        }else{
            this.setState({parentClass:` ${classes.inputBox}`})
        }
    }

    validateEmail = (e) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if(!re.test(e.target.value)){
            this.setState({parentClass:` ${classes.inputBox} ${classes.invalid}`})
        }else{
            this.setState({parentClass:` ${classes.inputBox}`})
        }
    }

    validateAdress = () => {
        this.setState({parentClass:  `${classes.inputBox}`})
    }

    validateZip = (e) => {
        const re = /^[0-9]{5}(-[0-9]{4})?$/
        if(!re.test(e.target.value)){
            this.setState({parentClass:` ${classes.inputBox} ${classes.invalid}`})
        }else{
            this.setState({parentClass:` ${classes.inputBox}`})
        }

    }
    handleFocus = () => {
        this.setState({
            //focusedClass: classes.focused,
            parentClass:` ${classes.inputBox} ${classes.focused}`
            })
    }

    render(){
        let inputC
        switch (this.props.type){
            case "name":
                inputC = (
                    <>
                        <div className={`${this.state.focusedClass} ${this.state.parentClass}`}>
                            <div className={classes.backed}>
                                <input type="text" id="nameIn" onBlur={this.validateName} onFocus={this.handleFocus}className={classes.input}/>
                                <div className={classes.inputBack}></div>
                            </div>
                            <label for="nameIn" className={classes.label}>Name<div className={classes.label__background}></div></label>
                        </div>

                    </>
                )
                break
            case "email":
                inputC = (
                    <>
                        <div className={this.state.parentClass}>
                            <div className={classes.backed}>
                                <input type="email" id="emailIn" onFocus={this.handleFocus} onBlur={this.validateEmail} className={classes.input}/>
                                <div className={classes.inputBack}></div>
                            </div>
                            <label for="emailIn" className={classes.label}>Email<div className={classes.label__background}></div></label>
                        </div>
                    </>
                )
                break
            case "adress":
       
                inputC = (
                    <>
                        <div className={this.state.parentClass}>
                            <div className={classes.backed}>
                                <div className={classes.adressContainer}>
                                    <input type="text" onFocus={this.focused} onBlur={this.validateAdress} id="adressIn" className={`${classes.input} ${classes.adress}`}/>
                                    <input type="text"  onFocus={this.focused} onBlur={this.validateZip} id="zipIn" placeholder="zip" className={`${classes.input} ${classes.zip}`}/>
                                </div>
                                <div className={classes.inputBack}></div>
                            </div>
                            <label for="adressIn" className={classes.label}>Adress<div className={classes.label__background}></div></label>
                        </div>

                    </>
                )
                break
            case "card":
                inputC = (
                    <>
                        <div className={this.state.parentClass}>
                            <div className={classes.backed}>
                                <input type="text" id="cardIn" onFocus={this.handleFocus} onBlur={this.validateCard} className={classes.input}/>
                                <div className={classes.inputBack}></div>
                            </div>
                            <label for="cardIn" className={classes.label}>Card<div className={classes.label__background}></div></label>
                        </div>
                    </>
                )
                break


        }
        return(
            <div className={classes.inputContainer}>
                {inputC}
            </div>

        )
    }
}

export default Input
