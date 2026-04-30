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
        <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <div className="relative flex items-center" style={{ borderBottom: '1px solid var(--ink)' }}>
                <Search className="h-3.5 w-3.5" style={{ color: 'var(--ink-muted)' }} />
                <input
                    type="search"
                    placeholder="Arşivde ara..."
                    className="w-full bg-transparent border-none px-2 py-1.5 text-[13px] outline-none placeholder:italic"
                    style={{ color: 'var(--ink)', fontFamily: 'Source Serif 4, Georgia, serif' }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
}
