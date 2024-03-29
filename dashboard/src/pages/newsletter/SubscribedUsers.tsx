import { useEffect, useState } from "react";
import Head from "../../components/Head";
import PageLayout from "../../components/layouts/PageLayout";
import PageContentLayout from "../../components/layouts/sublayouts/PageContentLayout";
import { SidebarLayoutTitle } from "../../components/layouts/sublayouts/SidebarLayout";
import LoadingComponent from "../../components/utils/LoadingComponent";
import { useSubscribedUsersQuery, useMeQuery } from "../../generated/graphql";
import { LoadingContainer, PageTextMB48 } from "../../styles/global";
import SettingsComponent from "./NewsletterComponent";
import SearchBoxComponent from "../../components/utils/SearchBox";

function SubscribedUsers() {
    const { data, loading, error } = useMeQuery({
        fetchPolicy: "cache-and-network",
        variables: { origin: "dash" },
    });

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (data && data.me && data.me.role === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [data]);

    const { data: subscribedUsersData } = useSubscribedUsersQuery({ fetchPolicy: "network-only" });

    return (
        <>
            <Head 
                title="Subscribed users | dashboard.your.blog"
                description="In this page you can manage the your.blog newsletter subscribed users."
            />
            <PageLayout
                content={
                    <PageContentLayout
                        content={
                            <SettingsComponent
                                isAdmin={isAdmin}
                                content={
                                    <>
                                        {(loading && !data) || error ? (
                                            <LoadingContainer>
                                                <LoadingComponent />
                                            </LoadingContainer>
                                        ) : (
                                            <>
                                                <SidebarLayoutTitle>
                                                    Subscribed users
                                                </SidebarLayoutTitle>
                                                <PageTextMB48>
                                                    In this page you can manage the your.blog newsletter subscribed users.
                                                </PageTextMB48>
                                                <SearchBoxComponent data={subscribedUsersData?.subscribedUsers || []} type="user" nocontrol={true} />
                                            </>
                                        )}
                                    </>
                                }
                            />
                        }
                    />
                }
            />
        </>
    );
}

export default SubscribedUsers;