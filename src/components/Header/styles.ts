import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    
`;
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        position: relative;
        right: 29%;
        
        font-size: 1.5rem;
        color: #FFF;
        font-weight: 500;
    }

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0px;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }   
    }

`;