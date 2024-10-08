import React, { lazy, Suspense, useEffect, useState } from "react";
//Suspense is a component given by react (starts with the capital letter) rap component of grocery in <Suspense></Suspense> for execution
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenuPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmerr";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


//{ chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import }
// lazy is a function given by react (use for bundling)
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"))

const Contact = lazy(() => import("./components/Contact"))

const AppLayout = () => {

    const [username, setUserName] = useState();

    //Authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Abhishek",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
                <div className="app">
                    <Header />
                    {/* Outlet will be replace by the path */}
                    <Outlet />
                </div >
            </UserContext.Provider >
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />} >  <About /> </Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer />} >  <Contact /> </Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />} > <Grocery /> </Suspense>,
                // grocery is not available at the moment thats why we put Suspense component given bt react.. fallback={} is like a placeholder
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Shimmer />} >  <Cart /> </Suspense>,

            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);