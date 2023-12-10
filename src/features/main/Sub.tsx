import { COLORS } from 'src/constants';
import styled from 'styled-components';

const Sub = ({ title, note }: { title: string; note: string }) => {
  return (
    <SubLayout>
      <ImgBox>
        <ImgLayout />
      </ImgBox>
      <SubContent>
        <SubTitlt>{title}</SubTitlt>
        <SubNote>{note}</SubNote>
      </SubContent>
    </SubLayout>
  );
};

export default Sub;

const SubLayout = styled.div`
  width: 163px;
  height: 215px;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ImgLayout = styled.div`
  width: 91px;
  height: 91px;
  background-color: ${COLORS.GRAY_400};
  border-radius: 50%;
`;

const SubContent = styled.div`
  margin-left: 15px;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubTitlt = styled.span`
  display: inline-block;
  color: ${COLORS.GRAY_800};
`;
const SubNote = styled.span`
  display: inline-block;
  color: ${COLORS.GRAY_500};
`;
