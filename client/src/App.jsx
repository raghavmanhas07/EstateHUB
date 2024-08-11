import React, { Suspense } from 'react';
import './App.css';
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import Properties from './pages/Properties/Properties';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/Property/Property';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import UserDetailContext from './context/UserDetailContext';
import Bookings from './components/Bookings/Bookings';

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  });

  return (

    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<Website />} />
                  <Route path='/properties'>
                    <Route index element={<Properties />} />
                    <Route path=":propertyId" element={<Property />} />
                  </Route>
                  <Route path='/bookings' element={<Bookings/>}/>
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </MantineProvider>
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}
export default App;
