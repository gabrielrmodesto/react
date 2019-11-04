import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} alt="Avatar profile" className="circle responsive-img"/>
                {props.name}
            </Col>
            <Col s={10} m={10}>
                <p><b>{props.title} in <span className="grey darken-2 white-text">{props.company}</span></b></p>
                <p>{props.description}</p>
            </Col>
        </Row>
    </Card>
);

export default Experience;