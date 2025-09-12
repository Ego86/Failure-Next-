"use client";
import styles from "./not-found.module.scss";
import LinkButton from "@/shared/ui/linkButton/linkbuttom";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const nav = useRouter();
  return (
    <main className={styles.main}>
      <LinkButton
      className="text-3xl relative top-12 left-24"
       variant="outline" href="" onClick={nav.back}>
        Back
      </LinkButton>
    </main>
  );
};

export default NotFound;
