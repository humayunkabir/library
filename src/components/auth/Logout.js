import React from "react";
import ButtonLogin from "./ButtonLogin";

const Logout = () => {
  return (
    <div class="card">
      <div class="fs--1 font-weight-normal p-5 card-body">
        <div class="text-center">
          <img
            class="d-block mx-auto mb-4"
            src="/static/media/rocket.5856fd83.png"
            alt="shield"
            width="70"
          />
          <h4>See you again!</h4>
          <p>
            Thanks for using LMS. You are <br class="d-none d-sm-block" />
            now successfully signed out.
          </p>
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
};

export default Logout;
