import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
const RegisterPage = (props) => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <RegisterForm />
          <div>
            <p>
              Already have an account? <a href="/login">Login</a>.
            </p>
          </div>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  height: 500px;
  margin-top: 200px;
  padding-top: 5rem;
`;
const FormWrapper = styled.div`
  width: 550px;
  background-color: #f5f5f5;
  padding: 40px 40px 40px 110px;
`;
