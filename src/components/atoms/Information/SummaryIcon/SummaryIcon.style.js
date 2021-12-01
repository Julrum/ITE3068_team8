import styled from 'styled-components'

export const Icon = styled.div`
    width: 7em;
    height: 7em;
    margin-bottom: 1em;

    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;