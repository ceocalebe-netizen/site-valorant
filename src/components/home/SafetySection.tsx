import React from 'react';
import { motion } from 'framer-motion';
import { UserSearch, CreditCard, Send } from 'lucide-react';

const SafetySection: React.FC = () => {
    return (
        <section className="w-full py-20 my-16 bg-gradient-to-b from-valorant-black/80 to-valorant-black relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
                            <span className="text-white">BAN-</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">FREE</span>
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-neon-green to-transparent mt-2" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg font-light"
                    >
                        Our accounts are rigorously selected to guarantee maximum quality and security.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <StepCard
                        icon={<UserSearch className="w-10 h-10 text-neon-cyan" />}
                        step="Step 1"
                        title="Choose Your Account"
                        description="Explore our account types and choose the one that best suits you."
                        delay={0.1}
                    />

                    {/* Step 2 */}
                    <StepCard
                        icon={<CreditCard className="w-10 h-10 text-neon-purple" />}
                        step="Step 2"
                        title="Secure Payment"
                        description="Make a secure payment through our protected checkout."
                        delay={0.2}
                    />

                    {/* Step 3 */}
                    <StepCard
                        icon={<Send className="w-10 h-10 text-valorant-red" />}
                        step="Step 3"
                        title="Instant Delivery"
                        description="Receive your account details immediately after purchase."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

interface StepCardProps {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
    delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, step, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <span className="text-sm font-bold tracking-widest text-gray-500 mb-2 uppercase">{step}</span>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default SafetySection;
