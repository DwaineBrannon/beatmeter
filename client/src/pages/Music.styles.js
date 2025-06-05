import styled from 'styled-components';

export const MusicPageContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 20px 40px;
  }
  
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const MusicHeader = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 2px 2px 4px rgba(131, 131, 131, 0.5);
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  width: 400px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #1db954;
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ContentContainer = styled.div`
  min-height: 400px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  padding: 0 10px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 18px;
  }
  
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    padding: 0 5px;
  }
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    padding: 0;
  }
`;



export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 60px 0;
`;

export const ErrorMessage = styled.div`
  background-color: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`;