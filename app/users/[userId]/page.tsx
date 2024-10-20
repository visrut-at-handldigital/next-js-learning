import React from "react";

interface UserDetailPageProps {
  params: {
    userId: number;
  };
}

const UserDetailPage = ({ params: { userId } }: UserDetailPageProps) => {
  return <div>UserDetailPage {userId}</div>;
};

export default UserDetailPage;
