import {LoaderPinwheel } from "lucide-react"
import styles from "./loader.module.scss"
const Loader = ({...props}) => {

return (
<>
<div {...props} className={styles.wrapperLoader}>
<span>loading</span>
  <LoaderPinwheel className={styles.loader}/>
</div>
</>
)
}

export default Loader