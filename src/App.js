// App.js
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import TrangChu from './pages/TrangChu';
import TraCuu from './pages/TraCuu';
import ThongKe from './pages/ThongKe';
import Login from './pages/Login';
import NotFound from './pages/Notfound';
// import NotFound from './pages/NotFound'; // nếu cần

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrangChu />} /> {/* tương đương path="/" */}
        <Route path="TraCuu" element={<TraCuu />} />
        <Route path="ThongKe" element={<ThongKe />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
