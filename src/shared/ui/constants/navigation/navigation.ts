import { LogOut, MessageCircleCode, User, Users } from "lucide-react";
import { IListComponents} from "./interface";

export const listComponents:IListComponents[] = [
    { url: "/profile", title: "profile", Icon: User },
    { url: "/message", title: "message", Icon: MessageCircleCode },
    { url: "/frinds", title: "friends", Icon: Users },
    { url: "/auth/login", title: "exit", Icon: LogOut },
  ] as const