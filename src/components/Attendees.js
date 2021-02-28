import React, { Component } from 'react';
import './RSVP.css';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import outdoorWedding from '../resources/images/outdoorWedding.jpg';

const axiosInstance = axios.create();

class Attendees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: []
        };
    }

    async componentDidMount() {
        await this.getDb();
    }

    getDb = async () => {
        try {
            const res = await axiosInstance({
                method: 'get',
                url: 'https://7pd3mzzqxk.execute-api.us-east-1.amazonaws.com/prod/guests',
                headers: {
                    'x-api-key': 'test123',
                    'content-type': 'application/json'
                }
            });
            this.setState({ guests: res.data });
            console.log(`Guests: ${JSON.stringify(this.state.guests.toString())}`);
            return res.data;
        } catch (e) {
            console.error(`Error calling db: ${e.message}`);
            return e;
        }
    };

    render() {
        return (
            <div className="attendeesBody">
                <h2 className="routeHeader">Attendees</h2>
                {this.state.guests.map((guest, i) => (
                    <p key={i}>
                        Name: {guest.firstName} {guest.lastName}
                        <br></br>
                        Party Size: {guest.partySize}
                        <br></br>
                        Attending: {guest.isComing}
                    </p>
                ))}
                <Image className="stillLife" src={outdoorWedding} roundedCircle />
            </div>
        );
    }
}

export default Attendees;
