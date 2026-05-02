import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Loader2 } from 'lucide-react';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_KEY = 'admin_password';
const ADMIN_ENABLED_KEY = 'admin_enabled';
const ADMIN_AUTH_KEY = 'admin_auth';
const DEFAULT_PASSWORD = 'admin1234';

export function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [adminEnabled, setAdminEnabled] = useState(true);
    const [resetMessage, setResetMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedEnabled = localStorage.getItem(ADMIN_ENABLED_KEY);
        setAdminEnabled(storedEnabled === null ? true : storedEnabled === 'true');
    }, []);

    const getStoredPassword = () => {
        return localStorage.getItem(ADMIN_PASSWORD_KEY) || 'agora360';
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!adminEnabled) {
            setError('Yönetici girişi şu anda devre dışı. Lütfen önce aktifleştirin.');
            setLoading(false);
            return;
        }

        setTimeout(() => {
            const storedPassword = getStoredPassword();
            if (username === ADMIN_USERNAME && password === storedPassword) {
                localStorage.setItem(ADMIN_AUTH_KEY, 'true');
                navigate('/admin');
            } else {
                setError('Geçersiz kullanıcı adı veya şifre!');
            }
            setLoading(false);
        }, 1000);
    };

    const handleResetAdmin = () => {
        localStorage.setItem(ADMIN_PASSWORD_KEY, DEFAULT_PASSWORD);
        localStorage.setItem(ADMIN_ENABLED_KEY, 'false');
        localStorage.removeItem(ADMIN_AUTH_KEY);
        setAdminEnabled(false);
        setResetMessage(
            `Yönetici giriş bilgileri sıfırlandı. Geçici şifre: "${DEFAULT_PASSWORD}". Yönetici girişi devre dışı bırakıldı. Tekrar aktifleştirmek için aşağıdaki düğmeye basın.`
        );
    };

    const handleEnableAdmin = () => {
        localStorage.setItem(ADMIN_ENABLED_KEY, 'true');
        setAdminEnabled(true);
        setResetMessage('Yönetici girişi tekrar etkinleştirildi. Lütfen yeni şifre ile giriş yapın.');
    };

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-8 bg-indigo-600">
                    <h1 className="text-3xl font-bold text-white text-center">Agora360</h1>
                    <p className="text-indigo-100 text-center mt-2 font-medium uppercase tracking-widest text-xs">Yönetici Girişi</p>
                </div>
                
                <form onSubmit={handleLogin} className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg text-sm font-medium border border-red-100 dark:border-red-900/30 text-center">
                            {error}
                        </div>
                    )}
                    {resetMessage && (
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-200 p-4 rounded-lg text-sm font-medium border border-emerald-100 dark:border-emerald-900/30 text-center">
                            {resetMessage}
                        </div>
                    )}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Kullanıcı Adı</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none dark:text-white"
                                placeholder="admin"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={!adminEnabled}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Şifre</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="password"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none dark:text-white"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !adminEnabled}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Giriş Yap'}
                    </button>

                    <div className="flex flex-col gap-3 pt-4">
                        <button
                            type="button"
                            onClick={handleResetAdmin}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-500/30 transition-all"
                        >
                            Yönetici Girişini Sıfırla ve Devre Dışı Bırak
                        </button>
                        {!adminEnabled && (
                            <button
                                type="button"
                                onClick={handleEnableAdmin}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
                            >
                                Yönetici Girişini Tekrar Etkinleştir
                            </button>
                        )}
                    </div>

                    <div className="text-center pt-4">
                        <button 
                            type="button" 
                            onClick={() => navigate('/')}
                            className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                        >
                            ← Siteye Geri Dön
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
