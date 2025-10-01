import { Aside } from "../aside";
import TabBarMobile from "../tabBarMobile/tabBarMobile";

const SkeletonPage = () => {
  return (
    <>
      <Aside className="md:!flex !hidden" />
      <TabBarMobile className="md:hidden block" />
    </>
  );
};

export default SkeletonPage;
