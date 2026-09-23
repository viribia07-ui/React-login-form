import React from "react";

export default class InputEmail extends React.Component {
    state={
        email: ""
    }

    handleEmailEdit = (e) => {
        //console.log("handleEmailEdit e", e);
        console.log("handleEmailEdit e.nativeEvent.data", e.nativeEvent.data); //utolsó karater
        console.log("handleEmailEdit e", e.target?.value); //teljes email
        console.log("InputEmail e", e.props);
        
        const email = e.nativeEvent?.value //e.nativeEvent.data helyett
        this.setState({email})
        this.props.onEmailchange(email)
    }

    render() {


        return <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailEdit}
                required

            />
            <p className="field-error" id="email-error">%error message%</p>
        </div>
    }
}