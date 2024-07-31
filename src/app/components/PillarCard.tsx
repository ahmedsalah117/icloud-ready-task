"use client";
import { PillarType } from "@/constants";
import { Card } from "antd";
import Image from "next/image";
import React, { useContext } from "react";
import { Typography, Avatar } from "antd";
import { LinkOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import { FaExternalLinkAlt } from "react-icons/fa";
const { Title, Text } = Typography;
const PillarCard = ({
  id,
  title,
  image,
  description,
  price,
  bgColor,
}: PillarType) => {
  const router = useRouter();
  const { addItemToCart } = useContext(AppContext);
  return (
    <div
      style={{
        flexGrow: 1,
        maxWidth: "400px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        color: "#fff !important",
        padding: "3px",
      }}
    >
      <div className="overflow-hidden h-1/2">
        <Image
          src={image}
          alt="title"
          height={300}
          width={300}
          className="object-cover"
        />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: bgColor,
          height: "50%",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        {/* title and desc */}
        <div className="text-white">
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24.2px",
              color: "white !important",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "white !important",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "21.78px",
              marginTop: "15px",
            }}
          >
            {description}
          </p>
        </div>
        {/* pricing  */}
        <div className="flex justify-between">
          <Text
            type="success"
            style={{ fontSize: "20px", lineHeight: "24.2px", color: "#fff" }}
          >
            {price} DTSU*
          </Text>
          <Avatar.Group
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <Avatar
              size={40}
              style={{
                cursor: "pointer",
              }}
              shape="circle"
              icon={
                <FaExternalLinkAlt
                  onClick={() => {
                    router.push(`/${id}`);
                  }}
                />
              }
            />
            <Avatar
              size={40}
              style={{ cursor: "pointer" }}
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => {
                addItemToCart({
                  id,
                  title,
                  description,
                  price,
                });
              }}
            />
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
