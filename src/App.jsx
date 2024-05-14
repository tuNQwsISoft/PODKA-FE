import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/useRouter';
import PodcastCollapseComponent from './components/Podcast/PodcastCollapse/PodcastCollapseComponent';

const App = () => {
    const router = useRouter();
    return (
        <Suspense fallback={'...'}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default App;
