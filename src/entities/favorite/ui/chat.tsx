import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { FC } from "react";
import { IChat } from "../";

const FavoriteChat: FC<IChat> = ({ name, lastMessage, className }) => {
  return (
    <PlatfomSection
      className={`${className} max-w-[300px] flex-col w-full min-w-[150px]  h-2/4 flex px-4 py-3`}
    >
      <h2 className="text-2xl">{name}</h2>
      <p className="text-slate-500 break-all">{lastMessage}</p>
    </PlatfomSection>
  );
};

export default FavoriteChat;
