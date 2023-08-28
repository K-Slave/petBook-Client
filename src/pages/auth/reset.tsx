import Button from "@/stories/common/Button";
import HelperText from "@/stories/common/Form/HelperText/HelperText";
import FocusBasedInputBox from "@/stories/common/Input/FocusBasedInputBox";

const Reset = () => {
  return (
    <div>
      <FocusBasedInputBox
        type="email"
        placeholder="이메일"
        pattern={process.env.NEXT_PUBLIC_EMAIL_REG}
      />

      <Button variant="secondary">비밀번호 재설정 이메일 보내기</Button>
      <HelperText
        message={{
          error: "이메일 형식이 올바르지 않습니다.",
        }}
        status="error"
      />
    </div>
  );
};

export default Reset;
