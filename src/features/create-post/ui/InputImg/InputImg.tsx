
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import Input from "@/shared/ui/input/input";
import ImageComponent from "@/shared/ui/image/image";
import styles from "./inputImg.module.scss";

const InputImg = ({
  setImgs,
}: {
  setImgs: (img: File[]) => void;
}) => {
  const [img, setImg] = useState<string[]>([]); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImgs([...files]);
            setImg((prev) => [...prev, e?.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <>
      <label
        className={`${styles.inputFile} ${img.length > 0 ? styles.img : ""}`}
      >
            {img.map((image, index) => (
              <ImageComponent
                className={styles.image}
                width={300}
                height={300}
                key={index}
                src={image}
              />
            ))}
            {img.length < 2 ? (
              <>
                <Input type="file" accept="image/png, image/jpeg" onChange={handleChange} />
                <ImagePlus />
                <span>drag and drop photo</span>
              </>
            ) : (
              ""
            )}
      </label>
    </>
  );
};

export default InputImg;
