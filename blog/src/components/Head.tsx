import { FunctionComponent, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface HeadProps {
    title: string;
    description: string;
    blogPost?: boolean;
    image?: string;
}

const Head: FunctionComponent<HeadProps> = ({ title, description, blogPost, image }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
                property="og:image"
                content={image ? image : ""}
            />
            <meta name="twitter:card" content={blogPost ? "summary_large_image" : "summary"} />
            <meta
                property="twitter:image"
                content={image ? image : ""}
            />
        </Helmet>
    );
};

export default Head;
