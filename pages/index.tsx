import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Twitter } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { Google } from "@/components/shared/icons";
import { TypeAnimation } from "react-type-animation";
import Snowfall from "react-snowfall";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const features = [
  {
    title: "Products",
    description: "",
    demo: (
      <div className="marquee absolute flex w-[200%] flex-nowrap items-center justify-center gap-5 space-x-20">
        <Image alt="1" src="1.jpg" width={850} height={400} />
      </div>
    ),
    large: true,
  },
  {
    title: "ติดต่อฝ่ายขาย",
    description: "LINE: @444xsyye (มี @ )",
    demo: (
      <div className="marquee absolute flex w-[200%] flex-nowrap items-center justify-center gap-5 space-x-20">
        <Image alt="2" src="2.jpg" width={900} height={400} />
      </div>
    ),
  },
  {
    title: "PRODUCTS",
    description: "",
    demo: (
      <Link href="">
        <Carousel autoPlay showThumbs={false}>
          <div>
            <Image alt="3" src="3.jpg" width={900} height={400} />
          </div>
          <div>
            <Image alt="4" src="4.jpg" width={900} height={400} />
          </div>
          <div>
            <Image alt="5" src="5.jpg" width={900} height={400} />
          </div>
          <div>
            <Image alt="9" src="9.jpg" width={900} height={400} />
          </div>
          <div>
            <Image alt="10" src="10.jpg" width={900} height={400} />
          </div>
        </Carousel>
      </Link>
    ),
    large: true,
  },
  {
    title: "IS STEEL (2005) ",
    description: "",
    demo: (
      <div className="marquee absolute flex w-[200%] flex-nowrap items-center justify-center gap-5 space-x-20">
        <Image alt="6" src="d.jpg" width={420} height={100} />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <Layout>
        <motion.div
          className="font-Sarabun max-w-xl px-5 xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
      <div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
          {/* <motion.a
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            href="https://www.facebook.com/issteel2005/"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            {" "}
            <Twitter className="h-5 w-5 text-[#1d9bf0]" />
            <Balancer className="text-sm font-semibold text-[#1d9bf0]">
              Facebook Page
            </Balancer>
          </motion.a> */}
          <motion.h1
            className="md:text-7m bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl  tracking-[-0.02em] text-transparent drop-shadow-sm md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>
              บริษัท ไอ เอส สตีล <span className="text-red-700">(2005)</span>{" "}
              CO.,LTD.
            </p>
          </motion.h1>

          {/* <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <TypeAnimation
              sequence={["จำหน่าย นำเข้าอลูมิเนียมอัลลอยและโลหะทุกชนิด", 2000]}
              cursor={true}
              repeat={Infinity}
            />
            <h1>🚚จัดส่ง กทม. และ ปริมณฑล (ต่างจังหวัดส่งขนส่งค่ะ)</h1>
        
          </motion.p> */}
          <motion.p className="mt-6 text-center text-gray-500 md:text-xl red">
              I S STEEL (2005) COMPANY LIMITED
            </motion.p>
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            {/*\ <motion.a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-600 shadow-md  transition-colors  hover:border-gray-800"
              href="mailto:issteel2005@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Google className="h-5 w-5" />
              <Balancer>Email</Balancer>
            </motion.a>
            <motion.a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-600 shadow-md  transition-colors  hover:border-gray-800"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Google className="h-5 w-5" />
              <Balancer>Maps</Balancer>
            </motion.a> */}
          </motion.div>
          {/* <Snowfall color="red" snowflakeCount={50}></Snowfall>  Snowfall */}
        </motion.div>
        <Link href="/contact">
          <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
            {features.map(({ title, description, demo, large }) => (
              <Card
                key={title}
                title={title}
                description={description}
                demo={title === "" ? <ComponentGrid /> : demo}
                large={large}
              />
            ))}
          </div>
          <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
  <div className="row-span-3"><Image alt="a"className="rounded-md border" src="a.jpg" width={500} height={300} /></div>
  <div className=" "><Image alt="a"className="rounded-md border" src="b.jpg" width={600} height={100} /></div>
  <div className=" "><Image alt="a"className="rounded-md border" src="c.jpg" width={500} height={300} /></div>

</div>
          <div className="items-center text-center">
            {/* <h1 className="md:text-7m bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl  tracking-[-0.02em] text-transparent drop-shadow-sm md:leading-[5rem] ">
              บริการตัดซอยตามขนาดที่ลูกค้าต้องการ
            </h1>
            <div className="items-center text-center">
            <h1 className="md:text-7m bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl  tracking-[-0.02em] text-transparent drop-shadow-sm md:leading-[5rem]">“ราคามิตรภาพ คุณภาพเกินราคาช่วยคุณประหยัดต้นทุนในการผลิต”</h1>
            </div> */}
          </div>

        </Link>
        

      </Layout>
    </div>
  );
}

// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));
