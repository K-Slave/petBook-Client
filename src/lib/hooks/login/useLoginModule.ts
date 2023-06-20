import { LOGIN_REQUEST } from "@lib/resources/commonResource";
import { ChangeEventHandler, FormEventHandler } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useSetResource } from "../common/useResource";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";

const useLoginModule = (props?: UseFormProps) => {
  const router = useRouter();
  const loginStore = useLoginStore();
  const { mutateAsync } = useSetResource(LOGIN_REQUEST);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ email: string; password: string }>();
  const emailRegister = register("email");
  const passwordRegister = register("password");

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      const loginResponse = await mutateAsync({
        email: formValue.email,
        password: formValue.password,
        isSave: loginStore.check,
      });

      if (loginResponse.response.status === 200) {
        router.back();
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  );

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 1) {
      loginStore.setEmail(e.target.value);
    }
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 1) {
      loginStore.setPassword(e.target.value);
    }
  };

  const onSaveClick = () => {
    loginStore.setCheck();
  };

  return {
    loginStore,
    emailRegister,
    passwordRegister,
    isSubmitting,
    evenvtHandler: {
      onSubmit,
      onEmailChange,
      onPasswordChange,
      onSaveClick,
    },
  };
};

export default useLoginModule;
