import { ChangeEvent, FocusEvent, FormEventHandler, useEffect } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";
import authOptions from "@lib/globalConst/authOptions";
import useLoginMutaion from "./useLoginMutaion";
import inputEventHelperMethod from "@lib/modules/login/inputEventHelperMethod";
import localConsole from "@lib/utils/localConsole";

const useLoginForm = (props?: UseFormProps) => {
  const router = useRouter();
  const loginStore = useLoginStore();
  const { mutateAsync, status, failureReason, errorHelperText } =
    useLoginMutaion();

  const { register, handleSubmit, formState, getValues } = useForm<{
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
        // router.back();
        // router.push('/');
        // window.location.reload();
      }
    }
  );

  emailRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setEmail(event.target.value);

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

    loginStore.setPassword(event.target.value);

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

  const onEmailAutoComplete = (e: any) => {
    const event = e as ChangeEvent<HTMLInputElement>;

    const emailHandler = new inputEventHelperMethod(event);

    if (event.target.value.length > 0 && emailHandler.checkValidity("email")) {
      loginStore.setEmail(event.target.value);
      emailHandler.setValid("add");
      emailHandler.setSubmitReady("add");
    }
  };

  const onPWAutoComplete = (e: any) => {
    const event = e as ChangeEvent<HTMLInputElement>;

    const passwordHandler = new inputEventHelperMethod(event);

    if (
      event.target.value.length > 0 &&
      passwordHandler.checkValidity("password")
    ) {
      loginStore.setPassword(event.target.value);
      passwordHandler.setValid("add");
      passwordHandler.setSubmitReady("add");
    }
  };

  useEffect(() => {
    const $Email__Input =
      document.querySelector<HTMLInputElement>("#Email__Input");
    const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");

    if ($Email__Input && $PW__Input) {
      $Email__Input.addEventListener("keydown", onEmailKeyDown);
      $PW__Input.addEventListener("keydown", onPWKeyDown);

      $Email__Input.addEventListener("change", onEmailAutoComplete, {
        once: true,
      });
      $PW__Input.addEventListener("change", onPWAutoComplete, { once: true });
    }

    return () => {
      loginStore.setEmail(getValues("email"));
      loginStore.setPassword(getValues("password"));

      const $Email__Input =
        document.querySelector<HTMLInputElement>("#Email__Input");
      const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");

      if ($Email__Input && $PW__Input) {
        $Email__Input.removeEventListener("keydown", onEmailKeyDown);
        $PW__Input.removeEventListener("keydown", onPWKeyDown);
        $Email__Input.removeEventListener("change", onEmailAutoComplete);
        $PW__Input.removeEventListener("change", onPWAutoComplete);
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
