import styled from 'styled-components'

export const Title = styled.h1`
    position: relative;
    margin-bottom: 1em;
    font-size: 3.5em;
`;

export const CandImage = styled.div`
    width: 25em;
    height: 100%;
    
    position: relative;

    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Profile = styled.div`
    width: fit-content;
    position: relative;
    font-size: 1em;

    left: 10%;
`;

export const Profiles = styled.div`
    height: 50em;
    width: 80%;
    margin: 0 10%;
    display: flex;
    position: relative;

    flex-direction: row;
    align-items: center;
`;

export const Cell = styled.div`
    width: 25em;
    height: 15em;
    margin: 10px;
`;

export const CellList = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Promise = styled.div`
    width: 80%;
    margin: 5% 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

export const PageTemplate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;