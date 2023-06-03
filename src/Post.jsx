/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
export default function Post(props) {
  const [on, setOn] = React.useState(0);
  function ReadMore() {
    if (on === 0) {
      setOn(1);
      return;
    } else {
      setOn(0);
      return;
    }
  }

  let word = "primary";
  switch (props.category) {
    case "art":
      word = "primary";
      break;
    case "books":
      word = "secondary";
      break;
    case "games":
      word = "success";
      break;
  }

  return (
    <div>
      <h3>
        {props.head}
        <Badge bg={word}>{props.category}</Badge>
      </h3>
      {on == 0 ? (
        <h6>{props.body.substring(0, 65).concat("...")}</h6>
      ) : (
        <h6>{props.body}</h6>
      )}
      <Button
        onClick={() => {
          ReadMore();
        }}
        variant={on === 0 ? "outline-primary" : "primary"}
      >
        {on === 0 ? `Read More` : `Read Less`}
      </Button>
    </div>
  );
}
