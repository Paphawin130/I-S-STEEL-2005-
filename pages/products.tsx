import Layout from "@/components/layout";
import React from "react";
import { motion } from "framer-motion";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Snowfall from "react-snowfall";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import "react-multi-carousel/lib/styles.css";

export default function products() {
  return (
    <Layout>
      <motion.div
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
        <div className="orange">
          <div className="red from-black text-center text-center  text-5xl  text-transparent drop-shadow-sm md:text-5xl ">
            <motion.h1 className="" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              คุณสมบัติและการนำไปใช้งาน
            </motion.h1>
          </div>
        </div>

        <Snowfall color="red" snowflakeCount={50}></Snowfall>
      </motion.div>

      <br></br>
      {/* className="text-slate-700 text-center z-30 mb-0 w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out" */}

      <div className="white text-left mx-8 my-5">
        <h1 className="text-2xl">อลูมิเนียมอัลลอยเกรด 5083 H112</h1>
        <br></br><p className="text-slate-800">
          เหมาะสำหรับ งานแม่พิมพ์แวคคัม จิ๊ก ฟิกเจอร์ งานต่อ เรือ ตกแต่งอาคาร
          โดยส่วนเนื้ออลูมิเนียมมีความยืดหยุ่นสูง สามารถดัดและพับได้ง่าย{" "}
        </p>
        <br></br>
        <h1 className="text-2xl">อลูมิเนียมอัลลอยเกรด 6061 T651</h1>
        <br></br><p  className="text-slate-800">
          เหมาะสำหรับ งานที่ต้องใช้ความทนทานต่อต้านการกัดกร่อนได้ดี
          ซึ่งเนื้ออลูมิเนียมมีความยืดหยุ่นสูง สามารถดัดและพับได้ง่าย เช่น
          ชิ้นส่วนเครื่องยนต์ จักรยานยนต์ งานแม่พิมพ์ประเภทต่างๆ งานต่อเรือ
        </p>
        <br></br>
        <h1 className="text-2xl">อลูมิเนียมอัลลอยเกรด 7075 T651</h1>
        <br></br><p className="text-slate-800">
          เป็นอลูมิเนียมที่มีความแข็งแรงและมีความเหนียวสูงที่สุดในกลุ่มอลูมิเนียมอัลลอย
          เหมาะสำหรับตัดกลึง และชุบอะโนไดซ์ ทำแม่พิมพ์เป่าขวดพลาสติก
          แม่พิมพ์ฉีดพลาสติก แม่พิมพ์รองเท้า ชิ้นส่วนเครื่องจักรกล
          ชิ้นส่วนเครื่องบิน ชิ้นส่วนรถยนต์{" "}
        </p>
      </div>
      <Image className="border-radius:10%" alt="" src="1.jpg" width={450} height={450}></Image>
      <div>
        
      </div>
    </Layout>
  );
}
