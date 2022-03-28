import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Typography } from "antd";
import { SearchOutlined, RightOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
const { Title, Paragraph } = Typography;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <ConfigProvider prefixCls={"sq"}>
      <Typography>
        <Title>Button</Title>
        <Title level={2}>Large</Title>
        <Paragraph>
          <Button type="primary" shape="round" size="large">
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="large">
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="large">
            Button
          </Button>{" "}
          <Button type="dashed" shape="round" size="large">
            Dashed Button
          </Button>{" "}
          <Button type="text" size="large">
            Text Button
          </Button>{" "}
          <Button type="link" size="large">
            Link Button
          </Button>
          <br />
          <br />
          <Button type="primary" shape="round" size="large" disabled>
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="large"
            disabled
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="large" disabled>
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="large" disabled>
            Button
          </Button>{" "}
          <Button type="dashed" disabled size="large" shape="round">
            Dashed Button
          </Button>{" "}
          <Button type="text" disabled size="large" shape="round">
            Text Button
          </Button>{" "}
          <Button type="link" disabled size="large" shape="round">
            Link Button
          </Button>
        </Paragraph>
        <Title level={2}>Middle</Title>
        <Paragraph>
          <Button type="primary" shape="round" size="middle">
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="middle"
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="middle">
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="middle">
            Button
          </Button>{" "}
          <Button type="dashed" shape="round" size="middle">
            Dashed Button
          </Button>{" "}
          <Button type="text" size="middle">
            Text Button
          </Button>{" "}
          <Button type="link" size="middle">
            Link Button
          </Button>
          <br />
          <br />
          <Button type="primary" shape="round" size="middle" disabled>
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="middle"
            disabled
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="middle" disabled>
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="middle" disabled>
            Button
          </Button>{" "}
          <Button type="dashed" disabled size="middle" shape="round">
            Dashed Button
          </Button>{" "}
          <Button type="text" disabled size="middle" shape="round">
            Text Button
          </Button>{" "}
          <Button type="link" disabled size="middle" shape="round">
            Link Button
          </Button>
        </Paragraph>
        <Title level={2}>Small</Title>
        <Paragraph>
          <Button type="primary" shape="round" size="small">
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="small"
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="small">
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="small">
            Button
          </Button>{" "}
          <Button type="dashed" shape="round" size="small">
            Dashed Button
          </Button>{" "}
          <Button type="text" size="small">
            Text Button
          </Button>{" "}
          <Button type="link" size="small">
            Link Button
          </Button>
          <br />
          <br />
          <Button type="primary" shape="round" size="small" disabled>
            Button
          </Button>{" "}
          <Button
            type="primary"
            shape="round"
            size="small"
            disabled
            icon={<SearchOutlined />}
          >
            Button
          </Button>{" "}
          <Button type="primary" shape="round" size="small" disabled>
            Button <RightOutlined />
          </Button>{" "}
          <Button shape="round" size="small" disabled>
            Button
          </Button>{" "}
          <Button type="dashed" disabled size="small" shape="round">
            Dashed Button
          </Button>{" "}
          <Button type="text" disabled size="small" shape="round">
            Text Button
          </Button>{" "}
          <Button type="link" disabled size="small" shape="round">
            Link Button
          </Button>
        </Paragraph>
      </Typography>
    </ConfigProvider>
  );
};

export const Normal = Template.bind({});
