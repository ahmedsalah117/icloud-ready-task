"use client";
import Gift from "../../../public/images/gift_box.svg";
import Info from "../../../public/images/info_circle.svg";
import { AppContext } from "@/context/AppContext";
import {
  CodepenOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Drawer, Input, Typography } from "antd";
import Link from "antd/es/typography/Link";
import Image from "next/image";
import React, { useContext } from "react";

const { Text } = Typography;
interface props {
  onClose: () => void;
  open: boolean;
}
const Cart = ({ onClose, open }: props) => {
  const {
    cartItems,
    totalCartAmount,
    updateItemsCountInCart,
    removeCartItemHandler,
    totalCartCount,
    checkOutHandler,
  } = useContext(AppContext);
  return (
    <div>
      <Drawer
        title="Run your cart"
        onClose={onClose}
        open={open}
        extra={
          <>
            <Text style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Requests in
              <br /> your run cart
              <Avatar style={{ backgroundColor: "#FFD900", color: "#052346" }}>
                {totalCartCount}
              </Avatar>
            </Text>
          </>
        }
        headerStyle={{ border: "none !important" }}
      >
        {totalCartCount > 0 ? (
          <div className="h-full">
            <div className="flex gap-4 text-[#00244D]">
              <p className="flex-1">Product</p>
              <p>Qty</p>
              <p>Remove</p>
            </div>
            <Divider />
            {cartItems.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <div className="flex flex-1 gap-2">
                      <Avatar icon={<CodepenOutlined />} />
                      <div>
                        <p className="text-primaryColor text-sm">
                          {item.title}
                        </p>
                        <p className="text-textSecColor text-xs">
                          Default Title, {item.price} DTSUs
                        </p>
                      </div>
                    </div>
                    <div>
                      <Input
                        min={1}
                        type="number"
                        style={{ width: "60px", textAlign: "center" }}
                        value={item.count}
                        onChange={(e) => {
                          updateItemsCountInCart(
                            item.id,
                            Number.parseInt(e.target.value)
                          );
                        }}
                      />
                    </div>
                    <div>
                      <DeleteOutlined
                        style={{
                          color: "#DC1C6A",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          removeCartItemHandler(item.id);
                        }}
                      />
                    </div>
                  </div>
                  {index !== cartItems.length - 1 && <Divider />}
                </div>
              );
            })}
            <Divider />
            <div className="flex justify-between items-center text-xs">
              <p>Subtotal</p>
              <p className="text-[#0097C2] text-xs">{totalCartAmount} DTSUs</p>
            </div>
            <div className="flex justify-between items-center text-xs mt-2">
              <p>New Payment</p>
              <p className="text-[#0097C2] text-xs">
                {" "}
                No, Inclusive in your package
              </p>
            </div>
            <Divider />
            <div className="flex justify-between items-center text-xs">
              <p className="">Total Units Consumed</p>
              <p className="text-[#0097C2] text-xs">1.00 DTSUs</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Button
                shape="round"
                style={{
                  backgroundColor: "#0097C2",
                  color: "white",
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  height: "48px",
                  width: "323px",
                }}
                onClick={checkOutHandler}
              >
                Checkout
              </Button>
              <Button
                shape="round"
                style={{
                  border: "1px solid #0097C2",
                  color: "#0097C2",
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  height: "48px",
                  width: "323px",
                }}
              >
                Back to Run information
              </Button>
            </div>

            <div className="mt-12 bg-[#FCF9E1] text-[#00244D] text-xs rounded-lg flex justify-between p-3">
              Your have made a great chooseLet's Run and be ready for a surprise
              <Image src={Gift} width={30} height={30} alt="gift icon" />
            </div>
            <div className="mt-6 bg-[#ECF6FE] text-[#00244D] text-xs rounded-lg flex gap-2 p-3">
              <Image src={Info} width={30} height={30} alt="gift icon" />
              <div>
                Some requests can take a week or moreto be delivered and may be
                subject to{" "}
                <Link href="#">dependency resolutions related to your</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col h-full">
            <ShoppingCartOutlined
              style={{ fontSize: "90px", color: "#C2CAD4" }}
            />
            <Typography className="mt-4 text-primaryColor text-sm leading-[16.94px]">
              Your run cart is empty!
            </Typography>
            <Text className="text-textSecColor">
              start adding your requests here
            </Text>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Cart;
