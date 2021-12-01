import styled from 'styled-components'

export const Icon = styled.div`
    width: 10em;
    height: 10em;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;