import React from "react";
import "../App.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User, registerUser } from "./auth-services";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: number;
  country: string;
  domainOfWork: string;
}

function SignUp() {
  const { handleSubmit, control, formState } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const user: User = {
      id: 0,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      gender: data.gender,
      age: data.age,
      country: data.country,
        id: 0,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        gender: data.gender,
        age: data.age,
        country: data.country,
        domainOfWork: data.domainOfWork,
    };
    const isRegisterSuccess = registerUser(user);
    if (isRegisterSuccess) {
      toast.success("Signed up successfully");
      navigate("/signIn");
    } else {
      toast.error("User with this email already exist");
    }
  };

  const validationRules = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: {
      required: "Email is required",
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: { required: "Password is required" },
    confirmPassword: {
      required: "Please confirm your password",
      validate: (value: string, values: { password: string }) =>
        value === values.password || "Passwords do not match",
    },
    gender: { required: "Please select a gender" },
    age: {
      required: "Age is required",
      min: {
        value: 18,
        message: "You must be at least 18 years old.",
      },
    },
    country: { required: "Country is required" },
    domainOfWork: { required: "Domain of Work is required" },
  };

  return (
    <div className="form-container">
      <form className="centred-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={validationRules.firstName}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.firstName && (
            <p className="error">{formState.errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={validationRules.lastName}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.lastName && (
            <p className="error">{formState.errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Country</label>
          // ...
          <Controller
            name="country"
            control={control}
            defaultValue=""
            rules={validationRules.country}
            render={({ field }) => (
              <div className="select-container">
                <select {...field} className="custom-select">
                  <option value="">Select</option>
                  <option value="albania">Albania</option>
                  <option value="andorra">Andorra</option>
                  <option value="austria">Austria</option>
                  <option value="belarus">Belarus</option>
                  <option value="belgium">Belgium</option>
                  <option value="bosnia">Bosnia and Herzegovina</option>
                  <option value="bulgaria">Bulgaria</option>
                  <option value="croatia">Croatia</option>
                  <option value="cyprus">Cyprus</option>
                  <option value="czech">Czech Republic</option>
                  <option value="denmark">Denmark</option>
                  <option value="estonia">Estonia</option>
                  <option value="finland">Finland</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="greece">Greece</option>
                  <option value="hungary">Hungary</option>
                  <option value="iceland">Iceland</option>
                  <option value="ireland">Ireland</option>
                  <option value="italy">Italy</option>
                  <option value="kosovo">Kosovo</option>
                  <option value="latvia">Latvia</option>
                  <option value="liechtenstein">Liechtenstein</option>
                  <option value="lithuania">Lithuania</option>
                  <option value="luxembourg">Luxembourg</option>
                  <option value="malta">Malta</option>
                  <option value="moldova">Moldova</option>
                  <option value="monaco">Monaco</option>
                  <option value="montenegro">Montenegro</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="north-macedonia">North Macedonia</option>
                  <option value="norway">Norway</option>
                  <option value="poland">Poland</option>
                  <option value="portugal">Portugal</option>
                  <option value="romania">Romania</option>
                  <option value="russia">Russia</option>
                  <option value="san-marino">San Marino</option>
                  <option value="serbia">Serbia</option>
                  <option value="slovakia">Slovakia</option>
                  <option value="slovenia">Slovenia</option>
                  <option value="spain">Spain</option>
                  <option value="sweden">Sweden</option>
                  <option value="switzerland">Switzerland</option>
                  <option value="ukraine">Ukraine</option>
                  <option value="united-kingdom">United Kingdom</option>
                  <option value="vatican-city">Vatican City</option>
                </select>
                {formState.errors.country && (
                  <p className="error">{formState.errors.country.message}</p>
                )}
              </div>
            )}
          />
          // ...
            <label>Country</label>

<Controller
  name="country"
  control={control}
  defaultValue=""
  rules={validationRules.country}
  render={({ field }) => (
    <div className="select-container">
      <select {...field} className="custom-select-country">
        <option value="">Select</option>
        <option value="albania">Albania</option>
        <option value="andorra">Andorra</option>
        <option value="austria">Austria</option>
        <option value="belarus">Belarus</option>
        <option value="belgium">Belgium</option>
        <option value="bosnia">Bosnia and Herzegovina</option>
        <option value="bulgaria">Bulgaria</option>
        <option value="croatia">Croatia</option>
        <option value="cyprus">Cyprus</option>
        <option value="czech">Czech Republic</option>  
        <option value="denmark">Denmark</option>
        <option value="estonia">Estonia</option>
        <option value="finland">Finland</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
        <option value="greece">Greece</option>
        <option value="hungary">Hungary</option>
        <option value="iceland">Iceland</option>
        <option value="ireland">Ireland</option>
        <option value="italy">Italy</option>
        <option value="kosovo">Kosovo</option>
        <option value="latvia">Latvia</option>
        <option value="liechtenstein">Liechtenstein</option>
        <option value="lithuania">Lithuania</option>
        <option value="luxembourg">Luxembourg</option>
        <option value="malta">Malta</option>
        <option value="moldova">Moldova</option>
        <option value="monaco">Monaco</option>
        <option value="montenegro">Montenegro</option>
        <option value="netherlands">Netherlands</option>
        <option value="north-macedonia">North Macedonia</option>
        <option value="norway">Norway</option>
        <option value="poland">Poland</option>
        <option value="portugal">Portugal</option>
        <option value="romania">Romania</option>
        <option value="russia">Russia</option>
        <option value="san-marino">San Marino</option>
        <option value="serbia">Serbia</option>
        <option value="slovakia">Slovakia</option>
        <option value="slovenia">Slovenia</option>
        <option value="spain">Spain</option>
        <option value="sweden">Sweden</option>
        <option value="switzerland">Switzerland</option>
        <option value="ukraine">Ukraine</option>
        <option value="united-kingdom">United Kingdom</option>
        <option value="vatican-city">Vatican City</option>
      </select>
      {formState.errors.country && (
        <p className="error">{formState.errors.country.message}</p>
      )}
    </div>
  )}
/>

        </div>

        <div>
          <label>Domain of Work</label>
          <Controller
            name="domainOfWork"
            control={control}
            defaultValue=""
            rules={validationRules.domainOfWork}
            render={({ field }) => (
              <div className="select-container">
                <select {...field} className="custom-select">
                  <option value="">Select</option>
                  <option value="it">Information Technology (IT)</option>
                  <option value="medicine">Healthcare and Medicine</option>
                  <option value="economy">Business and Economy</option>
                  <option value="education">Education</option>
                  <option value="engineering">Engineering</option>
                  <option value="science">Science</option>
                  <option value="arts">Arts and Entertainment</option>
                  <option value="social-sciences">Social Sciences</option>
                  <option value="law">Law and Legal Services</option>
                  <option value="agriculture">Agriculture</option>
            <div className="select-container">
                <select {...field} className="custom-select-domain">
                <option value="">Select</option>
                <option value="it">Information Technology (IT)</option>
                <option value="medicine">Healthcare and Medicine</option>
                <option value="economy">Business and Economy</option>
                <option value="education">Education</option>
                <option value="engineering">Engineering</option>
                <option value="science">Science</option>
                <option value="arts">Arts and Entertainment</option>
                <option value="social-sciences">Social Sciences</option>
                <option value="law">Law and Legal Services</option>
                <option value="agriculture">Agriculture</option>
                </select>
                {formState.errors.domainOfWork && (
                  <p className="error">
                    {formState.errors.domainOfWork.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={validationRules.email}
            render={({ field }) => <input {...field} />}
          />
          {formState.errors.email && (
            <p className="error">{formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationRules.password}
            render={({ field }) => <input type="password" {...field} />}
          />
          {formState.errors.password && (
            <p className="error">{formState.errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={validationRules.confirmPassword}
            render={({ field }) => <input type="password" {...field} />}
          />
          {formState.errors.confirmPassword && (
            <p className="error">{formState.errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex-container">
          <div>
            <label>Gender</label>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={validationRules.gender}
              render={({ field }) => (
                <div className="select-container">
                  <select {...field} className="custom-select">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {formState.errors.gender && (
                    <p className="error">{formState.errors.gender.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Age</label>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              rules={validationRules.age}
              render={({ field }) => (
                <div>
                  <input type="number" {...field} />
                  {formState.errors.age && (
                    <p className="error">{formState.errors.age.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
