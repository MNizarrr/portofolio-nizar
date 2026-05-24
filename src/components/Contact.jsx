import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { TextInput, Textarea, Button, Label } from 'flowbite-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xredabeo');

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Mari Terhubung
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
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Hubungi Saya</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Saya selalu terbuka untuk membahas peluang baru, ide menarik, atau sekadar berkenalan. 
              Mari ciptakan sesuatu yang luar biasa bersama-sama!
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'nizarmuhammad.work@gmail.com' },
              { icon: Phone, label: 'Telepon', value: '+62 821 2542 2984' },
              { icon: MapPin, label: 'Lokasi', value: 'Kecamatan Cisarua, Kabupaten Bogor, Provinsi Jawa Barat, Indonesia' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-purple-500/30 bg-slate-900/50 hover:bg-slate-800/70 hover:border-purple-500/60 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
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
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="relative p-8 rounded-3xl shadow-2xl border border-purple-500/30 bg-slate-900/70 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 block text-slate-200">
                  Nama Anda
                </Label>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="mb-2 block text-slate-200">
                  Email Anda
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="email@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 block text-sm text-red-300"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="mb-2 block text-slate-200">
                  Pesan Anda
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-500 focus:ring-purple-500 resize-vertical"
                  placeholder="Masukan Pesan Anda..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 block text-sm text-red-300"
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  disabled={state.submitting}
                  fullSized
                  className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:via-violet-700 hover:to-indigo-700 shadow-xl hover:shadow-purple-500/25 font-bold text-lg py-4 h-auto"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {state.submitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </motion.div>
              
              {state.succeeded && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-4 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-xl font-medium"
                >
                  Terima kasih! Pesan Anda berhasil dikirim.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

