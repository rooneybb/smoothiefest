import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './RSVP.css';
import { Image, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import outdoorWedding from '../resources/images/outdoorWedding.jpg';

const axiosInstance = axios.create();

const submit = async () => {
    const data2 = {
        firstName: 'bb',
        lastName: 'yo',
        partySize: 2
    };

    // const data2 = 'test';
    // const options = {
    //     method: 'post',
    //     url: 'https://webhook.site/9818053c-2264-425d-958f-896927431fbc',
    //     headers: { 'x-api-key': 'test123', 'content-type': 'plain/text' },
    //     data: JSON.stringify(data2)
    // };

    try {
        return await axiosInstance({
            method: 'post',
            url: 'https://7pd3mzzqxk.execute-api.us-east-1.amazonaws.com/prod/guests',
            headers: {
                'x-api-key': 'test123',
                'content-type': 'application/json'
            },
            data: JSON.stringify(data2)
        });
    } catch (e) {
        console.error(`Error calling db: ${e.message}`);
        return e;
    }
};

class RSVP extends Component {
    render() {
        return (
            <div className="rsvpBody">
                <h2 className="routeHeader">RSVP</h2>
                <br></br>
                <h2 className="subHeader1">Will thou quench their thirst at Smoothiefest?</h2>
                {/* <form>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input name="name" />
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>
                            <p>Party Size</p>
                            <input name="partySize" />
                        </label>
                    </fieldset>
                </form> */}
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <FormControl />
                </InputGroup>

                <DropdownButton id="dropdown-basic-button" title="Party Size">
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">4</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">5</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">6</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">7</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">8</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">9</Dropdown.Item>
                </DropdownButton>
                <h2 className="subHeading2">Take me to...?</h2>
                <div className="buttonContainer">
                    <Button className="yesButton" variant="success" onClick={() => submit()}>
                        Funky Town - Yes
                    </Button>
                    <Button className="noButton" variant="danger">
                        Bummer City - No
                    </Button>{' '}
                </div>
                <Image className="stillLife" src={outdoorWedding} roundedCircle />
            </div>
        );
    }
}

export default RSVP;
