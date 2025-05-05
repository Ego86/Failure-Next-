import Post from "@/entities/post/ui/post";
import ProfileHeaderSection from "@/widgets/profileHeaderSection/ui/profileHeaderSection";


const Profile = () => {
  return (
    <main>
      <ProfileHeaderSection/>
      <div className="flex flex-wrap [&>*]:mr-6 [&>*]:mb-6">
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
};

export default Profile;
