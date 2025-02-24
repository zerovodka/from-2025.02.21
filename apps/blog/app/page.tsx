import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={'/logo_png.png'} alt={""} width={500}
      height={500} />
    </div>
  )
}
