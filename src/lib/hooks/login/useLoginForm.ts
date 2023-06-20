import { LOGIN_REQUEST } from "@lib/resources/commonResource";
import { FocusEvent, FormEventHandler, useRef } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useSetResource } from "../common/useResource";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";
import localConsole from "@lib/utils/localConsole";

const useLoginForm = (props?: UseFormProps) => {
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

  emailRegister.onChange = async (e) => {
    if (e.target.value.length <= 1) {
      loginStore.setEmail(e.target.value);
    }
  };

  passwordRegister.onChange = async (e) => {
    if (e.target.value.length <= 1) {
      loginStore.setPassword(e.target.value);
    }
  };

  emailRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setEmail(event.target.value);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      event.preventDefault();
      event.target.classList.add("valid");
      return;
    }

    if (e.target.validity.valid) {
      e.target.classList.add("valid");
    } else if (!e.target.validity.valid && e.target.value.length > 0) {
      e.target.classList.add("invalid");
    }
  };

  passwordRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setPassword(event.target.value);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      event.preventDefault();
      event.target.classList.add("valid");
      return;
    }

    if (e.target.validity.valid) {
      e.target.classList.add("valid");
    } else if (!e.target.validity.valid && e.target.value.length > 0) {
      e.target.classList.add("invalid");
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
      onSaveClick,
    },
  };
};

export default useLoginForm;
