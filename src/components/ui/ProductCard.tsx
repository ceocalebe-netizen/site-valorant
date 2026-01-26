import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import GlowButton from './GlowButton';
import { cn } from '../../lib/utils';

export interface Product {
    id: string;
    title?: string; // New field for non-rank based titles
    rank?: string;
    rankColor?: string;
    image?: string; // New field for product images
    price: string;
    skins?: number;
    agents?: number;
    description: string;
    category: 'random-skins' | 'guaranteed-skin' | 'smurf-accounts';
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
            {/* Background Glow based on rank color or default */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: product.rankColor || '#00f0ff' }}
            />

            <div className="relative bg-[#0f1923]/90 rounded-lg p-6 flex flex-col items-center h-full border border-white/5 group-hover:border-transparent transition-colors">

                {product.image ? (
                    <div className="w-full aspect-video mb-4 overflow-hidden rounded-md relative group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-shadow">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ) : (
                    /* Rank Icon Placeholder - using styling to simulate rank badge */
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
                )}

                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-widest text-center">
                    {product.title || product.rank}
                </h3>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />



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
