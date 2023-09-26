import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

import FormContainer from "../../components/FormContainer";

import { authSlice, useSigninMutation } from "../../slices/auth/";

import { FaUser, FaLock } from "react-icons/fa";

const { setCredentials } = authSlice.actions;
const initialValues = { username: "", password: "" };

const SignIn = () => {
  const { user } = useSelector((state) => state.auth); // get value of state
  const [signin, { isLoading }] = useSigninMutation();

  const [values, setValues] = useState(initialValues);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signin(values).unwrap();

      if (res?.status && !res.status) {
        toast.error(res.message);

        return;
      }

      dispatch(setCredentials({ ...res.data }));

      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.data?.message || err.error);

      if (!err?.originalStatus) {
        toast.error("No server response.");
      } else if (err.originalStatus === 400) {
        toast.error("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Login failed.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    if (user) navigate("/dashboard");

    return () => {};
  }, [navigate, user]);

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p className="text-medium-emphasis">Sign In to your account</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <FaUser />
            </InputGroup.Text>
            <Form.Control
              name="username"
              placeholder="Username"
              autoComplete="username"
              value={values.username}
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
          <InputGroup className="mb-4">
            <InputGroup.Text>
              <FaLock />
            </InputGroup.Text>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              value={values.password}
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
          <Row>
            <Col xs={6}>
              <Button type="submit" color="primary" className="px-4">
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </div>
  );
};

export default SignIn;
