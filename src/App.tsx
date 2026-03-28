import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, CatalogPage, ContactsPage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased overflow-x-hidden flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
