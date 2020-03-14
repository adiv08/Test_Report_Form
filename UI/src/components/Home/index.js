import React from "react"
import { Button, Dropdown } from 'react-bootstrap';

class Home extends React.Component {
    loadTestingForm() {

    }

    render() {
        return (
            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input type="text" />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select testing type
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >Mobile testing</Dropdown.Item>
                        <Dropdown.Item >Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button onClick={this.loadTestingForm}>Next</Button>
            </form>
        );
    }
}

export default Home;