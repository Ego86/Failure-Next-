import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/input/input";
import {  FC, memo } from "react";
interface IChatForm {
value: string;
handleSendMessage: (formData: React.FormEvent<HTMLFormElement>) => void;
setValue: (arg: string) => void;
}
const ChatForm: FC<IChatForm> = memo(({ value, handleSendMessage, setValue }) => {
  return (
    <form
      onSubmit={handleSendMessage}
      className="w-full flex "
    >
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button variant="containd">send</Button>
    </form>
  );
});

export default ChatForm;
