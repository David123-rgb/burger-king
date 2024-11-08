import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Components/home/Home";
import { Order } from "./Components/Order/Order";

import { Offers } from "./Components/Offers/Offers";
import { Restuarant } from "./Components/Restuarant/Restuarant";
import { Career } from "./Components/Career/Career";
import { News } from "./Components/News/News";
import { Menu } from "./Components/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/restaurants",
    element: <Restuarant />,
  },
  {
    path: "/careers",
    element: <Career />,
  },
  {
    path: "/News",
    element: <News />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
