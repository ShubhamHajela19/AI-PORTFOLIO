import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Zap, Clock } from 'lucide-react';
import { mockData } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - will be replaced with actual backend call
    setTimeout(() => {
      toast({
        title: "Message Sent! ⚡",
        description: "Thank you for your message. I'll get back to you within 24 hours!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: mockData.personal.email,
      href: `mailto:${mockData.personal.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: mockData.personal.phone,
      href: `tel:${mockData.personal.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: mockData.personal.location,
      href: null,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: mockData.personal.github,
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: mockData.personal.linkedin,
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> ./contact.sh --init'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to build something amazing together? Let's discuss how I can contribute to your team as a 
            <span className="text-cyan-400"> System Engineer Trainee</span> and bring innovative solutions to your infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-cyan-400" size={28} />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-6 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className={`p-4 bg-gradient-to-r ${item.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1 font-mono">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="text-blue-400" size={20} />
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 transform backdrop-blur-sm group"
                  >
                    <social.icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-cyan-400" size={24} />
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I typically respond to messages within <span className="text-cyan-400 font-semibold">24 hours</span>. 
                For urgent inquiries, feel free to call me directly. Let's turn your ideas into reality! 🚀
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gray-800/20 border-gray-700/30 shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Send className="text-cyan-400" size={28} />
                  Send Message
                </CardTitle>
                <p className="text-gray-400 text-sm font-mono">{'> compose --new-message'}</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300 font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300 font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300 font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[140px] bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or how this portfolio impressed you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-4 text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 border-0 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send size={20} className="mr-2 group-hover:animate-bounce" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;