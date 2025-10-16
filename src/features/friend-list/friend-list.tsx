import Button from "@/shared/ui/button/Button";

const FriendsList = ({ friends }: { friends: [] }) => {
  return (

 <div className="h-full flex justify-start items-center">
     <div className="bg-[#6F4C3E] rounded-lg w-[250px] h-[300px] p-5 overflow-x-hidden overflow-y-auto mr-3">
       {friends.map(({ icon, name }) => (
         <Button variant="outline" key={name} className="flex mb-2 w-full">
           {icon}
           <p className="ml-2 break-all">{name}</p>
         </Button>
       ))}
     </div>
 </div> 
);
};

export default FriendsList;
