import { Github, Linkedin, Mail, ExternalLink, Code2, ShoppingCart, Keyboard as Skateboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Alex Chen</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Full Stack Web Developer</p>
          <div className="flex gap-4">
            <a href="https://github.com" className="hover:text-blue-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com" className="hover:text-blue-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <div className="max-w-2xl">
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate web developer fresh out of college, eager to create meaningful and impactful web applications.
              With a strong foundation in modern web technologies, I love turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My tech stack includes React, Next.js, Node.js, PostgreSQL, and various modern web development tools.
              I'm always excited to learn new technologies and take on challenging projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media Platform */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <video
                  src="assets/social.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <Code2 size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Social Media Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack social media app with Next.js, PostgreSQL, and Prisma. Features include authentication,
                  posts, likes, comments, and notifications.
                </p>
                <div className="flex gap-2">
                  <a href="https://next-js-social-media-silk.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="https://github.com/AdithyaChauhan/next-js-SocialMedia" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* E-Commerce Website */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <video
                  src="assets/ecommerce.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <ShoppingCart size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">E-Commerce Website</h3>
                <p className="text-gray-600 mb-4">
                  A React & Node.js-powered e-commerce platform with Stripe payments, user authentication,
                  and admin product management.
                </p>
                <div className="flex gap-2">
                  <a href="https://ecommerceapp-frontend-nupuyatz1-adithyachauhans-projects.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="https://github.com/AdithyaChauhan/ecommerceapp" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Skateboard Suburbia */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <video
                  src="assets/skateboard.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <Skateboard size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Skateboard Suburbia</h3>
                <p className="text-gray-600 mb-4">
                  An interactive 3D skateboard customization site using Next.js, Three.js, GSAP, and Prismic CMS
                  for real-time model rendering.
                </p>
                <div className="flex gap-2">
                  <a href="https://merry-centaur-393dd7.netlify.app/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="https://github.com/AdithyaChauhan/slumurban" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <div className="max-w-lg">
            <p className="text-gray-600 mb-6">
              I'm currently looking for new opportunities! Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <a
              href="mailto:alex@example.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>Designed & Built by Alex Chen</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
