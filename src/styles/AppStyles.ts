import styled from '@emotion/styled';
export const LoaderComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ParentComponent = styled.div`
  width: 100%;
  max-height: 99vh;
  font-family: Space Mono;
  @media (min-width: 340px) and (max-width: 648px) {
    padding: 0px 8px;
  }
  @media (min-width: 649px) and (max-width: 870px) {
    padding: 0px 28px;
  }
  @media (min-width: 871px) and (max-width: 990px) {
    padding: 0px 34px;
  }
  @media (min-width: 991px) and (max-width: 1280px) {
    padding: 0px 50px;
  }
  @media (min-width: 1281px) {
    padding: 0px 86px;
  }
`;
//w-full h-full font-SpaceMono px-10 sm:px-16 md:px-20 lg:px-28 xl:px-32
