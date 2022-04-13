import * as React from "react";
import cx from "classnames";
import { Button as ButtonAntd } from "antd";
import { NativeButtonProps } from "antd/lib/button/button.d";
import styles from "./style.module.less";

export interface IProps extends NativeButtonProps {
  color?: string;
  radius?: boolean;
}

export const SqButton: React.FC<IProps> = ({
  children,
  color = "",
  radius = false,
  ...other
}) => {
  return (
    <ButtonAntd 
    // className={styles.pink}
    {...other} 
    // className={cx({ [styles.radius]: radius })}
    >
      {children}
    </ButtonAntd>
  );
};
