import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <div>
      <Link href={"/users/new"}>New Users</Link>
    </div>
  );
};

export default UsersPage;
