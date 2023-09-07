import { Layout, Menu, Button } from "antd";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const { Header } = Layout;
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="navbar-style">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          PC Builder
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "25%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} href="/">
          <items> Home</items>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/categories"
        >
          <items> Categories</items>
        </Link>

        {session?.user ? (
          <items>
            <Button type="primary" danger onClick={() => signOut()}>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
        <Link href="/pcbuild">
          <items>
            <Button type="primary">PC Builder</Button>
          </items>
        </Link>
      </Menu>
    </Header>
  );
};
export default Navbar;
