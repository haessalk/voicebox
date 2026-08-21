import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RequireAuth from './components/RequireAuth';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import AuthGatePage from './pages/AuthGatePage';
import MyPage from './pages/MyPage';
import { ToastProvider } from './lib/ToastContext';
import { AuthProvider } from './lib/AuthContext';

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
    <ToastProvider>
      <AuthProvider>
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
                <RequireAuth>
                  <WritePage />
                </RequireAuth>
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
          <Route
            path="/login"
            element={
              <Layout>
                <AuthGatePage mode="login" />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <AuthGatePage mode="signup" />
              </Layout>
            }
          />
          <Route
            path="/mypage"
            element={
              <Layout>
                <RequireAuth>
                  <MyPage />
                </RequireAuth>
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </ToastProvider>
  );
}
