import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/card/card";

export default function Home() {
  return (
    <>
    <div>
     <Navbar/>
      <img src="./mypic.png" className="whatchpic" />
      <Card/>
    </div>
    </>
  );
}
