"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import { data } from "../constant";
import { useRouter } from "next/navigation";
import Button from "@/shared/ui/button/Button";
import styles from "../ui/post.module.scss";
import { Slider } from "@/entities/slider";
import PostImageSection from "../ui/postSections/postImageSection";
import PostTitleSection from "../ui/postSections/postTitleSection";
import Main from "@/shared/ui/main";

const Post = ({ params }) => {
  const navigation = useRouter();
  const [isOpenSlider, setIsOpenSlider] = useState<boolean>(false);

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
    <Main className={styles.main}>
      {slider}
      <article>
        <Button
          variant="containd"
          className={styles.backButton}
          onClick={() => navigation.back()}
        >
          <ArrowBigLeft />
        </Button>
        <PostImageSection
          sizes={{ fill: true }}
          setOpenSlider={setIsOpenSlider}
          data={data}
        />
        <PostTitleSection data={data} />
      </article>
    </Main>
  );
};

export default Post;
