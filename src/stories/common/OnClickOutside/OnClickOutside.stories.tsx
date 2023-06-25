import { Meta } from "@storybook/react";
import OnClickOutside from ".";

const meta: Meta<typeof OnClickOutside> = {
  title: "common/OnClickOutside",
  component: OnClickOutside,
};

export const Example = () => (
  <OnClickOutside trigger={() => alert("trigger 함수 동작")}>
    <div
      style={{
        textAlign: "center",
        background: "var(--primary)",
        color: "white",
        lineHeight: "150%",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "1rem 0",
      }}
    >
      컴포넌트 바깥을 클릭해보세요
    </div>
  </OnClickOutside>
);

export default meta;
