import Post from "@/entities/post/ui/post";
import Main from "@/shared/ui/main";
import ProfileHeaderSection from "@/widgets/profileHeaderSection/ui/profileHeaderSection";


const Profile = () => {
  return (
    <Main>
      <ProfileHeaderSection/>
      <div className="flex flex-wrap [&>*]:mr-6 [&>*]:mb-6">
        <Post />
        <Post />
        <Post />
      </div>
    </Main>
  );
};

export default Profile;
