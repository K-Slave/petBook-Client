import { Meta } from "@storybook/react";
import AuthSelfHiddenMask from "./AuthSelfHiddenMask";
import {
  useRemoveUserInfo,
  useSetUserInfo,
} from "@lib/hooks/common/useUserInfo";
import { useQueryClient } from "@tanstack/react-query";
import { cookieKeyName } from "@lib/globalConst";
import { useEffect, useState } from "react";

const meta: Meta<typeof AuthSelfHiddenMask> = {
  title: "common/Auth/AuthSelfHiddenMask",
  component: AuthSelfHiddenMask,
};

const LoggedIn = () => {
  const setUserInfo = useSetUserInfo();
  setUserInfo({
    iss: "petbook",
    id: 1,
    lat: 0,
    email: "test@gmail.com",
  });
  return (
    <AuthSelfHiddenMask>
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
    </AuthSelfHiddenMask>
  );
};

const NotLoggedIn = () => {
  const removeUserInfo = useRemoveUserInfo();
  const [render, setRender] = useState(false);
  useEffect(() => {
    removeUserInfo().then(() => {
      setRender(true);
    });
  }, []);
  if (!render) return null;
  return (
    <AuthSelfHiddenMask>
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
    </AuthSelfHiddenMask>
  );
};

const Template1 = () => <LoggedIn />;
const Template2 = () => <NotLoggedIn />;
export const LoggedInExample = Template1.bind({});
export const NotLoggedInExample = Template2.bind({});

export default meta;
