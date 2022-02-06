import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        border-collapse: separate;
    }

    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 1rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);


        &:first-child {
            color:var(--text-title)
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }

        &:first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        &:last-child {
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
        }
    }

`