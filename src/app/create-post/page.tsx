import { CreatedPostUI } from "@/features/create-post";
import Main from "@/shared/ui/main";

const CreatePost = () => {
  return (
    <Main className="w-full flex justify-center items-center">
      <CreatedPostUI></CreatedPostUI>
    </Main>
  );
};

export default CreatePost;
