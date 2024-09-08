import { notFoundImage } from "@/assets"
import Image from "next/image"


const NotFoundPage = () => {
  return (
    <div>
        <div>
            <Image src={notFoundImage} alt="not found image" />
        </div>
    </div>
  )
}

export default NotFoundPage