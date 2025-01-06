"use client"

import withAuth  from "@/middelware/withAuth";

const Profile:React.FC = () =>  {
    return <h1>Profile Page</h1>;
}

export default withAuth(Profile);
