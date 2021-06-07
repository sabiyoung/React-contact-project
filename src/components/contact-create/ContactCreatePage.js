import ContactCreateForm from "./ContactCreateForm";
import  styled  from "styled-components";
import Container from 'react-bootstrap/Container';
const ContactCreatePage = () => {
    return (
        <Container>
        <Wrapper>
            <FormWrapper>
            <ContactCreateForm />
            </FormWrapper>
        </Wrapper>
        </Container>
    )
}

export default ContactCreatePage;

const Wrapper = styled.div`
flex-direction: column;
align-items: center;
background-color: lightgray;
height: 600px;
width: 800px;
margin-top: 120px;
padding-top:5rem;
margin-left:200px;
`;
const FormWrapper = styled.div`
padding-top:70px ;

`;