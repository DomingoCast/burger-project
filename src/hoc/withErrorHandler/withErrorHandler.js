import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptop= axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error
                    })        
                })
        }
        componentWillUnmount(){
            axios.interceptor.request.eject(this.reqIterceptor)
            axios.interceptor.response.eject(this.resIterceptor)
        }
        render(){
            return(
                <Aux>
                    <Modal display={this.state.error}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>

                    <WrappedComponent/>
                </Aux>
            )
        }
    }
}

export default withErrorHandler
