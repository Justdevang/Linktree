import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, Globe, ExternalLink } from 'lucide-react';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [
  {
    title: 'Personal Website',
    url: 'https://portfolio-zg4f.onrender.com/',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/Justdevang',
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/devang-dhakate',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/_automatewithdev/',
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: 'Email Me',
    url: 'mailto:devangdhakate22@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-zinc-100">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative">
            <img
              src="https://picsum.photos/seed/avatar/200/200"
              alt="Profile"
              referrerPolicy="no-referrer"
              className="w-24 h-24 rounded-full border border-white/10 shadow-2xl object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-emerald-500 w-5 h-5 rounded-full border-2 border-black"></div>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">Devang</h1>
          <p className="mt-2 text-lg text-zinc-400 font-medium">
            Building cool things on the web.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 mt-8"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-between w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 border border-white/5 rounded-xl text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                <span className="font-semibold text-lg text-zinc-200 group-hover:text-white transition-colors duration-300">{link.title}</span>
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Devang
          </p>
        </motion.div>
      </div>
    </div>
  );
}
