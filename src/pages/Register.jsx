import styles from "./Register.module.css";
import Page from "../components/Page";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import Subtitle from "../components/Subtitle";
import Features from "../components/Features";
import Card from "../components/Card";
import Logo from "../logo.svg";
import Input from "../components/Input";
import Row from "../components/Row";
import Button from "../components/Button";
import Login from "../components/Login";
import Or from "../components/Or";

const Register = () => {
  // Event Handlers
  let firstName;
  let lastName;
  let email;
  let username;
  let password;
  const setFirstName = (event) => {
    firstName = event.target.value;
  };
  const setLastName = (event) => {
    lastName = event.target.value;
  };
  const setEmail = (event) => {
    email = event.target.value;
  };
  const setUsername = (event) => {
    username = event.target.value;
  };
  const setPassword = (event) => {
    password = event.target.value;
  };
  const getInfo = () => {
    console.log(`First Name: ${firstName} `);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <Page direction="row">
      {/* Left-Section */}
      <Section>
        <Tagline>Plan your Daily Life</Tagline>
        <Subtitle>
          Join over 30,000 people planning and tracking their life with Lifely
        </Subtitle>
        <Features>Improved organization and time management</Features>
        <Features>Enhanced collaboration</Features>
        <Features>Flexibility and customization</Features>
      </Section>
      {/* Right-Section */}
      <Section>
        <Card>
          <img className={styles.logo} src={Logo} alt="Logo" />
          <Subtitle color="green">Get Started with Lifely</Subtitle>
          <Row>
            <Input placeholder="First Name" eventHandler={setFirstName}></Input>
            <Input placeholder="Last Name" eventHandler={setLastName}></Input>
          </Row>
          <Input placeholder="Email" eventHandler={setEmail}></Input>
          <Input placeholder="Username" eventHandler={setUsername}></Input>
          <Input
            placeholder="Password"
            type="password"
            eventHandler={setPassword}
          ></Input>
          <Button variant="contained" eventHandler={getInfo}>
            Register
          </Button>
          <Or />
          <Row>
            <Button variant="outlined">Google</Button>
            <Button variant="outlined">Facebook</Button>
            <Button variant="outlined">Twitter</Button>
          </Row>
          <Login>
            Already have an account? <span className={styles.login}>Login</span>
          </Login>
        </Card>
      </Section>
    </Page>
  );
};
export default Register;
