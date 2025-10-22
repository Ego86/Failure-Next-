import Button from "@/shared/ui/button/Button"
import Form from "@/shared/ui/form/ui/Form"
import Input from "@/shared/ui/input/input"
import Main from "@/shared/ui/main"
import PlatformSection from "@/shared/ui/platformSection/UI/platfomSection"
import { register } from "../api"
import LinkButton from "@/shared/ui/linkButton/linkbuttom"

const Register = () => {
return (
   
<Main className="flex justify-center items-center w-full" >
        <PlatformSection className="p-7 w-[30rem]">
            <h1 className="mb-5 text-2xl">Register</h1>
            <Form className="mb-5" action={register}>
                <Input name="name" placeholder="Name"/>
                <Input type="email" name="email" placeholder="Email"/>
                <Input name="password"placeholder="Password"/>
                <Button variant="containd" className="w-full">Register</Button>
            </Form >
              <LinkButton  href="/auth/login" variant="containd">I have an account</LinkButton>
              <div className="mt-5">
                <Button className="mr-3" variant="containd">google</Button>
                <Button variant="containd">telegram</Button>
              </div>
        </PlatformSection>
</Main>

)
}

export default Register