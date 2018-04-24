import React from "react";
import Icon from "../../../components/uielements/icon/index.js";

export default [
  {
    id: 1,
    title: <h3 className="title">John Doe sent a SMS</h3>,
    createdAt: <p className="date">2016-09-12 10:06 PM</p>,
    icon: "",
    iconColor: "",
    __html: `I received the payment for $543. Should be shipping the item within
  a couple of hours. Thanks for the order!`
  },
  {
    id: 2,
    title: "You sent an email to John Doe",
    createdAt: "2016-09-11 09:06 AM",
    icon: <Icon>folder</Icon>,
    iconColor: "#03a9f4",
    __html: `
  <p>Subject: Any updates?</p>
  <p>
    Like we talked, you said that you would share the shipment
    details? This is an urgent order and so I am losing patience. Can
    you expedite the process and pls do share the details asap.
    Consider this a gentle reminder if you are on track already!
  </p>
  <p>- Maya</p>
  `
  }
];
