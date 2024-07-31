"use client";
import React, { useContext, useState } from "react";
import {
  AntDesignOutlined,
  DatabaseOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Divider, Tooltip, Typography } from "antd";
import { AppContext } from "@/context/AppContext";
import Cart from "./Cart";
import KitchenMenu from "./KitchenMenu";
import KitchenIcon from "../../../public/images/kitchen_icon.svg";
const { Text, Title, Paragraph } = Typography;
const Navbar = () => {
  const { kitchenItemsCount, cartItems, totalCartCount } =
    useContext(AppContext);
  const [openCart, setOpenCart] = useState(false);
  const [openKitchenMenu, setOpenKitchenMenu] = useState(false);
  return (
    <nav className="w-full p-4 bg-navColor">
      <div className="w-[85%] m-auto flex justify-between items-center">
        {/* Welcome to my company div */}
        <Typography>
          <Title
            style={{
              color: "#00244D",
              fontSize: "24px",
              lineHeight: "29.05 px",
            }}
          >
            Welcome to My Company!
          </Title>
          <Text
            style={{
              color: "#637182",
              lineHeight: "19.36px",
            }}
          >
            You have started your 30 day trial
          </Text>
        </Typography>
        {/* Avatars div */}
        <div className="flex gap-4 items-center">
          <Avatar.Group shape="square">
            <Avatar size={45} style={{ backgroundColor: "#fde3cf" }}>
              A
            </Avatar>
            <Avatar size={45} style={{ backgroundColor: "#f56a00" }}>
              K
            </Avatar>
            <Avatar
              size={45}
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <Avatar
              size={45}
              style={{ backgroundColor: "#1677ff" }}
              icon={<AntDesignOutlined />}
            />
            <Avatar.Group shape="circle">
              <Avatar
                size={45}
                style={{ backgroundColor: "#fff" }}
                icon={<AntDesignOutlined />}
              />
              <Avatar
                size={45}
                style={{
                  backgroundColor: "#E6E6E6",
                  fontWeight: "bold",
                  color: "#7C838A",
                }}
              >
                +3
              </Avatar>
            </Avatar.Group>
          </Avatar.Group>
          <Typography>
            <Title
              style={{
                color: "##637182",
                fontSize: "20px",
                lineHeight: "24.2px",
              }}
            >
              Our architects are here to help
            </Title>
            <Text style={{ color: "#0097C2", lineHeight: "19.36px" }}>
              Book a free session
            </Text>
          </Typography>
        </div>
        {/* Cart & kitchen menu div */}
        <div className="flex gap-3">
          <Badge
            count={totalCartCount}
            style={{ backgroundColor: "#FFD900", color: "#052346" }}
          >
            <Avatar
              style={{ backgroundColor: "#E1ECF9", cursor: "pointer" }}
              shape="circle"
              size="large"
              icon={
                <ShoppingCartOutlined
                  style={{ color: "#4A6585", fontWeight: "bold" }}
                />
              }
              onClick={() => setOpenCart(true)}
            />
          </Badge>
          <Badge
            count={kitchenItemsCount}
            style={{
              backgroundColor: "#FFD900",
              color: "#052346",
            }}
          >
            <Avatar
              onClick={() => setOpenKitchenMenu(true)}
              style={{ backgroundColor: "#E1ECF9", cursor: "pointer" }}
              shape="circle"
              size="large"
              icon={<DatabaseOutlined style={{ color: "#4A6585" }} />}
            />
          </Badge>
        </div>
      </div>
      <Cart
        open={openCart}
        onClose={() => {
          setOpenCart(false);
        }}
      />
      <KitchenMenu
        open={openKitchenMenu}
        onClose={() => {
          setOpenKitchenMenu(false);
        }}
      />
    </nav>
  );
};

export default Navbar;
