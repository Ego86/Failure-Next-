"use server"

import Form from "@/shared/ui/form/ui/Form";
import styles from "./ui/login.module.scss";
import Input from "@/shared/ui/input/input";
import Button from "@/shared/ui/button/Button";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import actionSendUser from "./actionSendUser";


 const Login = () => {

  return (
    <main className={styles.main}>
      <PlatfomSection>
        <h1>Login</h1>
        <Form
          action={actionSendUser}
        >
          <Input name="email" placeholder="Email"/>
          <Input name="password" placeholder="Password"/>
          <Button variant="containd">Auth</Button>
        </Form>
      </PlatfomSection>
    </main>
  );
};
export default Login