import styled from "styled-components";
import Head from "../components/Head";
import Logo from "../components/icons/Logo";
import { devices } from "../styles/devices";
import { LinkButton, PageBlock, PageText } from "../styles/global";

const IndexPage = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 48px);
    justify-content: space-between;
    gap: 84px;
    margin-top: 48px;
    margin-left: 24px;
    margin-right: 24px;

    @media ${devices.mobileS} {
        margin-left: 32px;
        margin-right: 32px;
    }

    @media ${devices.mobileL} {
        margin-left: 14%;
        margin-right: 14%;
    }

    @media ${devices.tablet} {
        margin-left: 16%;
        margin-right: 16%;
    }

    @media ${devices.laptopS} {
        margin-left: 24%;
        margin-right: 24%;
    }

    @media ${devices.laptopM} {
        margin-left: 30%;
        margin-right: 30%;
    }

    @media ${devices.desktop} {
        margin-left: 32%;
        margin-right: 32%;
    }
`;

const IndexPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

const IndexLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IndexTitle = styled.div`
    display: block;
    font-size: 42px;
    font-weight: 700;

    @media ${devices.tablet} {
        font-size: 64px;
    }
`;

const AuthLinkButton = styled(LinkButton)`
    background-color: blue;
    color: #ffffff;
`;

const IndexPageFooter = styled.footer`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 80px;
    border-top: 2px solid #000000;
    font-size: 14px;
    column-gap: 12px;
    row-gap: 4px;
`;

const FooterItem = styled(PageText)`
    display: block;
    text-rendering: optimizeLegibility;
`;

function Index() {
    return (
        <>
            <Head
                title="Dashboard | your.blog"
                description="A dashboard for your.blog."
            />
            <IndexPage>
                <IndexPageContent>
                    <IndexLogoContainer>
                        <Logo type="index-logo" />
                    </IndexLogoContainer>
                    <IndexTitle>A dashboard for your.blog</IndexTitle>
                    <PageBlock>
                        <AuthLinkButton
                            to="/login"
                            title="Log in to the dashboard"
                            aria-label="Log in to the dashboard"
                        >
                            Log in
                        </AuthLinkButton>
                    </PageBlock>
                </IndexPageContent>
                <IndexPageFooter>
                    <FooterItem>
                        &copy; {new Date().getFullYear()} your.blog
                    </FooterItem>
                    <FooterItem>
                        <a
                            href="https://your.blog"
                            target="_blank"
                            title="your.blog"
                            rel="noreferrer"
                            aria-label="your.blog"
                        >
                            Blog
                        </a>
                    </FooterItem>
                    <FooterItem>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            title="Your official Twitter account"
                            rel="noreferrer"
                            aria-label="Your official Twitter account"
                        >
                            Twitter
                        </a>
                    </FooterItem>
                </IndexPageFooter>
            </IndexPage>
        </>
    );
}

export default Index;
