import Button from "@/shared/ui/button/Button";
import ImageComponent from "@/shared/ui/image/image";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import Link from "next/link";

const userList = [
  { username: "Sema", id: "semaPetki", avatar: "/logo.svg" },
  { username: "vasa", id: "vasaPetki", avatar: "/logo.svg" },
  { username: "anton", id: "antonPetki", avatar: "/logo.svg" },
  { username: "yorik", id: "yorikPetki", avatar: "/logo.svg" },
] as const;

const Chats = () => {
  return (
    <PlatfomSection className="max-w-[1000px] h-[80vh] px-4 py-3 overflow-auto">
      {userList.map(({ username, avatar, id }) => {
        return (
          <Link href={`/chats/message/${id}`}>
            <Button className="flex w-full mb-3" key={id}>
              <ImageComponent src={avatar} width={50} height={50} />
              <p>{username}</p>
            </Button>
          </Link>
        );
      })}
    </PlatfomSection>
  );
};

export default Chats;
