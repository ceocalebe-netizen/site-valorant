import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-20 glass-panel border-b border-white/10 flex items-center justify-between px-6 md:px-12 backdrop-blur-md">

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 bg-valorant-red flex items-center justify-center rounded-sm transform group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform">V</span>
                </div>
                <h1 className="text-2xl font-display font-bold tracking-widest text-white group-hover:text-valorant-red transition-colors">
                    VALO<span className="text-neon-cyan">STORE</span>
                </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {['Home', 'Accounts', 'Boost', 'About'].map((item) => (
                    <a key={item} href="#" className="font-display font-medium text-gray-300 hover:text-white hover:text-shadow-neon transition-all uppercase tracking-wide text-sm relative group">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center bg-black/30 border border-white/10 rounded-full px-4 py-2 focus-within:border-neon-cyan/50 transition-colors">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-white text-sm ml-2 w-32 focus:w-48 transition-all placeholder:text-gray-600"
                    />
                </div>

                <div className="relative cursor-pointer hover:scale-110 transition-transform">
                    <ShoppingCart className="text-white" />
                    <span className="absolute -top-2 -right-2 bg-valorant-red text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-black text-white shadow-lg">
                        0
                    </span>
                </div>

                <div className="hidden md:block">
                    <GlowButton className="text-sm py-1 px-4">Login</GlowButton>
                </div>

                <button className="md:hidden text-white">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    );
};

export default Header;
