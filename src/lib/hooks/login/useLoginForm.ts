import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  FormEventHandler,
  useEffect,
} from "react";
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
import Cookies from "js-cookie";
import { memoizedValue } from "@lib/globalConst";

const useLoginForm = (props?: UseFormProps) => {
  const router = useRouter();
  const loginStore = useLoginStore();
  const setLoading = useSetRecoilState(loadingState);
  const { mutateAsync, setUserInfo, status, failureReason, errorHelperText } =
    useLoginMutaion();
  const { register, handleSubmit, formState, getValues } = useForm<{
    email: string;
    password: string;
    checkbox: boolean;
  }>();
  const emailRegister = register("email");
  const passwordRegister = register("password");
  const checkBoxRegister = register("checkbox");

  emailRegister.maxLength = authOptions.email.max;
  passwordRegister.minLength = authOptions.password.min;
  passwordRegister.maxLength = authOptions.password.max;

  emailRegister.disabled = formState.isLoading;
  passwordRegister.disabled = formState.isLoading;

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
    } else if (!vaildityResult) {
      emailHandler.setInvalid("add");
      emailHandler.setValid("remove");
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
    } else if (!vaildityResult) {
      passwordHandler.setInvalid("add");
      passwordHandler.setValid("remove");
    }
  };

  emailRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;
    const emailHandler = new inputEventHelperMethod(event);

    loginStore.setEmail(event.target.value);

    emailHandler.setFocused("remove");
    emailValidityCheck(event.target);
  };

  passwordRegister.onBlur = async (e) => {
    const event = e as FocusEvent<HTMLInputElement>;

    loginStore.setPassword(event.target.value);

    const passwordHandler = new inputEventHelperMethod(event);

    if (event.relatedTarget?.classList.contains("Show__Hide__Button")) {
      passwordHandler.preventBlur();
      return;
    }

    passwordHandler.setFocused("remove");
    pwValidityCheck(event.target);
  };

  const onEmailFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    const emailHandler = new inputEventHelperMethod(undefined, e.target);

    emailHandler.setFocused("add");
  };

  const onPWFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    const passwordHandler = new inputEventHelperMethod(undefined, e.target);

    passwordHandler.setFocused("add");
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

    emailValidityCheck(event.target);
  };

  const onPWAutoComplete = (e: any) => {
    const event = e as ChangeEvent<HTMLInputElement>;

    pwValidityCheck(event.target);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = handleSubmit(
    async (formValue) => {
      localConsole?.log(formValue, "formValue");
      // onSubmit 이벤트가 발생하면서, formState.isLoading 값이 true로 바뀌는데,
      // 이때, 다시 한번 submit 이벤트가 발생하면 아래의 코드가 실행되지 않는다.
      if (formState.isLoading) {
        return;
      }

      const $Email__Input = document.querySelector("#Email__Input");
      const $Email__Label = $Email__Input?.parentElement as
        | HTMLLabelElement
        | null
        | undefined;

      const $PW__Input = document.querySelector<HTMLInputElement>("#PW__Input");
      const $PW__Label = $PW__Input?.parentElement as
        | HTMLLabelElement
        | null
        | undefined;

      const isEmailValid = inputEventHelperMethod.checkValidityWithValue(
        "email",
        formValue.email
      );
      const isPasswordValid = inputEventHelperMethod.checkValidityWithValue(
        "password",
        formValue.password
      );

      if (!isEmailValid && !isPasswordValid) {
        inputEventHelperMethod.invalidError($Email__Label);
        inputEventHelperMethod.invalidError($PW__Label);
        return;
      } else if (!isEmailValid) {
        inputEventHelperMethod.invalidError($Email__Label);
        return;
      } else if (!isPasswordValid) {
        inputEventHelperMethod.invalidError($PW__Label);
        return;
      }
      setLoading(true);

      const loginResponse = await mutateAsync({
        email: formValue.email,
        password: formValue.password,
        isSave: formValue.checkbox,
      });

      setLoading(false);

      if (
        loginResponse.response.status === 200 &&
        loginResponse.response.data.token
      ) {
        const { userInfo } = tokenParser(loginResponse.response.data.token);
        setUserInfo(userInfo);

        const prevPath = Cookies.get(memoizedValue.prevPath);

        Cookies.remove(memoizedValue.prevPath);

        // TODO: replace 하는게 맞는건지?
        router.replace(prevPath || "/");
      }
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
    checkBoxRegister,
    evenvtHandler: {
      onSubmit,
      onEmailFocus,
      onPWFocus,
    },
  };
};

export default useLoginForm;
