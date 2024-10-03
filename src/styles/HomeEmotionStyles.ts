import styled from '@emotion/styled';
interface MainContainerProps {
  isThereData: number; // Change this to boolean if it's a boolean condition
}
export const MainContainer = styled.div<MainContainerProps>`
  width: 100%;
  max-height: 91vh;
  display: flex;
  ${({ isThereData }) =>
    isThereData
      ? `
        align-items : start;
        justify-content: start;
    `
      : `
    justify-content: center;
    align-items : center;
    `};
  flex-direction: column;
  @media (max-width: 340px) {
    padding: 0px 12px;
  }
  @media (max-width: 640px) {
    padding: 0px 18px;
  }
  @media (max-width: 768px) {
    padding: 0px 18px;
  }
  @media (max-width: 1024px) {
    padding: 0px 18px;
  }
  @media (max-width: 1280px) {
    padding: 0px 18px;
  }
  @media (max-width: 1536px) {
    padding: 0px 18px;
  }
`;
export const HeaderContainer = styled.h1`
  font-size: 30px;
  text-decoration: underline;
`;
export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PagianationContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  position: fixed;
  @media (min-width: 340px) and (max-width: 700px) {
    left: 20%;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    left: 36%;
  }
  @media (min-width: 1000px) and (max-width: 2100px) {
    left: 41%;
  }
`;
export const PagianationButtonContainer = styled.div`
  padding: 10px;
  border-radius: 100%;
  border: 1px solid #aaa;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    transform: scale(0.8);
  }
  transition: 0.3 all linear;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }
`;
//w-full gap-5 flex items-center justify-center flex-col
