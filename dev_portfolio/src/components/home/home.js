import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">About Me</h5>
            <Card>
                <div>
                    <p><b>Lorem</b></p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci praesentium omnis, optio sint porro ab nobis in est delectus!</p>
                    <br/>
                    <p><b>Ipsum</b></p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, tempore harum dignissimos molestiae perspiciatis eveniet optio maiores laudantium voluptatum alias!</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiences</h5>
                <Experience 
                    title="Ruby Developer"
                    company="Soundcloud"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar}
                />
                <Experience 
                    title="React Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar2}
                />
        </Col>
    </Row>
);

export default Home;