import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './registration-view.scss';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ Birthday, setBirthday ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, Birthday);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegistration(username);
    };

    return (
        <Row>
            <Col>
            <Card>
                <Card.Title className='text-center'>Sign Up</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange= {e => setUsername(e.target.value)}
                                required
                                placeholder='Enter a username'/>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={password} 
                                onChange= {e => setPassword(e.target.value)}
                                required
                                placeholder='Enter a password'/>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder='Enter your email address' />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Date of birth:</Form.Label>
                            <Form.Control 
                                type="date" 
                                value={Birthday} 
                                onChange={e => setBirthday(e.target.value)}
                                required
                                />
                        </Form.Group>
                        <br />
                        <style>

                        </style>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
                    </Form>
        </Card.Body>
        </Card>
            </Col>
        </Row>
        
    );
}

RegistrationView.propTypes= {
    onRegistration: PropTypes.func.isRequired,
};