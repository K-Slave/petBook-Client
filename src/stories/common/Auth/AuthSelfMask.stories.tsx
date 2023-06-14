import { Meta } from "@storybook/react";
import AuthSelfMask from "./AuthSelfMask";
import { useSetUserInfo } from "@lib/hooks/common/useUserInfo";

const meta: Meta<typeof AuthSelfMask> = {
  title: "common/Auth/AuthSelfMask",
  component: AuthSelfMask,
};

const MockAuthSelfMask = () => {
  const setUserInfo = useSetUserInfo();
  setUserInfo({
    iss: "petbook",
    id: 1,
    lat: 0,
    email: "test@gmail.com",
  });
  return (
    <AuthSelfMask>
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
        자식 컴포넌트
      </div>
    </AuthSelfMask>
  );
};

const Template = () => <MockAuthSelfMask />;
export const Example = Template.bind({});

export default meta;
