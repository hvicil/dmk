import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import SectionHeader from "../../common/section-header/section-header";
import ContactInfo from "../contact-info/contact-info";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./contact-form.scss";
import { sendMessage } from "../../../../api/contact-service";
import { toast } from "../../../../utils/functions/swal";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    subject: "",
    body: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    subject: Yup.string()
      .max(50, "Your subject should be max 50 characters")
      .min(5, "Your subject should be at least 5 characters")
      .required("Enter subject of message"),
    body: Yup.string()
      .max(200, "Your subject should be max 200 characters")
      .min(20, "Your message should be at least 20 characters")
      .required("Enter your message"),
    email: Yup.string().email().required("Enter your email"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await sendMessage(values);
      formik.resetForm();
      toast("Your message was send", "success");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="contact-form">
      <Row className="g-5">
        <Col>
          <SectionHeader title="Contact Us" subTitle="Need additional info?" />
          <Spacer height={20} />
          <p>
            Registereintrag: Amtsgericht: Braunschweig Reg. No.: HRA 202830
            Umsatzsteuer-ID gemäß §27a Umsatzsteuergesetz UST-ID Nr.:
            DE353478490
          </p>
          <Spacer height={20} />
          <ContactInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
