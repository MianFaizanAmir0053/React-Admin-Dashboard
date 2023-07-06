import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import Single from "./pages/Single";
import List from "./pages/List";
import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/authSlice";

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const logged = localStorage.getItem("user");
  if (logged) {
    const { email, password } = JSON.parse(logged);
    // dispatch(setLoading(true));
    dispatch(setUser({ email, password }));
    // dispatch(setLoading(false));
    // dispatch(setError(null));
    // localStorage.setItem("user", JSON.stringify({ email, password }));
    //  navigate("/");
  }

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New />
                  </RequireAuth>
                }
              />
              <Route
                path=":prodId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
