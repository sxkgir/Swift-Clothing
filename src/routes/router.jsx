import { Classics } from "../Pages/Categories/Classics.jsx";
import { NewReleases } from "../Pages/Categories/NewReleases.jsx";
import { Sales } from "../Pages/Categories/Sales.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { App } from "../App.jsx";


const routes = [
    {
      path: "/",
      element: <App />, // App renders <Header /> + <Outlet />
      children: [
        {
          index:true,
          element: <Home />
        },
        {
          path: "new-releases",
          element: <NewReleases />
        },
        {
          path: "classics",
          element: <Classics />
        },
        {
          path: "sale",
          element: <Sales />
        }
      ]
    }
  ];

export default routes;  