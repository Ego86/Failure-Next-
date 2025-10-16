import Post from "@/entities/post/ui/post";
import LinkButton from "@/shared/ui/linkButton/linkbuttom";
import Main from "@/shared/ui/main";
import ProfileHeaderSection from "@/widgets/profileHeaderSection/ui/profileHeaderSection";


const Profile = () => {
  return (
    <Main>
      <ProfileHeaderSection/>
      <div className="flex justify-center items-center w-full h-max mb-7">
        <LinkButton variant="containd" href="/create-post">Create Post</LinkButton>
      </div>
      <div className="flex flex-wrap [&>*]:mr-6 [&>*]:mb-6">
        <Post />
        <Post />
        <Post />
      </div>
    </Main>
  );
};

export default Profile;
