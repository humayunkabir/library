import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonLogin = () => (
  <Button
    tag={Link}
    color="primary"
    size="sm"
    className="mt-3 "
    to="/auth/login"
  >
    <FontAwesomeIcon
      icon={faChevronLeft}
      transform="shrink-4 down-1"
      className="mr-1"
    />
    Return to login
  </Button>
);

export default ButtonLogin;
