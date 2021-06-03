import ContactCard from "./ContactCard"
import styled from "styled-components";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const ContactList = ({ contacts=[] }) => {
    return (
   <MainContainer> 
     <Title className="title">
          <RadioButtonUncheckedIcon className="radio"/> 
       <p>ContactList</p>
       </Title>
      
        <ContactListContainer className="contactListContainer">
        
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </ContactListContainer>
        </MainContainer>
    )
}

export default ContactList;

const ContactListContainer = styled.div`
background-color: lightgray;
border: solid 1px gray;
height: 670px;
width: 50%;

margin-left:500px;
padding:40px 0 40px 0;


`;
const Title = styled.div`
display: flex;
align-items: center;
/* margin-top: 100px; */
margin-left:500px;
p {
    font-size: 35px;
    padding-left:7px;
}
.radio {
    height: 18px;
}
`;
const MainContainer = styled.div`

`;