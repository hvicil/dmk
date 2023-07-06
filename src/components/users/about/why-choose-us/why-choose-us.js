import React from "react";
import SectionHeader from "../../common/section-header/section-header";
import "./why-choose-us.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiPerson, GiWorld, GiFlexibleLamp } from "react-icons/gi";
import Spacer from "../../../common/spacer/spacer";
const WhyChooseUs = () => {
  return (
    <Container fluid className="why-choose-us">
      <img
        src={require("../../../../assets/img/bg/vehicles.png")}
        className="img-fluid"
        alt="vahicles"
      />
      <Spacer />
      <Container>
        <Row className="g-5">
          <Col md={6}>
            <SectionHeader
              title="We take our work very seriously"
              subtitle="Why Choose Us"
            />
            <p>
              The most effective way to answer this interview question is to
              flip the question to focus on what you have to offer and explain
              why you want the position. By emphasizing how you can contribute
              to the company's success and make an impact, you can showcase your
              value as a candidate.
            </p>
          </Col>
          <Col md={6}>
            <ul>
              <li>
                <div>
                  <GiPerson />
                </div>
                <div>
                  <h3>Highly qualified employees</h3>
                  <p>
                    Staff having a tertiary education degree and at least 5
                    years of relevant professional experience which may also
                    include doctoral training
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <GiWorld />
                </div>
                <div>
                  <h3>Years of experience</h3>
                  <p>
                    A measure which adds the amount of all the past experiences
                    through the present
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <GiFlexibleLamp />
                </div>
                <div>
                  <h3>Flexible collaboration</h3>
                  <p>
                    Working together with people from across the business to
                    achieve a shared goal
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyChooseUs;
