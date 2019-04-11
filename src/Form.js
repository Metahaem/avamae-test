import React from 'react';
import Steptabs from './Steptabs'

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        emailAddress: '',
        step: 1
    };

    // Called each time a character is typed or deleted
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Will go to the next input field or submit the form, depending on which step of the form submission you are at  
    handleNext = (event) => {
        event.preventDefault();
        this.state.step === 1 ? this.setState({step: 2}) : this.submitForm()
    }

    // Lets user know they have submitted the form, and clears data from form
    submitForm = () => {
        alert('Form submitted! (You would be making an API call here)')
        this.setState({
            firstName: '',
            lastName: '',
            telephoneNumber: '',
            emailAddress: '',
            step: 1
        })
    }

    render() {
        const {step, firstName, lastName, telephoneNumber, emailAddress} = this.state
        return (
            <div>
            <Steptabs step={step}/><br/>
            <form onSubmit={this.handleSubmit}>
                <div className='textBox'>
                    <label className='box-label' for='box1'>
                        {this.state.step === 1 ? 'First Name' : 'Telephone Number'}
                    </label>

                    <textarea 
                        id='box1'
                        type='text'
                        name={step === 1 ? 'firstName' : 'telephoneNumber'}
                        value={step === 1 ? firstName : telephoneNumber} 
                        onChange={this.handleChange} 
                    /> 
                </div>

                <div>
                    <label className='box-label' for='box2'>
                        {step === 1 ? 'Last Name' : 'Email Address'}
                    </label>  

                    <textarea 
                        id='box2'
                        type='text'
                        name={step === 1 ? 'lastName' : 'emailAddress'}
                        value={step === 1 ? lastName : emailAddress} 
                        onChange={this.handleChange} 
                    />
                </div>

                <input className='button' type='submit' value={step===1? 'Next' : 'Submit'} onClick={this.handleNext}/>
            </form>
            </div>
        )
    }
}


export default Form;