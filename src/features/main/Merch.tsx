import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Merch = () => {
  return (
    <MetchLayout>
      <Link to={`https://brand.naver.com/everland/category/5f55be35cdbd4bad809c6ff564cef5ac?cp=1`}>
        바오네 공식 스토어
      </Link>
    </MetchLayout>
  );
};

export default Merch;

const MetchLayout = styled.div`
  display: flex;
  height: 61px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin-top: 18px;
`;
