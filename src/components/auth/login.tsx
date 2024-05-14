import { useForm } from "react-hook-form";
import { Field } from "../common/fields";
import { Input } from "../common/input";
// import { Form } from "../common/form";
import { Button } from "../common/button";
import { Form } from "react-router-dom";
import { Auth } from "../../apis/Auth";


type Inputs = {
  username: string;
  password: string;
}

export async function action({ request, params }) {
 const formData = await request.formData();
 const auth = new Auth();
  auth.login(formData);
  return null;
}

export function Login() {

  const { register, handleSubmit, formState: { errors, isSubmitting } }
    = useForm<Inputs>();

  function login(data: Inputs): void {
    console.log(data);
  }

  const labelStyle =
    "flex flex-col text-xl font-semibold underline my-2 decoration-blue-200 decoration-4 ";
  return (
    // <Form onSubmit={handleSubmit(login)}>
    <Form id="login-form" role="auth" method="post">
      <Field
        label="Username"
        labelClass={labelStyle}
        error={errors.username?.message}
      >
        <Input
          {...register("username", {
            required: "Username is required.",
            minLength: {
              value: 1,
              message: "Password or Username is incorrect"
            },
          })}
          id="username"
          disabled={isSubmitting}
        />
      </Field>
      <Field
        label="Password"
        labelClass={labelStyle}
        error={errors.username?.message}
      >
        <Input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 1,
              message: "Password or Username is incorrect"
            },
          })}
          id="password"
          disabled={isSubmitting}
          type="password"
        />
      </Field>
      <div className="flex gap-10">
      <Button className="bg-red-300" type="reset">
        Reset
      </Button>
      <Button>
        Login
      </Button>

      </div>
    </Form>


  );
}
