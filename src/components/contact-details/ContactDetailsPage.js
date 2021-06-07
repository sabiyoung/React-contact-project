import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = ({ contact }) => {
  return (
    <Container>
      <ContactDetail className="shadow rounded">
        <ContactDetailsCard contact={contact} />
      </ContactDetail>
    </Container>
  );
};

export default ContactDetailsPage;
const ContactDetail = styled.div`
  width: 700px;
  margin: 7rem;
  padding: 3rem;
`;
