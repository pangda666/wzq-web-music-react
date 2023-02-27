import { useRoutes, Navigate, redirect } from "react-router-dom";
import PDDiscover from "../pages/discover";
import PDFollow from "../pages/follow";
import PDMine from "../pages/mine";
import Recommend from "../pages/discover/c-pages/recommend";
import Album from "../pages/discover/c-pages/album";
import Artist from "../pages/discover/c-pages/artist";
import Djradio from "../pages/discover/c-pages/djradio";
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs";


const CustomRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/discover'/>,
    },
    {
      path: '/discover',
      element: <PDDiscover/>,
      children: [
        {
          path: 'recommend',
          element: <Recommend/>
        },
        {
          path: 'album',
          element: <Album/>
        },
        {
          path: 'artist',
          element: <Artist/>
        },
        {
          path: 'djradio',
          element: <Djradio/>
        },
        {
          path: 'ranking',
          element: <Ranking/>
        },
        {
          path: 'songs',
          element: <Songs/>
        },
      ]
    },
    {
      path: '/mine',
      element: <PDMine/>
    },
    {
      path: '/follow',
      element: <PDFollow/>
    },
  ]);

  return element;
}

export default CustomRouter;