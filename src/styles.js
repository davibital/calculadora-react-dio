import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 105, .5);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 1rem;
`

export const Title = styled.h1`
    color: rgb(0, 0, 105);
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: fit-content;
    min-height: 350px;
    min-width: 410px;

    border-radius: 1rem;

    padding: 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-beetween;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-beetween;
    align-items: center;
`