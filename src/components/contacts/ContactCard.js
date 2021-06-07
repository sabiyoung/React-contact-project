import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <CardContainer className="wrapper">
      <CardContent className="cardContent">
        <div className="avatar">
          <ImgAvatar>
            <img
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
            />
          </ImgAvatar>
        </div>
        <ContactInfo>
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
        </ContactInfo>
        <NewButton>
          <CloseIcon className="button" />
        </NewButton>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  z-index: 1;
  background-color: white;
  height: 130px;
  width: 700px;
  box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
  margin-left: 60px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;

  img {
    width: 100%;
  }
  .avatar {
    border-right: 1px solid lightgray;
    padding-right: 20px;
  }
`;
const ImgAvatar = styled(Avatar)`
  min-width: 120px;
  min-height: 120px;
  margin-top: -35px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const ContactInfo = styled.div`
  margin-right: 16rem;
`;
const NewButton = styled.div`
  .button {
    color: white;
    background-color: lightgray;
    border-radius: 50%;
    border: none;
    padding: 2px;
  }
`;
export default ContactCard;
