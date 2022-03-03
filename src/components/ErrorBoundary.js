import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>server is down try again in 1 hour</h1>

        }
        return this.props.children
    }



}

export default ErrorBoundary

