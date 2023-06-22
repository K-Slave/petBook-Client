import { FocusEvent, FormEventHandler, useEffect } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";
import authOptions from "@lib/globalConst/authOptions";
import useLoginMutaion from "./useLoginMutaion";
import inputEventHelperMethod from "@lib/modules/login/inputEventHelperMethod";

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

  // emailRegister.required = true;
  // passwordRegister.required = true;

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      if (formState.isLoading) {
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

    loginStore.setEmail(e.target.value);

    const handler = new inputEventHelperMethod(event);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      handler.preventBlur();
      return;
    }

    if (event.target.validity.valid && handler.checkValidity("email")) {
      handler.setValid("add");
      handler.setSubmitReady("add");
    } else if (!event.target.validity.valid && event.target.value.length > 0) {
      handler.setInvalid("add");
    }
  };

  passwordRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setPassword(e.target.value);

    const handler = new inputEventHelperMethod(event);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      handler.preventBlur();
      return;
    }

    if (event.target.validity.valid && handler.checkValidity("password")) {
      handler.setValid("add");
      handler.setSubmitReady("add");
    } else if (!event.target.validity.valid && event.target.value.length > 0) {
      handler.setInvalid("add");
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
