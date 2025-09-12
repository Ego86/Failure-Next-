import Post from "@/entities/post/ui/post";
import { sanchez } from "@/shared/fonts/fonts";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import Image from "next/image";
import styles from "./home.module.scss";
// import Link from "next/link";
import dynamic from "next/dynamic";
import Main from "@/shared/ui/main";

const Weather = dynamic(() => import("@/entities/weather"), {
  ssr: true,
});
const Audio = dynamic(() => import("@/entities/audio/index"), {
  ssr: true
}) 
const Home = () => {
  return (
    <Main style={sanchez.style} className={styles.main}>
      <div className="flex flex-wrap w-full max-w-max">
        <PlatfomSection className=" h-[550px] max-h-max">
          <Image
          className="isolate w-full h-auto" src="/not-found.png" width={1400} height={200} alt=""></Image>
        </PlatfomSection>
        <div className="flex  ">
          <Post className="mr-5"></Post>
        </div>
      </div>
      <div className="flex flex-col">
          <Audio className="mb-5"></Audio>
        {/* <PlatfomSection className="h-max w-max mb-5">
          <Image
            src="/not-found-mobile.png"
            className="w-[300px]"
            width={500}
            height={500}
            alt=""
          ></Image>
        </PlatfomSection> */}
        <Weather></Weather>
      </div>
    </Main>
  );
};

export default Home;
