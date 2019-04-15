import React from 'react';
import Steptabs from './Steptabs'
import './Form.css';

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        emailAddress: '',
        step: 1,
        styles1: {
            backgroundColor: '#C1EAFA',
            border: '1px solid rgb(113, 166, 187)'
        },
        styles2: {}
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
        if ((this.state.step === 2 && (this.state.telephoneNumber.length === 0 || this.state.emailAddress.length===0)) || this.state.firstName.length === 0 || this.state.lastName.length === 0) {
            alert('Make sure all boxes are complete!')
        }
        else {
            this.state.step === 1 ? this.nextStep() : this.submitForm()
        } 
    }

    nextStep = () => {
        this.setState({
            step: 2,
            styles1: {}, 
            styles2: {
                backgroundColor: '#C1EAFA',
                border: '1px solid rgb(113, 166, 187)'
            },
        })
    }

    // Lets user know they have submitted the form, and clears data from form
    submitForm = () => {
        alert('Form submitted! (You would be making an API call here)')
        this.setState({
            firstName: '',
            lastName: '',
            telephoneNumber: '',
            emailAddress: '',
            step: 1,
            styles1: {
                backgroundColor: '#C1EAFA',
                border: '1px solid rgb(113, 166, 187)'
            },
            styles2: {}
        })
    }

    render() {
        const {step, styles1, styles2, firstName, lastName, telephoneNumber, emailAddress} = this.state

        return (
            <div>
                <Steptabs styles1={styles1} styles2={styles2} /><br/>
                <form onSubmit={this.handleSubmit}>
                    <div className='textBox'>
                        <label className='box-label'>
                            {step === 1 ? 'First Name' : 'Telephone Number'}
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
                        <label className='box-label'>
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