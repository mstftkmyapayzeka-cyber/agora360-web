import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
    return (
        <div
            className="flex min-h-screen flex-col"
            style={{ background: 'var(--paper)', color: 'var(--ink)' }}
        >
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
