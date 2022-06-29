import LayoutWraper from "./components/LayoutWraper";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Platforms from "./pages/Platforms";
import Reviews from "./pages/Reviews";
import Hire from "./pages/Hire";
import { Alert } from "@mui/material";
import Login from "./pages/Login";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthContext from "./contexts/authContext";
import { createUserWhoIsLoggedIn } from "./firebase/firebase.utils";
import NotFound from "./pages/404";
import RequireAuth from "./components/RequireAuth";
import Me from "./pages/Me";
import AlreadyLoggedIn from "./components/AlreadyLoggedIn";
import Profile from "./pages/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
    this.unsubscribe = null;
  }

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
        };
        this.setState({ currentUser: userObj }, () => {
          createUserWhoIsLoggedIn(this.state.currentUser);
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <AuthContext.Provider value={currentUser}>
        <Router>
          <Alert
            severity="warning"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            This site is under development work. Some of functionalities may not
            be work properly. [ADMIN]
          </Alert>
          <Navbar />
          <LayoutWraper>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/allprojects" element={<AllProjects />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/hire" element={<Hire />} />
              <Route
                path="/me"
                element={
                  <RequireAuth>
                    <Me />
                  </RequireAuth>
                }
              />
              <Route
                path="/login"
                element={
                  <AlreadyLoggedIn>
                    <Login />
                  </AlreadyLoggedIn>
                }
              />
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}>
                <Route index  element={<h1>Reviews</h1>} />
                <Route path="update" element={<h1>Update</h1>} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutWraper>
          <Footer />
        </Router>
      </AuthContext.Provider>
    );
  }
}

// function App() {
//   const auth = getAuth();
//   const [currentUser, setCurrentUser] = useState(null);
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
// const userObj = {
//   displayName: user.displayName,
//   email: user.email,
//   photoURL: user.photoURL,
//   emailVerified: user.emailVerified,
//   uid: user.uid,
// };

//         setCurrentUser(userObj);
//         createUserWhoIsLoggedIn(currentUser);
//       } else {
//         setCurrentUser(null);
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [auth.onAuthStateChanged]);

//   return (
// <AuthContext.Provider value={currentUser}>
//   <Router>
//     <Alert
//       severity="warning"
//       sx={{ display: "flex", justifyContent: "center" }}
//     >
//       This site is under development work. Some of functionalities may not
//       be work properly. [ADMIN]
//     </Alert>
//     <Navbar />
//     <LayoutWraper>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/allprojects" element={<AllProjects />} />
//         <Route path="/platforms" element={<Platforms />} />
//         <Route path="/reviews" element={<Reviews />} />
//         <Route path="/hire" element={<Hire />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </LayoutWraper>
//     <Footer />
//   </Router>
// </AuthContext.Provider>
//   );
// }

export default App;
