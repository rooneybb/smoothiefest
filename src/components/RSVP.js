import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './RSVP.css';
import { Image, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import outdoorWedding from '../resources/images/outdoorWedding.jpg';

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
                    <Button className="yesButton" variant="success">
                        Funky Town
                    </Button>
                    <Button className="noButton" variant="danger">
                        Bummer City
                    </Button>{' '}
                </div>
                <Image className="stillLife" src={outdoorWedding} roundedCircle />
            </div>
        );
    }
}

export default RSVP;
