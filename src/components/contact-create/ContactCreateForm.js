import React, { useState} from "react";
import  styled  from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const ContactCreateForm = () => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[phonenumber, setPhoneNumber] = useState("");
    const[email, setEmail] = useState("");
    const[address, setAdress] = useState("");
    const[profilepic, setProfilePic] = useState("");
  
    function handleSubmission(e) {
        e.preventDefault();
         console.log("Submitted:", e)
    }


        return (
            <Form> 
    
            <form onSubmit={ handleSubmission}>
                <ContactForm>
                <div >
                    < AccountCircleIcon className="profilePic"/>
                </div>
                <ContactInput>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phonenumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={e => setAdress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={profilepic}
                            onChange={e => setProfilePic(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Contact</button>
                    </div>
                </ContactInput>
                </ContactForm>
            </form>
            </Form>
        )
    }

export default ContactCreateForm;

const Form = styled.div`

`;
const ContactForm = styled.div`
display: flex;
.profilePic{
    height: 120px;
   width: 300px;
   padding-left:60px;
   padding-top:20px;
   color: gray;
}
`;
const ContactInput = styled.div`
margin-left:-60px;
input {
    padding-top: 25px;
    width: 300px;
    border: none;
    border-bottom:1px solid #333;
    background-color: lightgray;
    font-size:20px;
    color: #111;

}
button {
    text-transform:uppercase;
    background-color: #aaa;
    padding: 15px;
    margin-top: 20px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  
}
`;