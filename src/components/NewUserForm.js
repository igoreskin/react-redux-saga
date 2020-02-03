import React, { useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = (props) => {

    const [state, setState] = useState({
        firstName: '',
        lastName: ''
    });

    const handleFirstNameChange = (e) => {
        setState({ ...state, firstName: e.target.value })
    }

    const handleLastNameChange = (e) => {
        setState({ ...state, lastName: e.target.value})
    }

    const handleSubmit = (e) => {
        console.log("Clicked");
        e.preventDefault();
        props.onSubmit({
            firstName: state.firstName,
            lastName: state.lastName
        });
        setState({firstName: '', lastName: ''});
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input required placeholder="First Name" value={state.firstName} onChange={handleFirstNameChange} />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input required placeholder="Last Name" value={state.lastName} onChange={handleLastNameChange} />
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">Create</Button>
            </FormGroup>
        </Form>
    )
}

export default NewUserForm;
