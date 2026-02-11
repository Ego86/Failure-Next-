"use server"

import Post from "@/entities/post/ui/post";
import { sanchez } from "@/shared/fonts/fonts";
import PlatformSection from "@/shared/ui/platformSection/UI/platfomSection";
import Image from "next/image";
import styles from "./home.module.scss";
import dynamic from "next/dynamic";
import Main from "@/shared/ui/main";
import Audio from "@/entities/audio";
import Link from "next/link";
import RoundVideo from "@/widgets/roundVideo";
import SimpleRoundVideo from "@/widgets/roundVideo";


const Favorite = dynamic(() => import("@/entities/favorite"));

const Weather = dynamic(() => import("@/entities/weather"), {
  ssr: true,
});

const lastMessage = `Hello! what u doing? fsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`;
const Home = () => {
  return (
    <>
      <Main style={sanchez.style} className={styles.main}>
        <div className="flex flex-wrap w-full max-w-max">
          <PlatformSection className=" h-[530px] max-h-max mb-5">
            <Image
              className="isolate w-full h-auto"
              src="/not-found.png"
              width={1400}
              height={200}
              alt=""
            ></Image>
          </PlatformSection>
          <div className="flex flex-wrap ">
            <Post className="mr-5"></Post>
            <Favorite chat={{ name: "ender", lastMessage }} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <Audio className="mb-5" />
          <Weather />
        </div>
        {/* <SimpleRoundVideo></SimpleRoundVideo> */}
      </Main>
    </>
  );
};

export default Home;
