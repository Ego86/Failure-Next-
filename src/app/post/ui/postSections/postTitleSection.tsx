import Button from "@/shared/ui/button/Button";
import styles from "../post.module.scss";
import { TypeData } from "../../[id]/page";
const PostTitleSection = ({ data }: {data: TypeData}) => (
  <section className={styles.textWrapper}>
    <section className={styles.userDataSection}>
      <h2>{data.username}</h2>
      <Button>suscribe</Button>
    </section>
    <section className={styles.mainSection}>
      <h1>{data.postData.title}</h1>
      <p>{data.postData.text}</p>
    </section>
  </section>
);

export default PostTitleSection;
