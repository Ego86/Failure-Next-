import Post from "@/entities/post/ui/post";
import LinkButton from "@/shared/ui/linkButton/linkbuttom";
import Main from "@/shared/ui/main";
import ProfileHeaderSection from "@/widgets/profileHeaderSection/ui/profileHeaderSection";

const Username = async ({ params }) => {
  const {username} = await params;
  return (
    <Main>
      <ProfileHeaderSection isMyProfile={false} username={username}/>
      <div className="flex flex-wrap [&>*]:mr-6 [&>*]:mb-6">
        <Post />
        <Post />
        <Post />
      </div>
    </Main>
  );
};

export default Username;
