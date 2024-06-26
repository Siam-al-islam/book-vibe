import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PageToRead/PagesToRead.jsx';
import KidsZone from './Components/KidsZone/KidsZone.jsx';
import BestDeals from './Components/BestDeals/BestDeals.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch('/public/books.json')
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        loader: () => fetch("/public/books.json")
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />,
        loader: () => fetch("/public/books.json")
      },
      {
        path: "/kids",
        element: <KidsZone />
      },
      {
        path: "/bestdeals",
        element: <BestDeals />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
