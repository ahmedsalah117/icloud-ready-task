"use client";

import Gift from "../../../public/images/gift_box.svg";
import Info from "../../../public/images/info_circle.svg";
import { AppContext } from "@/context/AppContext";
import {
  CloudDownloadOutlined,
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
const KitchenMenu = ({ onClose, open }: props) => {
  const { cartItems, kitchenItemsCount, kitchenItems } = useContext(AppContext);
  return (
    <div>
      <Drawer
        title="Your run kitchen"
        onClose={onClose}
        open={open}
        extra={
          <>
            <Text style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Requests in
              <br /> run kitchen
              <Avatar style={{ backgroundColor: "#FFD900", color: "#052346" }}>
                {kitchenItemsCount}
              </Avatar>
            </Text>
          </>
        }
        headerStyle={{ border: "none !important" }}
      >
        {kitchenItemsCount > 0 ? (
          <div className="h-full">
            <div className="flex gap-4 text-[#00244D]">
              <p className="flex-1">Request</p>
              <p>Status</p>
              <p>O/P Link</p>
            </div>
            <Divider />
            {kitchenItems.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-1 gap-2">
                      <Avatar icon={<CodepenOutlined />} />
                      <div>
                        <p className="text-primaryColor text-sm">
                          {item.title}
                        </p>
                        <p className="text-textSecColor text-xs">
                          Private Training, {item.price} DTSUs
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          backgroundColor:
                            index === 0
                              ? "#FCE3E6"
                              : index % 2 === 0
                              ? "#FCF7DB"
                              : "#DDF5F2",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      >
                        <Avatar
                          size={"small"}
                          shape="circle"
                          style={{
                            backgroundColor:
                              index === 0
                                ? "#EF5261"
                                : index % 2 === 0
                                ? "#EFCC1B"
                                : "#2CBFAE",
                            width: "15px",
                            height: "15px",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <CloudDownloadOutlined
                        style={{
                          color: "#0097C2",
                          cursor: "pointer",
                          fontSize: "25px",
                        }}
                      />
                      ;
                      {/* <DeleteOutlined
                        style={{
                          color: "#DC1C6A",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          removeCartItemHandler(item.id);
                        }}
                      /> */}
                    </div>
                  </div>
                  {index !== cartItems.length - 1 && <Divider />}
                </div>
              );
            })}
            <Divider />
            <div className="flex capitalize justify-between items-center text-xs">
              <p>Units under processing</p>
              <p className="text-[#0097C2] text-xs">12.00 DTSUs</p>
            </div>
            <div className="flex  capitalize justify-between items-center text-xs mt-2">
              <p>Units Completed</p>
              <p className="text-[#0097C2] text-xs">12.00 DTSUs</p>
            </div>
            <Divider />
            <div className="flex capitalize justify-between items-center text-xs">
              <p className="">Total Units Consumed</p>
              <p className="text-[#0097C2] text-xs">12.00 DTSUs</p>
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
              >
                Refresh Status
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
                Back to Your Dashboard
              </Button>
            </div>

            <div className="mt-12 bg-[#ECF6FE] text-[#00244D] text-xs rounded-lg flex gap-2 p-3">
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
              Your run kitchen is empty!
            </Typography>
            <Text className="text-textSecColor">
              start checking out your requests.
            </Text>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default KitchenMenu;
