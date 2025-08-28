import { FadeUp } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="px-8 md:flex gap-4 justify-around">
      <FadeUp>
      <div className="max-w-[400px] ">
        <h1 className="capitalize text-center font-bold text-2xl mt-8">
        Who we are
      </h1>
        <p className="mt-4">
        <span className="font-semibold">APO</span>, is the smartest guide for nurturing. Our aim as an organization
         is to shape every parent to become a responsible tool for his or her family. We have 
         accumulated all the knowledge, techniques and fundamentals for better parenting.
         We use both local cultural values and updated modern and recent science to shape a generation of mankind.
        parenting is a journey filled with love,
        challenges, and lifelong learning.
      </p>
      <p className="mt-2">
        Our mission is to Impart parents, guardians, youth and 
        children stakeholders with
        efficient parenting skills and knowledge.
        Parenting comes with unique experiences—from preserving our rich
        traditions to navigating modern parenting challenges.
      </p>
      <p className="mt-4">
        Whether
        you're a first-time parent or an experienced caregiver, we are here to
        walk with you on this beautiful journey of raising the next generation
        with wisdom, love, and strong values. We believe that a parent can graduate his/her job
        by nurturing/raising an independent child.
      </p>
      </div>
      </FadeUp>

      <FadeUp>
        <div className="max-w-[400px] ">
        <h1 className="capitalize text-center font-bold text-2xl mt-8">
        Our story
      </h1>
      <p className="mt-4">
        APO was born out of a deep passion for parenting since 2024 by just one person
         who is the founder and the innovator of he nane APO He was not comfortable with
          the way education systems and parents tend to treat their children. while the
           way of parenting is clear and easy yet it is not seen by most parents and
            gurdians. Neus Njugunya who is the most passonate man of parenting decided
             to creat a platform for solving all the problems concerning parenting and from
              him all people wih the same passion have gathered here to make true solutions
               of parenting problems starting from Africa to the world by the deep desire to
        create a trusted space for parents to connect, learn, and grow. 
        Our journey began with sharing personal experiences and research-based
        insights, and today, we have grown into a community of parents
        supporting each other. We are committed to providing practical parenting
        tips, expert advice, and real-life stories to help parents raise happy,
        confident and independent children while embracing our cultural heritage. Together, we
        can nurture a generation that thrives in both tradition and modernity.
      </p>

        </div>
      </FadeUp>
    </div>
  );
};

export default page;
