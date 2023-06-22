import { FocusEvent, FormEventHandler, useEffect } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";
import authOptions from "@lib/globalConst/authOptions";
import useLoginMutaion from "./useLoginMutaion";
import localConsole from "@lib/utils/localConsole";

const useLoginForm = (props?: UseFormProps) => {
  const router = useRouter();
  const loginStore = useLoginStore();
  const { mutateAsync, status, failureReason, errorHelperText } =
    useLoginMutaion();

  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>();
  const emailRegister = register("email");
  const passwordRegister = register("password");

  emailRegister.maxLength = authOptions.email.max;
  passwordRegister.minLength = authOptions.password.min;
  passwordRegister.maxLength = authOptions.password.max;

  emailRegister.disabled = formState.isLoading;
  passwordRegister.disabled = formState.isLoading;

  // passwordRegister.pattern = commonReg.password;

  // emailRegister.required = true;
  // passwordRegister.required = true;

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      if (status === "loading") {
        return;
      }

      const loginResponse = await mutateAsync({
        email: formValue.email,
        password: formValue.password,
        isSave: loginStore.check,
      });

      if (loginResponse.response.status === 200) {
        // TODO : 로그인 액션후 이동할 페이지 로직 작성하기
        router.back();
      }
    }
  );

  emailRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

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

  const onEmailKeyDown = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;

    if (input.value.length <= 1) {
      loginStore.setEmail(input.value);
    }
  };

  const onPWKeyDown = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;

    if (input.value.length <= 1) {
      loginStore.setPassword(input.value);
    }
  };

  useEffect(() => {
    const $Email__Input =
      document.querySelector<HTMLInputElement>("#Email__Input");
    const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");

    if ($Email__Input && $PW__Input) {
      $Email__Input.addEventListener("keydown", onEmailKeyDown);
      $PW__Input.addEventListener("keydown", onPWKeyDown);
    }

    return () => {
      const $Email__Input =
        document.querySelector<HTMLInputElement>("#Email__Input");
      const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");

      if ($Email__Input && $PW__Input) {
        $Email__Input.removeEventListener("keydown", onEmailKeyDown);
        $PW__Input.removeEventListener("keydown", onPWKeyDown);

        loginStore.setEmail($Email__Input.value);
        loginStore.setPassword($PW__Input.value);
      }
    };
  }, []);

  return {
    loginStore,
    loginRequest: {
      status,
      failureReason,
      errorHelperText,
    },
    emailRegister,
    passwordRegister,
    evenvtHandler: {
      onSubmit,
      onSaveClick,
    },
  };
};

export default useLoginForm;
