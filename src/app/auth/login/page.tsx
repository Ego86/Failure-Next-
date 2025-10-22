"use server";

import Form from "@/shared/ui/form/ui/Form";
import Input from "@/shared/ui/input/input";
import Button from "@/shared/ui/button/Button";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { login } from "../api";
import Main from "@/shared/ui/main";
import { redirect } from "next/navigation";
import LinkButton from "@/shared/ui/linkButton/linkbuttom";

const Login = () => {
  return (
    <Main className="flex items-center justify-center">
      <PlatfomSection className="p-5 w-[30rem]">
        <h1 className="mb-5 text-2xl">Login</h1>
        <Form action={login} className="mb-5">
          <Input type="email" name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" />
          <Button className="w-full" variant="containd">
            Auth
          </Button>
        </Form>
        <LinkButton href="/auth/register" variant="containd">
          I don't have an account
        </LinkButton>
        <div className="mt-5">
          <Button className="mr-3" variant="containd">
            google
          </Button>
          <Button variant="containd">telegram</Button>
        </div>
      </PlatfomSection>
    </Main>
  );
};
export default Login;
