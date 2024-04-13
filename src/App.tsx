import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Header from './components/Header'
import { useState, useEffect } from 'react';
import i18n from 'i18next';

export const useLocale = (): [string, (newLocale: string) => void] => {
  const [locale, setLocale] = useState('');

  useEffect(() => {
    const updateURL = (newLocale: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('locale')) {
        searchParams.set('locale', newLocale);
      } else {
        searchParams.append('locale', newLocale);
      }
      window.history.pushState({}, '', `${window.location.origin}${window.location.pathname}?${searchParams}`);
    };
    i18n.changeLanguage(locale)
    updateURL(locale);
  }, [locale]);

  return [locale, setLocale];
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/page404" element={<Page404 />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
