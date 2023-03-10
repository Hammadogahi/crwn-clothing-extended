import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SingUpContainer, ButtonsContainer } from "./sign-in-form.styles";

import {
  singInWithGooglePopup,
  //createUserDocumentFromAuth,
  signInUserAuthWithUserAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserAuthWithUserAndPassword(email, password);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };
  async function logGoogleUser() {
    await singInWithGooglePopup();
  }

  return (
    <SingUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          type="password"
          label="Password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SingUpContainer>
  );
};

export default SignInForm;
