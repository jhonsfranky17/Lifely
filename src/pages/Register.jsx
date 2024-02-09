import styles from "./Register.module.css"
import Page from "../components/Page"
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import Subtitle from "../components/Subtitle";
import Features from "../components/Features";
import Card from "../components/Card";
import Logo from "../logo.svg"
import Input from "../components/Input";
import Row from "../components/Row"
import Button from "../components/Button";
import Login from "../components/Login";
import Or from "../components/Or";

const Register = () => {
return <Page direction="row">
    {/* Left-Section */}
    <Section>
        <Tagline>Plan your Daily Life</Tagline>
        <Subtitle>Join over 30,000 people planning and tracking their life with Lifely</Subtitle>
        <Features>Improved organization and time management</Features>
        <Features>Enhanced collaboration</Features>
        <Features>Flexibility and customization</Features>
    </Section>
    {/* Right-Section */}
    <Section>
        <Card>
            <img src={Logo} alt="Logo" />
            <Subtitle color="green">Get Started with Lifely</Subtitle>
            <Row>
                <Input placeholder="First Name"></Input>
                <Input placeholder="Last Name"></Input>
            </Row>
            <Input placeholder="Email"></Input>
            <Input placeholder="Username"></Input>
            <Input placeholder="Password" type="password"></Input>
            <Button variant="contained">Register</Button>
            <Or/>
            <Row>
                <Button variant="outlined">Google</Button>
                <Button variant="outlined">Facebook</Button>
                <Button variant="outlined">Twitter</Button>
            </Row>
            <Login>Already have an account? <span>Login</span></Login>
        </Card>
    </Section>
    </Page>

};
export default Register;