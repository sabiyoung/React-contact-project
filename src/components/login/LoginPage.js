import  styled  from "styled-components";
import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <Wrapper>
            <FormWrapper>
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
            </FormWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: lightgray;
height: 500px;
margin-top: 200px;
padding-top:5rem;
`;
const FormWrapper = styled.div`
width: 550px;
background-color: #f5f5f5;
padding: 40px 40px 40px 110px;

`;

export default LoginPage;