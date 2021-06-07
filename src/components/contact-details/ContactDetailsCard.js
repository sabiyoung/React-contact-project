import Image from "react-bootstrap/Image";
import styled from "styled-components";
const ContactDetailsCard = ({ contact }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image
          className="imgOne"
          src={contact?.profilePic}
          alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}
          roundedCircle
          fluid
        />
      </ImgWrapper>
      <ContactDetail>
        <p>
          {contact?.firstName} {contact?.lastName}
        </p>
        <dl>
          <dt>Phone Number</dt>
          <dd>{contact?.phoneNumber}</dd>

          <dt>Email</dt>
          <dd>{contact?.email}</dd>

          <dt>Address</dt>
          <dd>{contact?.address}</dd>
        </dl>
      </ContactDetail>
    </Wrapper>
  );
};

export default ContactDetailsCard;
const Wrapper = styled.div`
  padding-left: 10rem;
`;
const ImgWrapper = styled.div`
  padding-left: 4rem;
  .imgOne {
    height: 100px;
  }
`;
const ContactDetail = styled.div`
  p {
    font-size: 1.5rem;
    padding-left: 4rem;
    font-weight: 500;
    padding-bottom: 10px;
  }
  dd {
    margin-left: 3rem;
  }
`;
