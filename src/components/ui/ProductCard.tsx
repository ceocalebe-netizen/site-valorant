import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Crosshair } from 'lucide-react';
import GlowButton from './GlowButton';
import { cn } from '../../lib/utils';

export interface Product {
    id: string;
    rank: string;
    rankColor: string;
    price: string;
    skins: number;
    agents: number;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={cn(
                "group relative w-full overflow-hidden rounded-xl glass-panel p-1 transition-all duration-300",
                "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-neon-cyan/50"
            )}
        >
            {/* Background Glow based on rank color (simulated) */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: product.rankColor }}
            />

            <div className="relative bg-[#0f1923]/90 rounded-lg p-6 flex flex-col items-center h-full border border-white/5 group-hover:border-transparent transition-colors">

                {/* Rank Icon Placeholder - using styling to simulate rank badge */}
                <div
                    className="w-24 h-24 mb-4 rounded-full flex items-center justify-center relative shadow-lg"
                    style={{
                        background: `radial-gradient(circle, ${product.rankColor}20 0%, transparent 70%)`,
                        boxShadow: `0 0 20px ${product.rankColor}40`
                    }}
                >
                    <Shield className="w-12 h-12" style={{ color: product.rankColor }} />
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 animate-[spin_10s_linear_infinite]" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-widest">{product.rank}</h3>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />

                <div className="grid grid-cols-2 gap-4 w-full mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-neon-cyan" />
                        <span>{product.skins} Skins</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Crosshair size={16} className="text-valorant-red" />
                        <span>{product.agents} Agents</span>
                    </div>
                </div>

                <div className="mt-auto w-full flex items-center justify-between">
                    <span className="text-xl font-bold text-white">${product.price}</span>
                    <GlowButton variant="secondary" className="px-4 py-1 text-sm">
                        View Details
                    </GlowButton>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
