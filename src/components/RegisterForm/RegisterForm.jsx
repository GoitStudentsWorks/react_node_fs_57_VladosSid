import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authOperations } from "../../redux/users";
import { 
    FiUser, 
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle,
    List,
    ListItem,
    Label,
    Input,
    Button,
    Redirect
} from "./RegisterForm.styled";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'username':
                return setUsername(value);
            case 'email':
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;
        }
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const userData = { username, email, password };
        dispatch(authOperations.register(userData));
        reset();
    }

    const reset = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Registration</FormTitle>
                <List>
                    {/* username */}
                    <ListItem>
                        <Label
                            htmlFor="usernameInput"
                        >
                            <FiUser />
                        </Label>
                        <Input 
                            type="text"
                            name="username"
                            placeholder="Name"
                            id="usernameInput"
                            required
                            value={username}
                            onChange={handleChange}
                        />
                    </ListItem>
                    {/* email */}
                    <ListItem>
                        <Label
                            htmlFor="emailInput"
                        >
                            <FiMail />
                        </Label>
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="emailInput"
                            required
                            value={email}
                            onChange={handleChange}
                        />
                    </ListItem>
                    {/* password */}
                    <ListItem>
                        <Label
                            htmlFor="passwordInput"
                        >
                            <FiLock />
                        </Label>
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="passwordInput"
                            required
                            value={password}
                            onChange={handleChange}
                        />
                    </ListItem>
                </List>
                <Button type='submit'>Sign Up</Button>
            </Form>
            <Link to={"/login"}>
                <Redirect>Sign In</Redirect>
            </Link>
        </Container>
    )
}

export default RegisterForm;