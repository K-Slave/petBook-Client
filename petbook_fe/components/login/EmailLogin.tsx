const EmailLogin = () => {
  return (
    <>
      <div className="login_form">
        <label htmlFor="id">
          <input type="text" id="id" placeholder="이메일 아이디" />
        </label>
        <label htmlFor="password">
          <input type="text" id="password" placeholder="비밀번호" />
        </label>
      </div>

      <a className="email" href="">
        로그인
      </a>
    </>
  );
};

export default EmailLogin;
