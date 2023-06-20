import { LOGIN_REQUEST } from "@lib/resources/commonResource";
import { ChangeEventHandler, FormEventHandler, useReducer } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useSetResource } from "../common/useResource";
import localConsole from "@lib/utils/localConsole";
import { useRouter } from "next/router";

const useLoginForm = (props?: UseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ email: string; password: string }>();

  const { mutateAsync } = useSetResource(LOGIN_REQUEST);
  const router = useRouter();
  const [formSubState, setFormSubState] = useReducer(
    (
      prev: {
        email: {
          value: string;
          isTyping: boolean;
        };
        password: {
          value: string;
          isTyping: boolean;
        };
        check: boolean;
      },
      next: { type: "email" | "pw" | "cookie"; value: string }
    ) => {
      if (next.type === "email") {
        return {
          ...prev,
          email: {
            value: next.value,
            isTyping: next.value.length > 0 ? true : false,
          },
        };
      }

      if (next.type === "pw") {
        return {
          ...prev,
          password: {
            value: next.value,
            isTyping: next.value.length > 0 ? true : false,
          },
        };
      }

      if (next.type === "cookie") {
        return {
          ...prev,
          check: !prev.check,
          isTyping: false,
        };
      }

      return { ...prev };
    },
    {
      email: {
        value: "",
        isTyping: false,
      },
      password: {
        value: "",
        isTyping: false,
      },
      check: false,
    }
  );

  const emailRegister = register("email");
  const passwordRegister = register("password");

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      const loginResponse = await mutateAsync({
        email: formValue.email,
        password: formValue.password,
        isSave: formSubState.check,
      });

      if (loginResponse.response.status === 200) {
        router.back();
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  );

  return {
    emailRegister,
    passwordRegister,
    isSubmitting,
    formSubState,
    setFormSubState,
    onSubmit,
  };
};

export default useLoginForm;
