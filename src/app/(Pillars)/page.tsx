"use client";
import React from "react";
import { Avatar, Badge, Typography } from "antd";
import {
  HeartOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { pillarsArray } from "@/constants";
import PillarCard from "../components/PillarCard";
import { BiDiamond } from "react-icons/bi";
import MenuIcon from "../../../public/images/menu_icon.svg";
import Image from "next/image";
const { Title, Paragraph, Text, Link } = Typography;
const PillarsHome = () => {
  return (
    <div className="h-full py-12 w-full">
      <div className="w-[85%] m-auto flex flex-col gap-20 h-full">
        <Typography
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Title
              style={{
                color: "#0097C2",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Get Support <BiDiamond />
            </Title>
          </div>
          <div
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#305783",
              borderRadius: "50%",
              cursor: "pointer",
              width: "60px",
              height: "60px",
            }}
          >
            {/* <MenuOutlined style={{ color: "#fff", fontSize: "20px" }} /> */}
            <Image
              src={MenuIcon}
              width={40}
              height={40}
              alt="menu icon"
              className="object-cover"
            />
          </div>
        </Typography>

        {/* Displaying the pillars cards */}
        <div>
          <div className="flex justify-between gap-16">
            {pillarsArray.map((item) => {
              return (
                <PillarCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                  bgColor={item.bgColor}
                />
              );
            })}
          </div>
          <div
            className="
        flex justify-end gap-6 text-white mt-6 "
          >
            <p className="text-[14px] leading-[16.94px]">
              <SettingOutlined
                style={{ color: "#7AD676", marginRight: "5px" }}
              />
              Remaining DTSUs: 200
            </p>
            <p className="text-[14px] leading-[16.94px]">
              <SettingOutlined
                style={{ color: "#D84242", marginRight: "5px" }}
              />
              Consumed DTSUs: 350
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarsHome;
