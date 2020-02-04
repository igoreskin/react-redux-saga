import React, { useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = (props) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: ''
    });

    const handleNameChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            firstName: form.firstName,
            lastName: form.lastName
        });
        setForm({firstName: '', lastName: ''});
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input required name="firstName" placeholder="First Name" value={form.firstName} onChange={handleNameChange} />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input required name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleNameChange} />
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">Create</Button>
            </FormGroup>
        </Form>
    )
}

export default NewUserForm;
