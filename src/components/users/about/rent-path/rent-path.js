import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import Spacer from "../../../common/spacer/spacer";
import { MdFlightTakeoff, MdSwapCalls, MdGroups } from "react-icons/md";
import "./rent-path.scss";
const RentPath = () => {
  return (
    <section>
      <SectionHeader
        title="DMK has established 3 key competitive
advantages"
        subtitle="3 key competitive"
        desc=""
      />
      <Spacer height={50} />
      <Container className="rent-path">
        <Row>
          <Col md={4}>
            <MdFlightTakeoff />
            <h2>We are fast</h2>
            <p>
              To respond, to adapt, to change and to deliver. Underpinned by the
              sense of urgency we have as a company, we continue to invest in
              being ‘fast’.
            </p>
          </Col>
          <Col md={4}>
            <MdSwapCalls />
            <h2>We are flexible</h2>
            <p>
              {" "}
              We work closely with our customers to understand their real
              concerns, their challenges, to understand their best outcome and
              what do they really need to be successful
            </p>
          </Col>
          <Col md={4}>
            <MdGroups />
            <h2>We are friendly</h2>
            <p>
              Our ability to engage with customers as individuals and create a
              friendly working environment while remaining professional and
              delivering our client's needs, sets us apart.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RentPath;
