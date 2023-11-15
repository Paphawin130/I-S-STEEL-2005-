import Card from "@/components/home/card";
import Layout from "@/components/layout";
import React from "react";
import { motion } from "framer-motion";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Snowfall from "react-snowfall";
import { TypeAnimation } from "react-type-animation";
import "react-multi-carousel/lib/styles.css";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

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
        <div className="mx-15">
          <br></br>
        <div className="black">
          <div className="from-black text-center text-center text-4xl  text-slate-900  text-transparent drop-shadow-sm md:text-4xl ">
            <motion.h1 className="text-gray-800 text-m" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              ที่อยู่เเละเบอร์โทรศัพท์ติดต่อ
            </motion.h1>
          </div>
        </div>
        <Snowfall color="red" snowflakeCount={50}></Snowfall>

        <br></br>
        <p className="text-1xl font-display.text-1xl">ที่ตั้งบริษัท</p>
        <p className="text-sm text-gray-500">
          41/1-3, หมู่ 5 ต.คอกกระบือ อ.เมืองสมุทรสาคร จ.สมุทรสาคร 74000
          (ประเทศไทย)
        </p>
        <br></br>
        <p className="text-1xl font-display">เบอร์โทรศัพท์ติดต่อ</p>
        <p className="text-sm text-gray-500">
          034-854-876, 034-854-294 ติดต่อ K.มายด์, K.อำนวย
        </p>
        <div className="my-5">
          <iframe
            className="md:borde overflow-hidden shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2305.7066364102707!2d100.31780637789555!3d13.613851220663326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2719d65a96c5b70d!2zMTPCsDM2JzUwLjgiTiAxMDDCsDE5JzAyLjciRQ!5e0!3m2!1sth!2sus!4v1675167589270!5m2!1sth!2sus"
            width="800"
            height="600"
          ></iframe>
        </div>
        </div>
      </motion.div>
    </Layout>
  );
}
