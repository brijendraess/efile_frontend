import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import DirectoryPage from './pages/DirectoryPage/DirectoryPage';
import OrganizationPage from './pages/OrganizationPage/Organization';
import AddFolder from './pages/ManageFolder/AddFolder/AddFolder';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="organization" element={<OrganizationPage />} />
                    <Route path="directory" element={<DirectoryPage />} />
                    <Route path="add-folder" element={<AddFolder />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}