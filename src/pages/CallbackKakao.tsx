import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const CallbackKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // TODO: backend에 code 전달
      console.log(code);
      navigate(ROUTES.MAIN);
    }
  }, [code, navigate]);
  return <></>;
};

export default CallbackKakao;
