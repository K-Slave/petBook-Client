//이메일 로그인 컴포넌트

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
      <div className="automatic_login flex right">
        <input type="checkbox" id="automatic" />
        <label htmlFor="automatic">자동로그인</label>
      </div>
      <a className="email" href="">
        로그인
      </a>
    </>
  );
};

export default EmailLogin;
