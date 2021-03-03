import React, { Component } from 'react';
import './RSVP.css';
import {
    Image,
    InputGroup,
    FormControl,
    Dropdown,
    DropdownButton,
    Button,
    Alert
} from 'react-bootstrap';
import axios from 'axios';
import outdoorWedding from '../resources/images/outdoorWedding.jpg';

const axiosInstance = axios.create();

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            partySize: '',
            response: '',
            show: false,
            warning: false,
            successMessage: '',
            warningMessage: ''
        };
    }

    resetUserState = async () => {
        console.log(`Resetting State: ${JSON.stringify(this.state)}`);
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            partySize: '',
            response: ''
        });
        console.log(`State Reset: ${JSON.stringify(this.state)}`);
    };

    validateData = () => {
        if (this.state.firstName === '') {
            throw Error('Need to fill out first name!');
        }
        if (this.state.lastName === '') {
            throw Error('Need to fill out last name!');
        }
        if (this.state.partySize === '') {
            throw Error('Need to fill out party size!');
        }
        if (this.state.response === '') {
            throw Error('Issue generating response!');
        }
    };

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
        try {
            await this.setState({ response: event.target.value });
            console.log(`Response ${this.state.response}`);
            this.validateData();
            const res = await this.updateDb();
            console.log(`Res: ${JSON.stringify(res)}`);
            if (res.status === 200) {
                await this.setShowTrue();
                await this.setSuccessMessage(
                    `${this.state.firstName} ${this.state.lastName} RSVP ${this.state.response} for party of ${this.state.partySize} successfully submitted`
                );

                await this.resetUserState();
                // return this.showAlert();
            }

            // await this.setShow(false);
            return res;

            // return this.showAlert();
        } catch (err) {
            console.log(err.message);
            // await this.setShowTrue();
            await this.setWarningTrue();
            await this.setWarningMessage(err.message);
            //  return this.showAlert();
            return err;
        }
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

    setShowTrue = async () => this.setState({ show: true });

    setShowFalse = async () => this.setState({ show: false });

    setWarningTrue = async () => this.setState({ warning: true });

    setWarningFalse = async () => this.setState({ warning: false });

    setWarningMessage = async (msg) => this.setState({ warningMessage: msg });

    setSuccessMessage = async (msg) => this.setState({ successMessage: msg });

    render() {
        return (
            <div className="rsvpBody">
                <h2 className="routeHeader">RSVP</h2>
                <div className="popUp">
                    {this.state.show && (
                        <Alert variant="success" onClose={this.setShowFalse} dismissible>
                            {this.state.successMessage}
                        </Alert>
                    )}
                    {this.state.warning && (
                        <Alert variant="danger" onClose={this.setWarningFalse} dismissible>
                            {this.state.warningMessage}
                        </Alert>
                    )}
                </div>

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
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Enter Name</InputGroup.Text>
                    </InputGroup.Prepend>
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
                </div>
                <div className="buttonContainer">
                    <Button
                        className="noButton"
                        variant="danger"
                        value="no"
                        onClick={this.handleSubmit}
                    >
                        Bummer City - No
                    </Button>
                </div>

                <Image className="stillLife" src={outdoorWedding} roundedCircle />
            </div>
        );
    }
}

export default RSVP;
