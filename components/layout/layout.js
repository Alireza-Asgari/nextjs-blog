import MainHeader from "./main-header";
function Layout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
export default Layout;
