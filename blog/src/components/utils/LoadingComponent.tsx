import styled from "styled-components";

const LoadingComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const LoadingComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    transform-origin: center;
    animation: rotation 1s infinite linear;

    svg {
        width: 32px;
        height: 32px;
    }
`;

function LoadingComponent() {
    return (
        <LoadingComponentWrapper>
            <LoadingComponentContainer>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="11"
                        stroke="black"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <path
                        d="M19.0711 4.92893C20.8807 6.73858 22 9.23858 22 12H24C24 11.3282 23.9436 10.6593 23.8322 10C23.6822 9.11275 23.4325 8.24307 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913445C15.7569 0.567465 14.8873 0.317814 14 0.16784C13.3407 0.0564043 12.6718 0 12 0V2C14.7614 2 17.2614 3.11929 19.0711 4.92893Z"
                        fill="black"
                    />
                </svg>
            </LoadingComponentContainer>
        </LoadingComponentWrapper>
    );
}

export default LoadingComponent;
