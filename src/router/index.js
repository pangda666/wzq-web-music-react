import { useRoutes, Navigate } from "react-router-dom";
// 一级路由
import PDDiscover from "../pages/discover";
import PDFollow from "../pages/follow";
import PDMine from "../pages/mine";

// 二级路由
import Recommend from "../pages/discover/c-pages/recommend"; // 推荐
import Album from "../pages/discover/c-pages/album"; // 歌单
import Artist from "../pages/discover/c-pages/artist"; // 
import Djradio from "../pages/discover/c-pages/djradio"; // 主播电台
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs"; //


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