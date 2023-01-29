import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [user, setUser] = useState({});
    const { userInfo, loading } = useSelector((state) => ({
      ...state.Auth,
    }));
    useEffect(() => {
      // Fetch user data here and set it using setUser
      // For example:
      setUser(userInfo);
    }, [loading]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      Router.push("/unauthorised");
      return null;
    }

    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };

  WithAuth.getInitialProps = async (ctx) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return { ...wrappedComponentInitialProps };
  };

  return WithAuth;
};

export default withAuth;
