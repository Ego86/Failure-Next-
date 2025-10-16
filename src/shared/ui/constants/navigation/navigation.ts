import { ListTodo, MessageCircleCode, Settings, User, Users } from "lucide-react";
import { IListComponents} from "./interface";

export const listComponents:IListComponents[] = [
    { url: "/profile", title: "profile", Icon: User },
    { url: "/message", title: "message", Icon: MessageCircleCode },
    { url: "/friends", title: "friends", Icon: Users },
    { url: "/todo-list", title: "todo", Icon: ListTodo },
    { url: "/settings", title: "setting", Icon: Settings },
  ] as const