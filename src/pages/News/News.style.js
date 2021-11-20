import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContentLayout = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  /* margin: 60px 120px 1200px 120px; */
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 120px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const Label = styled.div`
  margin-bottom: 10px;
`;

export const Section = styled.div`
  max-width: 100%;
  border: hidden;
  display: flex;
  flex-direction: column;
`;
