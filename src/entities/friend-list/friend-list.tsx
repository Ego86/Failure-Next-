import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";

const FriendsList = ({ friends }: { friends: [] }) => {
  return (
    <PlatfomSection className="max-w-32 h-52 px-2 py-3 overflow-auto mr-3">
      {friends.map(({ icon, name }) => (
        <div key={name} className="flex m-2">
          {icon}
          <p className="ml-2">{name}</p>
        </div>
      ))}
    </PlatfomSection>
  );
};

export default FriendsList;
