"use client";
import { pillarsArray } from "@/constants";
import { Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface props {
  params: {
    pillarId: number;
  };
}
const PillarsDetailsPage = ({ params }: props) => {
  const pillarId = params?.pillarId;
  const targetedPillar = pillarsArray?.filter(
    (pillar) => pillar.id == pillarId
  )[0];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Typography.Title
        style={{
          color: "#00254F !important",
          fontSize: "64px",
          lineHeight: "77.45px",
        }}
      >
        Welcome to {targetedPillar?.title}
      </Typography.Title>
    </div>
  );
};

export default PillarsDetailsPage;
