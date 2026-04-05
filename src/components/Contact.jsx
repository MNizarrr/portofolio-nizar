import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { TextInput, Textarea, Button, Label } from 'flowbite-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock submission
    setStatus('Thank you! Your message has been sent. 🚀');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Let's Connect
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Get In Touch</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting ideas, 
              or just saying hello. Let's create something great together!
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'nizar@example.com', value: 'nizar@example.com' },
              { icon: Phone, label: 'Phone', value: '+216 12 345 678' },
              { icon: MapPin, label: 'Location', value: 'Tunis, Tunisia' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 glass rounded-xl hover:bg-slate-800/50 transition-all border border-slate-700/50"
              >
                <item.icon className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">{item.label}</p>
                  <p className="text-slate-200 font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl shadow-2xl border border-slate-700/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="mb-2 block text-slate-200">
                Your Name
              </Label>
              <TextInput
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="mb-2 block text-slate-200">
                Your Email
              </Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="mb-2 block text-slate-200">
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500 resize-vertical"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="pt-4"
            >
              <Button
                type="submit"
                fullSized
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-purple-500/25 font-bold text-lg py-4 h-auto"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </motion.div>
            
            {status && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-xl font-medium"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

