"use client";
import Feauturelogo from "@/components/(Landing All Pages)/feauturelogo";
import Feature from "@/components/(Landing All Pages)/feautureproducts";
import Mainsection from "@/components/(Landing All Pages)/mainsection";
import Newstyle from "@/components/(Landing All Pages)/newstyle";
import OurProduct from "@/components/(Landing All Pages)/popularproduct";
import Topcategory2 from "@/components/(Landing All Pages)/topcategory";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Suspense  fallback={"Loading  ..... "}>   <Mainsection /> </Suspense>
   
      <Suspense   fallback={"Loading  ..... "}>   <Feauturelogo /> </Suspense>
   
      <Suspense   fallback={"Loading  ..... "}>     <Feature /> </Suspense>
 
      <Suspense   fallback={"Loading  ..... "}>         <Topcategory2 /> </Suspense>
      
      <Suspense   fallback={"Loading  ..... "}>      <Newstyle /> </Suspense>

      <Suspense   fallback={"Loading  ..... "}>        <OurProduct /> </Suspense>
    
    </div>
  );
}
