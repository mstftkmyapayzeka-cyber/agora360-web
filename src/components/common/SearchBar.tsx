import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <input
                    type="search"
                    placeholder="Ara..."
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-md pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
}
