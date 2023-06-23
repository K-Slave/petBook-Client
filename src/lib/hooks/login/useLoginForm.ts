import { ChangeEvent, FocusEvent, FormEventHandler, useEffect } from "react";
import { UseFormProps, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useLoginStore from "../store/useLoginStore";
import authOptions from "@lib/globalConst/authOptions";
import useLoginMutaion from "./useLoginMutaion";
import inputEventHelperMethod from "@lib/modules/login/inputEventHelperMethod";
import tokenParser from "@lib/server/parse/tokenParser";
import { useSetRecoilState } from "recoil";
import loadingState from "@atoms/common/loadingState";
import localConsole from "@lib/utils/localConsole";

const useLoginForm = (props?: UseFormProps) => {
  const router = useRouter();
  const loginStore = useLoginStore();
  const setLoading = useSetRecoilState(loadingState);
  const { mutateAsync, setUserInfo, status, failureReason, errorHelperText } =
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

  const emailValidityCheck = (
    target?: HTMLInputElement,
    defaultValue?: string
  ) => {
    const emailHandler = new inputEventHelperMethod(undefined, target);
    const targetValue = defaultValue ? defaultValue || "" : target?.value || "";
    const isValueExist = target && targetValue.length > 0;
    const isVaild = emailHandler.checkValidity("email");
    const vaildityResult = isValueExist && isVaild;

    if (vaildityResult) {
      loginStore.setEmail(targetValue);
      emailHandler.setValid("add");
      emailHandler.setSubmitReady("add");
    } else if (!vaildityResult) {
      emailHandler.setInvalid("add");
      emailHandler.setValid("remove");
      emailHandler.setSubmitReady("remove");
    }
  };

  const pwValidityCheck = (
    target?: HTMLInputElement,
    defaultValue?: string
  ) => {
    const passwordHandler = new inputEventHelperMethod(undefined, target);
    const targetValue = defaultValue ? defaultValue || "" : target?.value || "";
    const isValueExist = target && targetValue.length > 0;
    const isVaild = passwordHandler.checkValidity("password");
    const vaildityResult = isValueExist && isVaild;

    if (vaildityResult) {
      loginStore.setPassword(targetValue);
      passwordHandler.setValid("add");
      passwordHandler.setSubmitReady("add");
    } else if (!vaildityResult) {
      passwordHandler.setInvalid("add");
      passwordHandler.setValid("remove");
      passwordHandler.setSubmitReady("remove");
    }
  };

  emailRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setEmail(event.target.value);

    emailValidityCheck(event.target);
  };

  passwordRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setPassword(event.target.value);

    const handler = new inputEventHelperMethod(event);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      handler.preventBlur();
      return;
    }

    pwValidityCheck(event.target);
  };

  const onSaveClick = () => {
    loginStore.setCheck();
  };

  const onEmailKeyDown = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const emailHandler = new inputEventHelperMethod(undefined, input);
    emailHandler.setSubmitReady("remove");

    if (input.value.length <= 1) {
      loginStore.setEmail(input.value);
    }
  };

  const onPWKeyDown = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const passwordHandler = new inputEventHelperMethod(undefined, input);
    passwordHandler.setSubmitReady("remove");

    if (input.value.length <= 1) {
      loginStore.setPassword(input.value);
    }
  };

  const onEmailAutoComplete = (e: any) => {
    const event = e as ChangeEvent<HTMLInputElement>;

    emailValidityCheck(event.target);
  };

  const onPWAutoComplete = (e: any) => {
    const event = e as ChangeEvent<HTMLInputElement>;

    pwValidityCheck(event.target);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      setLoading(true);

      if (formState.isLoading) {
        return;
      } else {
        setLoading(false);
      }

      const loginResponse = await mutateAsync({
        email: formValue.email,
        password: formValue.password,
        isSave: loginStore.check,
      });

      if (loginResponse.response.status === 200 && loginResponse.data.token) {
        const { userInfo } = tokenParser(loginResponse.data.token);
        setUserInfo(userInfo);
        // TODO: replace 하는게 맞는건지?
        router.replace(loginStore.prevPath);
      }

      setLoading(false);
    }
  );

  useEffect(() => {
    const $Email__Input =
      document.querySelector<HTMLInputElement>("#Email__Input");
    const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");

    if ($Email__Input && $PW__Input) {
      $Email__Input.addEventListener("keydown", onEmailKeyDown);
      $PW__Input.addEventListener("keydown", onPWKeyDown);

      if (
        $Email__Input.value.length > 0 ||
        $Email__Input.defaultValue.length > 0
      ) {
        emailValidityCheck($Email__Input, $Email__Input.defaultValue);
      } else {
        $Email__Input.addEventListener("change", onEmailAutoComplete);
      }

      if ($PW__Input.value.length > 0 || $PW__Input.defaultValue.length > 0) {
        pwValidityCheck($PW__Input, $Email__Input.defaultValue);
      } else {
        $PW__Input.addEventListener("change", onPWAutoComplete);
      }
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
