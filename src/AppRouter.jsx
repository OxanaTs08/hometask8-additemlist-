import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import ListItems from './components/ListItems';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listitems" element={<ListItems />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
