import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Form, Button, Card, Col } from 'react-bootstrap';


export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Title className='text-center'>Login</Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    );
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
  };