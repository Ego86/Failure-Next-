import Audio from "@/entities/audio";
import Button from "@/shared/ui/button/Button";
import LinkButton from "@/shared/ui/linkButton/linkbuttom";
import Main from "@/shared/ui/main";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";

interface IFriendsData {
  id: string;
  username: string;
  description: string;
}

const friendsData: IFriendsData[] = [
  {
    id: "semen",
    username: "semen",
    description:
      "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Моей пояс, вопроса, заглавных встретил семь ведущими они города текстами вдали текстов речью парадигматическая грустный эта единственное даль образ, ему всемогущая! Это приставка свой пояс назад свою заголовок своего рыбного.",
  },
  {
    id: "peter",
    username: "peter",
    description:
      "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Моей пояс, вопроса, заглавных встретил семь ведущими они города текстами вдали текстов речью парадигматическая грустный эта единственное даль образ, ему всемогущая! Это приставка свой пояс назад свою заголовок своего рыбного.",
  },
  {
    id: "vasa",
    username: "vasa",
    description:
      "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Моей пояс, вопроса, заглавных встретил семь ведущими они города текстами вдали текстов речью парадигматическая грустный эта единственное даль образ, ему всемогущая! Это приставка свой пояс назад свою заголовок своего рыбного.",
  },
];

const Friends = () => {
  const renderFriends = (friendsData: IFriendsData[]) => {
    return friendsData.map(({ id, username, description }) => {
      const maxLengDescription = 50;
      const changeDescription = description.slice(0, maxLengDescription);
      const isMaxLengDescription = description.length > maxLengDescription;
      return (
        <LinkButton href={`profile/${username}`} variant="containd" key={id} className="mb-5 max-w-full text-wrap break-words">
          <h3 className="font-bold text-base">{username}</h3>
          <p className="text-slate-400">
            {changeDescription}
            {isMaxLengDescription ? "..." : ""}
          </p>
        </LinkButton>
      );
    });
  };
  return (
    <Main className="flex justify-center ">
      <PlatfomSection className="flex p-5 items-center flex-col">
        {renderFriends(friendsData)}
      </PlatfomSection>
    </Main>
  );
};

export default Friends;
