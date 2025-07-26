import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import Home2 from '../pages/Home2';
import Home3 from '../pages/Home3';
import Home4 from '../pages/Home4';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';
import ComingSoon from '../pages/ComingSoon';
import UnderMaintence from '../pages/UnderMaintence';
import ServerError from '../pages/ServerError';
import NotFound from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
const RoutesPath = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='home2' element={<Home2 />} />
                    <Route path='home3' element={<Home3 />} />
                    <Route path='home4' element={<Home4 />} />
                    <Route path='pricing' element={<Pricing />} />
                    <Route path='blog' element={<Blog />} />
                </Route>
                <Route path='coming-soon' element={<ComingSoon />} />
                <Route path='under-maintence' element={<UnderMaintence />} />
                <Route path='server-error' element={<ServerError />} />
                <Route path='*' element={<NotFound />} />
                <Route path='sign-in' element={<SignIn />} />
            </Routes>
        </>
    )
}

export default RoutesPath
