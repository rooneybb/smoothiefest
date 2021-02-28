import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './RSVP.css';
import { Image, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import outdoorWedding from '../resources/images/outdoorWedding.jpg';

const axiosInstance = axios.create();

// const handleSubmit = async (event) => {
//     const data2 = {
//         firstName: 'bb',
//         lastName: 'yo',
//         partySize: 2
//     };

//     console.log(JSON.stringify(event));

//     // const data2 = 'test';
//     // const options = {
//     //     method: 'post',
//     //     url: 'https://webhook.site/9818053c-2264-425d-958f-896927431fbc',
//     //     headers: { 'x-api-key': 'test123', 'content-type': 'plain/text' },
//     //     data: JSON.stringify(data2)
//     // };

//     try {
//         return await axiosInstance({
//             method: 'post',
//             url: 'https://7pd3mzzqxk.execute-api.us-east-1.amazonaws.com/prod/guests',
//             headers: {
//                 'x-api-key': 'test123',
//                 'content-type': 'application/json'
//             },
//             data: JSON.stringify(data2)
//         });
//     } catch (e) {
//         console.error(`Error calling db: ${e.message}`);
//         return e;
//     }
// };

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            partySize: '',
            response: ''
        };
    }

    updateDb = async () => {
        const firstName = this.state.firstName.trim().toLowerCase();
        const lastName = this.state.lastName.trim().toLowerCase();

        const guestdata = {
            firstName,
            lastName,
            id: `${firstName}${lastName}`,
            partySize: this.state.partySize,
            timeStamp: Date.now(),
            isComing: this.state.response
        };
        try {
            const res = await axiosInstance({
                method: 'post',
                url: 'https://7pd3mzzqxk.execute-api.us-east-1.amazonaws.com/prod/guests',
                headers: {
                    'x-api-key': 'test123',
                    'content-type': 'application/json'
                },
                data: JSON.stringify(guestdata)
            });

            return res;
        } catch (e) {
            console.error(`Error calling db: ${e.message}`);
            return e;
        }
    };

    handleSubmit = async (event) => {
        await this.setState({ response: event.target.value });
        console.log(`Response ${this.state.response}`);
        const res = await this.updateDb();
        return res;
    };

    handleFirstNameChange = async (event) => {
        await this.setState({ firstName: event.target.value });
        console.log(`First Name: ${this.state.firstName}`);
    };

    handleLastNameChange = async (event) => {
        await this.setState({ lastName: event.target.value });
        console.log(`Last Name: ${this.state.lastName}`);
    };

    handlePartySize = async (eventKey) => {
        await this.setState({ partySize: eventKey });
        console.log(`Party Size: ${this.state.partySize}`);
    };

    render() {
        return (
            <div className="rsvpBody">
                <h2 className="routeHeader">RSVP</h2>
                <br></br>
                <h2 className="subHeader1">Will thou quench their thirst at Smoothiefest?</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Enter Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="text"
                        placeholder="First name..."
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                    <FormControl
                        type="text"
                        placeholder="Last name..."
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Party Size</InputGroup.Text>
                    </InputGroup.Prepend>
                    <DropdownButton
                        type="text"
                        id="dropdown-basic-button"
                        title={this.state.partySize}
                        onSelect={this.handlePartySize}
                        name="partySize"
                        value={this.state.partySize}
                    >
                        <Dropdown.Item eventKey="1">1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="4">4</Dropdown.Item>
                        <Dropdown.Item eventKey="5">5</Dropdown.Item>
                        <Dropdown.Item eventKey="6">6</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="8">8</Dropdown.Item>
                        <Dropdown.Item eventKey="9">9</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>

                <h2 className="subHeading2">Take me to...?</h2>
                <div className="buttonContainer">
                    <Button
                        className="yesButton"
                        variant="success"
                        value="yes"
                        onClick={this.handleSubmit}
                    >
                        Funky Town - Yes
                    </Button>
                    <Button
                        className="noButton"
                        variant="danger"
                        value="no"
                        onClick={this.handleSubmit}
                    >
                        Bummer City - No
                    </Button>{' '}
                </div>
                <Image className="stillLife" src={outdoorWedding} roundedCircle />
            </div>
        );
    }
}

export default RSVP;
