import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { LoginService } from ".";
import { useForm } from "react-hook-form";
export function SignIn() {
  const loginService = LoginService();

  const { data, onSubmit, handleChange } = loginService;

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={data.email}
              onChange={handleChange}
              {...watch("email", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
            {errors.email && (
              <span
                className="text-red-500 text-xs italic absolute
                -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={data.password}
              onChange={handleChange}
              {...watch("password", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
            {errors.password && (
              <span
                className="text-red-500 text-xs italic absolute -mt-6"
                role="alert"
              >
                This field is required
              </span>
            )}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            color="lightBlue"
            ripple="light"
            className="mt-6"
            fullWidth
          >
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium"
                >
                  Subscribe me to newsletter
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">Forgot Password</a>
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?
            <Link to={"/auth/sign-up"} className="text-gray-900 ml-1">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-full w-3/4 object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default SignIn;
