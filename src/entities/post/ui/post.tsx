"use client";

import Link from "next/link";
import { memo, Suspense } from "react";
import Image from "@/shared/ui/image/image";
import styles from "./post.module.scss";
import useWindowSize from "@/shared/hook/useWindowSize";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";


const Post = memo(({ ...props }) => {
  const imgs = [
    "/загружено (4).png",
  "/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg" ,
    
  ]
  const data = {
    username: "Failure",
    title: "Home",
    text: "loremru10 ",
    img: imgs,
  };

  const [width] = useWindowSize();
  const imgAllRender = (
    <section className={styles.images}>
      {data?.img && width > 1000 ? (
        data.img.map((img, i) => {
          console.log(img)
          return <Image  key={i} width={200} height={200} style={{maxWidth: "200px"}} src={img} />;
        })
      ) : (
        <>
          <Image  width={200} height={200} style={{maxWidth: "200px"}} src={data.img[0]} />
          <Image  width={200} height={200} style={{maxWidth: "200px"}} blur src={data.img[1]} />
        </>
      )}
    </section>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlatfomSection {...props} className={`${styles.post} flex`}>
        <Link href="/post/1">
          <article className={styles.text}>
            <h2>{data?.title && data?.title}</h2>
            <p>
              {data.text.length >= 400
                ? `${data.text.slice(
                    -data.text.length,
                    400
                  )} читать полность...`
                : data.text}
            </p>
          </article>
          {imgAllRender}
        </Link>
        <h2 className={styles.username}>{data.username}</h2>
      </PlatfomSection>
    </Suspense>
  );
});

export default Post;
