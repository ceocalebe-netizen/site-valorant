import React, { useState } from 'react';
import ProductCard, { type Product } from '../components/ui/ProductCard';
import { motion } from 'framer-motion';

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        rank: 'RADIANT',
        rankColor: '#ffff00', // Yellow
        price: '450.00',
        skins: 156,
        agents: 22,
        description: 'Top 500 Radiant Account. Loaded with skins.'
    },
    {
        id: '2',
        rank: 'IMMORTAL 3',
        rankColor: '#ff4655', // Red
        price: '280.00',
        skins: 98,
        agents: 22,
        description: 'High mmr Immortal account.'
    },
    {
        id: '3',
        rank: 'ASCENDANT 2',
        rankColor: '#4fab76', // Green
        price: '120.00',
        skins: 45,
        agents: 20,
        description: 'Clean account ready for ranked.'
    },
    {
        id: '4',
        rank: 'DIAMOND 1',
        rankColor: '#bc13fe', // Purple
        price: '65.00',
        skins: 20,
        agents: 18,
        description: 'Perfect smurf account.'
    },
    {
        id: '5',
        rank: 'PLATINUM 3',
        rankColor: '#00f0ff', // Cyan
        price: '45.00',
        skins: 10,
        agents: 15,
        description: 'Budget friendly styled main.'
    },
    {
        id: '6',
        rank: 'GOLD 2',
        rankColor: '#ffd700', // Gold
        price: '25.00',
        skins: 5,
        agents: 10,
        description: 'Starter account.'
    }
];

const Home: React.FC = () => {
    const [filter, setFilter] = useState('ALL');

    const filteredProducts = filter === 'ALL'
        ? MOCK_PRODUCTS
        : MOCK_PRODUCTS.filter(p => p.rank.includes(filter));

    return (
        <main className="relative min-h-screen z-10">

            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 mb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src="/valorant-hero.jpg"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.05 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "linear"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-valorant-black/60 via-valorant-black/40 to-valorant-black" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tighter"
                    >
                        ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-valorant-red to-neon-purple">VALORANT</span> ACCOUNTS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light"
                    >
                        Dominate the lobby with premium high-ranked accounts.
                        <br />
                        <span className="text-neon-cyan">Instant Delivery. Secure. Verified.</span>
                    </motion.p>

                    {/* Visual Decorative Lines */}
                    <div className="w-24 h-1 bg-valorant-red mx-auto shadow-[0_0_10px_#ff4655]" />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
                {/* Filter */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['ALL', 'RADIANT', 'IMMORTAL', 'ASCENDANT', 'DIAMOND'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`text-sm tracking-widest font-bold py-2 px-6 rounded-full border transition-all ${filter === item
                                ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                                : 'bg-transparent text-gray-500 border-gray-700 hover:border-white hover:text-white'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </main>
    );
};

export default Home;
