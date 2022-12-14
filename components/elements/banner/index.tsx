import Button from "@components/elements/button";
import React from "react";
import { BannerProps } from "./types";
import styles from "./banner.module.scss";

const Banner = ({ title, description, buttonText }: BannerProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <h4>{description}</h4>

      <Button isDark="dark" text={buttonText} />
    </div>
  );
};

export default Banner;
