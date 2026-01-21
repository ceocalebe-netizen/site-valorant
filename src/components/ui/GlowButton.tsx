import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'danger';
    glowColor?: string;
    children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({
    className,
    variant = 'primary',
    children,
    ...props
}) => {
    const variants = {
        primary: "bg-valorant-red text-white hover:bg-red-600 shadow-[0_0_15px_rgba(255,70,85,0.5)]",
        secondary: "bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.3)]",
        danger: "bg-red-900 border border-red-500 text-white hover:bg-red-800"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-2 font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-sm overflow-hidden group",
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>

            {/* Glare effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
        </motion.button>
    );
};

export default GlowButton;
