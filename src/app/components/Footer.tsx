"use client";
import { Typography } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;
const Footer = () => {
  return (
    <footer className="p-4 bg-white w-full">
      <div className="w-[85%] m-auto text-center">
        <Typography>
          Got questions? Take a look at our{" "}
          <Link href="#" style={{ color: "#0097C2", lineHeight: "19.36px" }}>
            FAQs
          </Link>
          , talk to us on Twitter{" "}
          <Link href="#" style={{ color: "#0097C2", lineHeight: "19.36px" }}>
            @company
          </Link>{" "}
          or send an email to &nbsp;
          <Link
            href="#"
            style={{
              color: "#0097C2",
              lineHeight: "19.36px",
            }}
          >
            team@company.com
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
