import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <p>존재하지 않는 페이지</p>
      <Link href={"/"}>메인페이지로 이동</Link>
    </div>
  );
};

export default NotFound;
