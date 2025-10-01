import { FC } from "react";
import FavoriteTodo from "./ui/todo";
import FavoriteChat from "./ui/chat";

export interface IChat {
  className?: string;
  name?: string;
  lastMessage?: string;
}

export interface ITodo {
  className?: string;
  title?: string;
  description?: string;
  isChecked?: boolean;
}

type FavoriteProps = {
  chat?: IChat;
  todo?: ITodo;
};

const Favorite: FC<FavoriteProps> = (props) => {
  const { chat, todo } = props;

  const renderChat = () => {
    if (chat && chat.name !== null) {
      return (
        <FavoriteChat
          name={chat.name}
          lastMessage={chat.lastMessage}
          className="mb-4"
        />
      );
    }
    return (
      <FavoriteChat
        name="Not found you favorite chat"
        lastMessage=""
        className="mb-4"
      />
    );
  };

  const renderTodo = () => {
    if (todo && todo.title !== null) {
      return (
        <FavoriteTodo
          title={todo.title}
          description={todo.description}
          className="mb-4"
        />
      );
    }
    return (
      <FavoriteTodo title="Not found you favorite todo" className="mb-4" />
    );
  };

  return (
    <div  >
      {renderChat()}
      {renderTodo()}
    </div>
  );
};

export default Favorite;
