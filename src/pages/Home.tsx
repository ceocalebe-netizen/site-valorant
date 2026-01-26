import React, { useState } from 'react';
import ProductCard, { type Product } from '../components/ui/ProductCard';
import { motion } from 'framer-motion';

const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        title: '1 - 10 Random Skins | Full Acess',
        image: 'https://i.imgur.com/eEof4QV.png',
        price: '5.00',
        description: 'Random account with 1-10 skins guaranteed. Full access.',
        category: 'random-skins'
    },
    {
        id: '2',
        title: '10 - 20 Random Skins | Full Acess',
        image: 'https://i.imgur.com/KKdXIPW.png',
        price: '12.00',
        description: 'Random account with 10-20 skins guaranteed. Full access.',
        category: 'random-skins'
    },
    {
        id: '3',
        title: '20 - 40 Random Skins | Full Acess',
        image: 'https://i.imgur.com/DTnTwep.png',
        price: '25.00',
        description: 'Random account with 20-40 skins guaranteed. Full access.',
        category: 'random-skins'
    },
    {
        id: '4',
        title: '40 - 60 Random Skins | Full Acess',
        image: 'https://i.imgur.com/617LI2v.png',
        price: '40.00',
        description: 'Random account with 40-60 skins guaranteed. Full access.',
        category: 'random-skins'
    },
    {
        id: '5',
        title: 'Reaver Karambit — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/lPzF6a0.png',
        price: '20.00',
        description: 'Guaranteed Reaver Karambit skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '6',
        title: 'Black.Market — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/ZuJ2TR3.png',
        price: '20.00',
        description: 'Guaranteed Black.Market skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '7',
        title: 'Kuronami no Yaiba — Guaranteed Skin | Full Access',
        image: '/kuronami-no-yaiba.png',
        price: '20.00',
        description: 'Guaranteed Kuronami no Yaiba skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '8',
        title: 'Xenohunter Knife — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/IqOMPO9.png',
        price: '20.00',
        description: 'Guaranteed Xenohunter Knife skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '9',
        title: 'Prime//2.0 Karambit — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/kgg4bAq.png',
        price: '20.00',
        description: 'Guaranteed Prime//2.0 Karambit skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '10',
        title: 'Reaver Vandal — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/x9aThpe.png',
        price: '8.50',
        description: 'Guaranteed Reaver Vandal skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '11',
        title: 'Prime Vandal — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/4CGizZF.png',
        price: '8.50',
        description: 'Guaranteed Prime Vandal skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '12',
        title: 'XERØFANG Vandal — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/jCnfvMk.png',
        price: '10.00',
        description: 'Guaranteed XERØFANG Vandal skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '13',
        title: 'Kuronami Vandal — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/AZc4ezj.png',
        price: '8.50',
        description: 'Guaranteed Kuronami Vandal skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '14',
        title: 'Prelude to Chaos Vandal — Guaranteed Skin | Full Access',
        image: 'https://i.imgur.com/s6BX1Hv.png',
        price: '8.50',
        description: 'Guaranteed Prelude to Chaos Vandal skin. Full access.',
        category: 'guaranteed-skin'
    },
    {
        id: '15',
        title: 'Unranked | Guaranteed Rank',
        image: 'https://i.imgur.com/meKj209.png',
        price: '3.00',
        description: 'Unranked account ready for ranked. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '16',
        title: 'Rank Bronze | Guaranteed Rank',
        image: 'https://i.imgur.com/VTuF2wW.png',
        price: '5.00',
        description: 'Bronze rank guaranteed. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '17',
        title: 'Silver | Guaranteed Rank',
        image: 'https://i.imgur.com/6lTTQYd.png',
        price: '6.00',
        description: 'Silver rank guaranteed. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '18',
        title: 'Gold | Guaranteed Rank',
        image: 'https://i.imgur.com/LgwptuK.png',
        price: '7.00',
        description: 'Gold rank guaranteed. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '19',
        title: 'Platinum | Guaranteed Rank',
        image: 'https://i.imgur.com/W184Agl.png',
        price: '9.00',
        description: 'Platinum rank guaranteed. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '20',
        title: 'Diamond | Guaranteed Rank',
        image: 'https://i.imgur.com/kSchTWA.png',
        price: '10.00',
        description: 'Diamond rank guaranteed. Full access.',
        category: 'smurf-accounts'
    },
    {
        id: '21',
        title: 'Ascendant | Guaranteed Rank',
        image: 'https://i.imgur.com/Of12LSc.png',
        price: '30.00',
        description: 'Ascendant rank guaranteed. Full access.',
        category: 'smurf-accounts'
    }
];

const Home: React.FC = () => {
    const [filter, setFilter] = useState('ALL');

    const filteredProducts = filter === 'ALL'
        ? MOCK_PRODUCTS
        : MOCK_PRODUCTS.filter(p => p.category === filter);

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
                    {[
                        { id: 'ALL', label: 'ALL' },
                        { id: 'random-skins', label: 'RANDOM SKINS' },
                        { id: 'guaranteed-skin', label: 'GUARANTEED SKIN' },
                        { id: 'smurf-accounts', label: 'SMURF ACCOUNTS' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setFilter(item.id)}
                            className={`text-sm tracking-widest font-bold py-2 px-6 rounded-full border transition-all ${filter === item.id
                                ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                                : 'bg-transparent text-gray-500 border-gray-700 hover:border-white hover:text-white'
                                }`}
                        >
                            {item.label}
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
