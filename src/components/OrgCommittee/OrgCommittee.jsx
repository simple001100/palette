import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Title from "../Title";
import { orgData } from './data';


export const OrgCommittee = () => {
    return (
        <div className="services-part-org">
            <Title title="Оргкомитет" />
            <Container>
                <Row>
                    {orgData.map((org, index) => {
                        return (
                            <Col sm key={index}>
                                <div className="our-team">
                                    <div className="picture">
                                        <img className="img-fluid" src={org.image} alt="org#1" />
                                    </div>
                                    <div className="team-content">
                                        <h3 className="name">{org.name}</h3>
                                    </div>
                                    <ul className="social">
                                        <p>{org.desrc}</p>
                                    </ul>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>

    )
}