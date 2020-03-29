import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Form,
  CardFooter,
  Button,
  Input
} from "reactstrap";
import ReactAxiosRequest from "./common/ReactAxiosRequest";
import { useAppDispatch } from "../providers/AppProvider";
import { actionType } from "../reducers/appReducer";

const Settings = ({ user, history }) => {
  const [name, setName] = useState(user.name);
  const [headline, setHeadline] = useState(user.headline);
  const [username, setUsername] = useState(user.username);
  const [loaded, setLoaded] = useState(true);
  const dispatch = useAppDispatch();

  const updateProfile = async requestCallback => {
    setLoaded(false);
    const response = await requestCallback({ name, headline, username });
    setLoaded(!response.loading);

    dispatch({
      type: actionType.UPDATE_USER,
      payload: response.data
    });

    history.push("/profile");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <ReactAxiosRequest method="patch" route="user/profile">
            {({ requestCallback }) => (
              <Card
                tag={Form}
                onSubmit={e => {
                  e.preventDefault();
                  updateProfile(requestCallback);
                }}
                className="my-5"
              >
                <CardHeader>Settings</CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="headline">Headline</Label>
                    <Input
                      id="headline"
                      value={headline}
                      onChange={({ target }) => setHeadline(target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Username</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={({ target }) => setUsername(target.value)}
                    />
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button color="primary" block type="submit">
                    {loaded ? "Save changes" : "Saving..."}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </ReactAxiosRequest>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
