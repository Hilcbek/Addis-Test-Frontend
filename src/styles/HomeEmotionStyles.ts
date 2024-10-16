import styled from '@emotion/styled';
interface MainContainerProps {
  isThereData: number; // Change this to boolean if it's a boolean condition
}
interface dropSearchProp {
  dropProp: boolean;
}
export const MainContainer = styled.div<MainContainerProps>`
  width: 100%;
  max-height: 91vh;
  height: 100%;
  display: flex;
  gap: 20px;
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
export const HomeSubContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const MainTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  width: 100%;
`;
export const InputSearchDiv = styled.div<dropSearchProp>`
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 0px 20px;
  transition: 1s all linear;
  transform-origin: right;
  ${({ dropProp }) =>
    dropProp
      ? `width : 100%; visibility : visible;`
      : `width : 0%; visibility : hidden;`}
`;
export const InputSearch = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 20px 0px;
`;
export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    left: 12%;
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
