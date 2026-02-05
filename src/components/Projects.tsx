"use client"
import { motion } from "framer-motion"

const PROJECTS = [
    {
    title: "E-Commerce App",
    description: "Tienda online con pagos vía Stripe y panel de admin.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "#"
    },
    {
    title: "Realtime Chat",
    description: "Aplicación de mensajería instantánea usando WebSockets.",
    tech: ["React", "Socket.io", "Express"],
    link: "#"
    },
]

export default function Projects() {
return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">Proyectos Destacados</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
        <motion.div
            key={index}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-blue-500 transition-colors"
        >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-4">
                {project.tech.map((t) => (
                <span key={t} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {t}
                </span>
                ))}
            </div>
        </motion.div>
        ))}
    </div>
    </section>
)
}