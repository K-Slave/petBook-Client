import { commonReg } from "@lib/globalConst";

class inputEventHelperMethod {
  private e?:
    | React.FocusEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLInputElement>;
  private target?: HTMLInputElement;
  private placeHolder?: string;

  constructor(
    e?:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLInputElement>,
    target?: HTMLInputElement
  ) {
    this.e = e;
    this.target = target || e?.target;
  }

  public preventBlur = () => {
    if (!this.e) return;
    this.e.preventDefault();
    this.e.target.classList.add("valid");
  };

  public checkValidity = (which: "email" | "password") => {
    if (!this.target) return false;

    if (which === "email") {
      return commonReg.email.test(
        this.target.value || this.target.defaultValue
      );
    }

    return isValidPassword(this.target.value || this.target.defaultValue);
  };

  public setValid = (method: "add" | "remove") => {
    if (!this.target) return;

    if (method === "add") {
      this.target.classList.add("valid");
    } else {
      this.target.classList.remove("valid");
    }
  };

  public setInvalid = (method: "add" | "remove") => {
    if (!this.target) return;

    if (method === "add") {
      this.target.classList.add("invalid");
    } else {
      this.target.classList.remove("invalid");
    }
  };

  public setFocused = (method: "add" | "remove") => {
    if (!this.target || !this.target.parentElement) return;

    if (method === "add") {
      this.target.parentElement.classList.remove("Input__Blured");
      this.target.parentElement.classList.add("Input__Focused");
      this.target.setAttribute("data-placeholder", this.target.placeholder);
      this.target.placeholder = "";

      if (this.target.value.length > 0) {
        this.target.parentElement.classList.remove("Input__FadeOut");
      }
    } else {
      this.target.parentElement.classList.add("Input__Blured");
      this.target.parentElement.classList.remove("Input__Focused");

      if (this.target.value.length > 0) {
        this.target.parentElement.classList.add("Input__FadeOut");
      }

      setTimeout(() => {
        if (!this.target || !this.target.parentElement) return;
        this.target.parentElement.classList.remove("Input__Blured");
        this.target.placeholder =
          this.target.getAttribute("data-placeholder") || "";
      }, 200);
    }
  };

  static checkValidityWithValue = (
    which: "email" | "password",
    value: string
  ) => {
    if (which === "email") {
      return commonReg.email.test(value);
    }

    return isValidPassword(value);
  };

  static invalidError = (element: HTMLElement | null | undefined) => {
    if (element) {
      element.classList.add("Invalid__Error");
      element.addEventListener(
        "animationend",
        () => {
          element?.classList.remove("Invalid__Error");
        },
        { once: true }
      );
    }
  };
}

export default inputEventHelperMethod;

function isValidPassword(password: string) {
  // 입력 가능한 문자 확인
  if (!/^[A-Za-z0-9!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]*$/.test(password)) {
    return false;
  }
  // 길이 확인
  if (password.length < 8) {
    return false;
  }
  // 영문, 숫자, 특수문자 중 2가지 포함 확인
  const contains = [
    /[A-Za-z]/.test(password), // 영문 포함
    /[0-9]/.test(password), // 숫자 포함
    /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(password), // 특수문자 포함
  ];
  return contains.filter(Boolean).length >= 2;
}
