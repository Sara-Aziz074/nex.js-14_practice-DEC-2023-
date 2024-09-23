"use client";

import Link from "next/link";
import MyButton from "@/components/MyButton";
import Displaying_Data from "@/components/displayingdata";
import Maapp from "@/components/map";

const MTButton2 =() => {

  const see_this = () => {
    alert("how r u...")
  };

  return(
    <div>
    <button onClick={see_this}  className="bg-purple-300"> 2nd_Button</button>
    </div>
  )
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
 <Link href= {"dashboard"}>Dashboard</Link>
 
 <MyButton/>
 <div>
  <MTButton2/>
 </div>
 <div>
  <Displaying_Data/>

 </div>

 <div>
  <Maapp/>
 </div>
    </main>
  );
};
