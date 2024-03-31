import { useContext } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import LayoutComponent from '../components/Layout/LayoutComponent';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { PathList } from '../constants';
import HomePage from '../pages/Home/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import LoginPage from '../pages/Login/LoginPage';
import SearchPage from '../pages/Search/SearchPage';
import MyChannelPage from '../pages/MyChannel/MyChannelPage';
import SettingPage from '../pages/Setting/SettingPage';

const useRouter = () => {
    const { user } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: PathList.loginPage,
            element: user ? <Navigate to={PathList.homePage} /> : <LoginPage />,
        },
        {
            path: '/',
            element: user ? (
                <LayoutComponent />
            ) : (
                <Navigate to={PathList.loginPage} />
            ),
            children: [
                {
                    path: PathList.homePage,
                    element: <HomePage />,
                },
                {
                    path: PathList.searchPage,
                    element: <SearchPage />,
                },
                {
                    path: PathList.myChannelPage,
                    element: <MyChannelPage />,
                },
                {
                    path: PathList.settingPage,
                    element: <SettingPage />,
                },
            ],
        },
        { path: '*', element: <NotFoundPage /> },
    ]);

    return router;
};

export default useRouter;
