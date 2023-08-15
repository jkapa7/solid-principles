// import { Link, useLocation } from "react-router-dom";

//SOLID PRINCIPLES

// (OCP)
// OPEN CLOSED PRINCIPLE
// OPEN TO EXTENDS, CLOSED TO MODIFICATION

// const Header = () => {
//   const { pathname } = useLocation();

//   return (
//     <header>
//       {/* <Logo /> */}
//       {/* <Actions> */}
//       {pathname === "/dashboard" && <Link to="/events/new">Create event</Link>}
//       {pathname === "/" && <Link to="/dashboard">Go to dashboard</Link>}
//       {/* </Actions> */}
//     </header>
//   );
// };

// export const HomePage = () => (
//   <>
//     <Header />
//     {/* <OtherHomeStuff /> */}
//   </>
// );

// export const DashboardPage = () => (
//   <>
//     <Header />
//     {/* <OtherDashboardStuff /> */}
//   </>
// );

// // const Header = ({ children }) => (
// //   <header>
// //     <Logo />
// //     <Actions>{children}</Actions>
// //   </header>
// // );

// export const HomePage = () => (
//   <>
//     <Header>
//       <Link to="/dashboard">Go to dashboard</Link>
//     </Header>
//     {/* <OtherHomeStuff /> */}
//   </>
// );
// export const DashboardPage = () => (
//   <>
//     <Header>
//       <Link to="/events/new">Create event</Link>
//     </Header>
//     {/* <OtherDashboardStuff /> */}
//   </>
// );
