import { COLORS, KAKAO_LOGIN_URL } from 'src/constants';
import { styled } from 'styled-components';

const SplashPage = () => {
  const onClickKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <Layout>
      <MainContainer>
        <MainImageWrapper>
          <Image src="" alt="profile_img" />
        </MainImageWrapper>
        <div>바오,봐요</div>
      </MainContainer>
      <BottomButtonWrapper>
        <KakaoButton onClick={onClickKakaoLogin}>
          <ImageWrapper>
            <img src="/images/kakao_login.png" alt="kakao_login" />
          </ImageWrapper>
          카카오로 시작하기
        </KakaoButton>
      </BottomButtonWrapper>
    </Layout>
  );
};

export default SplashPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 18rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_400};
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  margin: 0.6rem 1.2rem 2.4rem 1.2rem;
  bottom: 0;
  width: calc(100% - 2.4rem);
`;

const KakaoButton = styled.div`
  width: 100%;
  height: 58px;
  background-color: #ffe42d;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
