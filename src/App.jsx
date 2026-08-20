import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/write"
        element={
          <Layout>
            <WritePage />
          </Layout>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <Layout>
            <DetailPage />
          </Layout>
        }
      />
    </Routes>
  );
}
