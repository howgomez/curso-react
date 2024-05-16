import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formValue, setFormValue] = useState({
    username: "Gustavo",
    email: "gustavo22@gmail.com",
  });
  const { username, email } = formValue;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(value);
  };

  useEffect(() => {
    console.log("Form value changed!");
  }, []);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Gustavo2" && <Message />}
    </>
  );
};
