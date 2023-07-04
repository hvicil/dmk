import React from "react";
import {
  MdOutlineHeadphones,
  MdOutlinePhonelinkRing,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";
import { settings } from "../../../../utils/settings";
import "./contact-info.scss";

const ContactInfo = () => {
  return (
    <ul className="contact-info">
      <li>
        <MdOutlineHeadphones /> {settings.phone1}
      </li>
      <li>
        <MdOutlinePhonelinkRing /> {settings.phone2}{" "}
      </li>
      <li>
        <MdOutlineLocationOn /> {settings.address}
      </li>
      <li>
        <MdOutlineMailOutline /> {settings.email}
      </li>
    </ul>
  );
};

export default ContactInfo;
