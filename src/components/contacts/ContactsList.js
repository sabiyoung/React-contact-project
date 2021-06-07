import ContactCard from "./ContactCard";
import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Container from 'react-bootstrap/Container'

const ContactList = ({ contacts = [] }) => {
  return (
    <Container>
  
      <Title className="title">
        <RadioButtonUncheckedIcon className="radio" />
        <p>ContactList</p>
      </Title>

      <ContactListContainer className="contactListContainer">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phoneNumber={contact.phoneNumber}
            profilePic={contact.profilePic}
          />
        ))}
      </ContactListContainer>
    </Container>
  );
};

export default ContactList;

const ContactListContainer = styled.div`
  background-color: lightgray;
  border: solid 1px gray;
  height: 670px;
  width: 65%;

  margin-left: 300px;
  padding: 40px 0 40px 0;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 500px;
  p {
    font-size: 35px;
    padding-left: 7px;
  }
  .radio {
    height: 18px;
  }
`;

