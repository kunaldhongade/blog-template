import Head from "../components/Head";
import PageLayout from "../components/layouts/PageLayout";
import PageContentLayout from "../components/layouts/sublayouts/PageContentLayout";
import StandardPageLayout from "../components/layouts/sublayouts/StandardPageLayout";
import { WritingContainer } from "../styles/global";

function AboutPage() {
    return (
        <>
            <Head
                title="About me and the blog | your.blog"
                description="In this page you can find out more about me and discover what's the purpose of this blog."
            />
            <PageLayout content={
                <PageContentLayout content={
                    <StandardPageLayout 
                        title="About me"
                        description="In this page you can find out more about me and discover what’s the purpose of this blog."
                        content={
                            <WritingContainer>
                                <p>
                                    Description of the blog.
                                </p>
                            </WritingContainer>
                        }       
                    />
                } />
            } />
        </>
    );
}

export default AboutPage;