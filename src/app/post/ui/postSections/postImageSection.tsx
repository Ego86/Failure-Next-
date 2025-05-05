import Button from "@/shared/ui/button/Button";
import Image from "@/shared/ui/image/image";
import { MoveDiagonal } from "lucide-react";
import styles from "../post.module.scss";
import { TypeData } from "../../[id]/page";
import { Dispatch, SetStateAction } from "react";

const PostImageSection = ({
  data,
  setOpenSlider,
  sizes,
}: {
  data: TypeData;
  setOpenSlider: Dispatch<SetStateAction<boolean>>;
  sizes?: { width?: number; height?: number, fill?: boolean };
}) => {
  if(!sizes){
    sizes = {width: 0, height: 0, fill: false}
  }
  const { width , height, fill } = sizes;

  return (
    <section className={styles.imgSection}>
      {data.postData.images.length > 1 ? (
        data.postData.images.map((img, index) => (
          <Image fill={fill} width={width} height={height} key={index} src={img} />
        ))
      ) : (
        <Image
          width={width}
          height={height}
          
          src={data.postData.images[0]}
        />
      )}
      <Button onClick={() => setOpenSlider(true)}>
        <MoveDiagonal />
      </Button>
    </section>
  );
};

export default PostImageSection;
