"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { use, useMemo, useState } from "react";
import { ArrowBigLeft } from "lucide-react";

import { useRouter } from "next/navigation";
import Button from "@/shared/ui/button/Button";
import styles from "../ui/post.module.scss";
import { Slider } from "@/entities/slider";
import PostImageSection from "../ui/postSections/postImageSection";
import PostTitleSection from "../ui/postSections/postTitleSection";

export type TypeData = {
  username: string;
  postData: {
    title: string;
    text: string;
    images: string[];
  };
};
const imgs = [
  "/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg",
  "/1667929102152124336.jpg",
  "/загружено (4).png",
];

const Post = ({ params }) => {
  const navigation = useRouter();
  const [data, _setData] = useState<TypeData>({
    username: "Failure",
    postData: {
      title: "Fail",
      text: "knsdlifhailhfaslin asinhdoians odi",
      images: imgs,
    },
  });
  const [isOpenSlider, setIsOpenSlider] = useState<boolean>(false);
  // const _id = params?.id;

  const slider = useMemo(() => {
    return (
      <>
        {isOpenSlider ? (
          <Slider setOpenSlider={setIsOpenSlider} imgs={data.postData.images} />
        ) : (
          ""
        )}
      </>
    );
  }, [data.postData.images, isOpenSlider]);
  
  return (
    <main className={styles.main}>
      {slider}
      <article>
        <Button className={styles.backButton} onClick={() => navigation.back()}>
          <ArrowBigLeft />
        </Button>
        <PostImageSection sizes={{fill: true}} setOpenSlider={setIsOpenSlider} data={data} />
        <PostTitleSection data={data} />
      </article>
    </main>
  );
};

export default Post;
