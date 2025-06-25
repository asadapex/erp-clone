import { Logo } from "../../assets/icons";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center gap-[20px]">
          <Logo />
          <h1 className="text-3xl">Admin paneli</h1>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
