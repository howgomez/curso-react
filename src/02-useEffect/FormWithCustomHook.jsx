import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: "",
    password: "",
    email: "",
  });

 console.log(formState);
  return (
    <>
      <h1>Custom hook: Formulario</h1>
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
      <input
        type="password"
        className="form-control mt-4"
        placeholder="Contraseña...."
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        {" "}
        Reset{" "}
      </button>
    </>
  );
};
