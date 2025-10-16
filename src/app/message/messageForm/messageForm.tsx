import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/input/input";

const MessageForm = ({ value, handleSendMessage, setValue }) => {
  return (
    <form
      onSubmit={handleSendMessage}
      className="w-full flex "
    >
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button variant="containd">send</Button>
    </form>
  );
};

export default MessageForm;
