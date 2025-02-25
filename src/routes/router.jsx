import { Classics } from "../Pages/Categories/Classics.jsx";
import { NewReleases } from "../Pages/Categories/NewReleases.jsx";
import { Sales } from "../Pages/Categories/Sales.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { App } from "../App.jsx";
import { AboutUs } from "../Pages/CompanyInfo/AboutUs.jsx";
import { Checkout } from "../Pages/Checkout/Checkout.jsx";

const routes = [
    {
      path: "/",
      element: <App />, 
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
        },
        {
          path: "about-us",
          element: <AboutUs />
        },
        {
          path: "checkout",
          element: <Checkout />
        }
      ]
    }
  ];

export default routes;  