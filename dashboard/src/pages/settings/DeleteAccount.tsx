import { useEffect, useState } from "react";
import Head from "../../components/Head";
import PageLayout from "../../components/layouts/PageLayout";
import PageContentLayout from "../../components/layouts/sublayouts/PageContentLayout";
import { SidebarLayoutTitle } from "../../components/layouts/sublayouts/SidebarLayout";
import LoadingComponent from "../../components/utils/LoadingComponent";
import { useDeleteAccountMutation, useMeQuery } from "../../generated/graphql";
import { Button, FlexContainer24, LoadingContainer, OptionContainer, OptionTitle, PageBlock, PageText, Status } from "../../styles/global";
import SettingsComponent from "./SettingsComponent";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../utils/token";

const DeleteAccountPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

const DeleteAccountButton = styled(Button)`
    background-color: blue;
    color: #ffffff;
`;

function DeleteAccount() {
    const { data, loading, error } = useMeQuery({
        fetchPolicy: "cache-and-network",
        variables: { origin: "dash" },
    });

    const navigate = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (data && data.me && data.me.role === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [data]);

    const [deleteAccount, { client }] = useDeleteAccountMutation();

    return (
        <>
            <Head
                title="Delete your account | dashboard.your.blog"
                description="In this page you can delete all of your account data."
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
                                                    Delete your account
                                                </SidebarLayoutTitle>
                                                <DeleteAccountPageContent>
                                                    <PageText>
                                                        In this page you can delete all of your account data. By deleting your account, these effects will take place:
                                                    </PageText>
                                                    <OptionContainer>
                                                        <OptionTitle>
                                                            Delete your data
                                                        </OptionTitle>
                                                        <PageText>
                                                            Here you can delete your account. Know that once that you delete your account, all of your profile information, posts and images will be permanently deleted.
                                                        </PageText>
                                                        <PageBlock>
                                                            <Formik
                                                                initialValues={{
                                                                    origin: "dash"
                                                                }}
                                                                onSubmit={async (
                                                                    values,
                                                                    { setStatus }
                                                                ) => {
                                                                    const response = await deleteAccount({
                                                                        variables: values,
                                                                    });
    
                                                                    setStatus(response.data?.deleteAccount.status);
                                                                    
                                                                    if (response.data?.deleteAccount.ok) {
                                                                        setAccessToken("");
                                                                        await client!.resetStore();
                                                                        navigate(0);
                                                                    }
                                                                }}
                                                            >
                                                                {({ status }) => (
                                                                    <Form>
                                                                        {status ? <Status>{status}</Status> : null}
                                                                        <FlexContainer24>
                                                                            <PageBlock>
                                                                                <DeleteAccountButton
                                                                                    type="submit"
                                                                                    role="button"
                                                                                    title="Delete your data"
                                                                                    aria-label="Delete your data"
                                                                                >
                                                                                    Delete your data
                                                                                </DeleteAccountButton>
                                                                            </PageBlock>
                                                                        </FlexContainer24>
                                                                    </Form>
                                                                )}
                                                            </Formik>
                                                        </PageBlock>
                                                    </OptionContainer>
                                                </DeleteAccountPageContent>
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

export default DeleteAccount;
