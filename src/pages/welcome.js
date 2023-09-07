import React from "react";
import { useSession } from "next-auth/react";
import { Card } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";
const { Meta } = Card;

const Welcome = () => {
  const { data: session } = useSession();

  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: 50,
      }}
      cover={<img alt="example" src={session?.user?.image} />}
    >
      <Meta title="Next Auth" description="www.localhost.com" />
      <p> User Name : {session?.user?.name}</p>
      <p> User Email : {session?.user?.email}</p>
      <p> </p>
    </Card>
  );
};

export default Welcome;

Welcome.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
