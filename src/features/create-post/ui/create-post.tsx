"use client";

import { useState } from "react";
import Input from "@shared/ui/input/input";
import Form from "@/shared/ui/form/ui/Form";
import Button from "@shared/ui/button/Button";
import PlatfomArticle from "@/shared/ui/platformArticle/UI/platfomArticle";
import InputImg from "./InputImg/InputImg";
import styles from "./create-post.module.scss";
import createPostModel from "../model/createPost.model";
import Link from "next/link";
import Main from "@/shared/ui/main";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";

export const CreatePost = () => {
  const [imgs, setImgs] = useState<File[]>([]);
  const sendPostAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const text = formData.get("text") as string;
    try {
      const formDataImgs = new FormData();

      imgs.forEach((item, index) => {
        formDataImgs.append(`file${index}`, item);
      });
      console.log(text, title);
      const img = await createPostModel.postImgs(formData);
      const data = await createPostModel.post({ title, text });
      console.log(data, img);
    } catch (error) {
      console.error(error);
    }
  };
  return (
  <PlatfomSection className={styles.section}>
        <InputImg setImgs={setImgs} />
        <Form className={styles.form} action={sendPostAction}>
          <Input name="title" placeholder="Title" />
          <Input name="text" placeholder="Text" />
          <Button status="Created...">
            <Link href="/">Сreate post</Link>
          </Button>
        </Form>
    </PlatfomSection>
  );
};
