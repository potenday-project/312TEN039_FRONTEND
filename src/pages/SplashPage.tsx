import { KAKAO_LOGIN_URL } from 'src/constants';

const SplashPage = () => {
  const onClickKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <div>
      <button onClick={onClickKakaoLogin}>카카오 로그인</button>
    </div>
  );
};

export default SplashPage;
