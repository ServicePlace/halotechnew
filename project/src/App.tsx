import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  Zap, 
  Coins, 
  Users, 
  ChevronDown, 
  Github, 
  Twitter, 
  MessageCircle, 
  Lock, 
  Rocket, 
  Gift, 
  HelpCircle,
  ExternalLink,
  Send,
  CreditCard,
  Code,
  ShoppingCart,
  Copy,
  CheckCircle,
  Store
} from 'lucide-react';

function LightningEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="lightning" />
    </div>
  );
}

function Hero() {
  const handleConnectWallet = () => {
    alert("Coming soon! Join our Telegram: https://t.me/halotechcoin");
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Future of Currency
        </motion.h1>
        <p className="text-xl md:text-2xl text-yellow-100 mb-8">
          $HaloTech Coin on Solana 🌐🚀
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConnectWallet}
            className="electric-button px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full text-black font-semibold transition-all relative overflow-hidden"
          >
            <Wallet className="inline-block mr-2 h-5 w-5" />
            Connect Wallet
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="electric-button px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full text-black font-semibold transition-all"
          >
            <Coins className="inline-block mr-2 h-5 w-5" />
            Buy $HaloTech
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

function Features() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-yellow-400" />,
              title: "Ultra-Fast Transactions",
              description: "Leveraging Solana's speed for near-instant payments"
            },
            {
              icon: <Coins className="h-8 w-8 text-yellow-400" />,
              title: "Low Fees",
              description: "Enjoy minimal transaction costs compared to traditional platforms"
            },
            {
              icon: <Users className="h-8 w-8 text-yellow-400" />,
              title: "Community Driven",
              description: "Governed by the community, for the community"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{feature.title}</h3>
              <p className="text-yellow-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tokenomics() {
  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Supply & Distribution</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Coins className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-100">Total Supply: 999,350,000 $HaloTech</span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-100">Liquidity Lock: 2 Years</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Transaction Fees</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-100">Buy Tax: 2%</span>
              </li>
              <li className="flex items-center">
                <Rocket className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-100">Sell Tax: 3%</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sean Carter",
              roles: ["Degen Dev", "Founder", "President"],
              image: "https://cdn.freewebstore.com/origin/919667/c02eda641a6f56e9d00df2ec2a78177d_1738371772922.webp"
            },
            {
              name: "Dylan Sage",
              roles: ["Chief Marketing Officer", "Chief Technology Officer", "Content Creator"],
              image: "https://cdn.freewebstore.com/origin/919667/471801084_1711283116098110_1978181631096970614_n_1738360131970.jpg"
            },
            {
              name: "Saadmaan Chowdhury",
              roles: ["Merch Distribution", "Product Manager", "Community Policy Director"],
              image: "https://cdn.freewebstore.com/origin/919667/coss_1738720900049.webp"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-yellow-400/50 electric-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold electric-text mb-2">{member.name}</h3>
                <div className="space-y-1">
                  {member.roles.map((role, roleIndex) => (
                    <p key={roleIndex} className="electric-text">{role}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">Roadmap</h2>
        <div className="space-y-8">
          {[
            {
              phase: "Phase 1: Launch & Foundation",
              items: ["Coin deployment on Solana blockchain", "Initial marketing campaigns", "Community building"],
              icon: <Rocket className="h-6 w-6 text-yellow-400" />
            },
            {
              phase: "Phase 2: Utility Growth",
              items: ["Expanding use cases", "Merchant partnerships", "Platform integration"],
              icon: <Zap className="h-6 w-6 text-yellow-400" />
            },
            {
              phase: "Phase 3: Community Empowerment",
              items: ["Governance features", "Voting system", "Reward programs"],
              icon: <Users className="h-6 w-6 text-yellow-400" />
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30"
            >
              <div className="flex items-center mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-yellow-300 ml-2">{phase.phase}</h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-yellow-100/80 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              question: "What is HaloTech?",
              answer: "HaloTech is a revolutionary cryptocurrency built on the Solana blockchain, designed to provide ultra-fast transactions with minimal fees."
            },
            {
              question: "How can I buy HaloTech?",
              answer: "You can buy HaloTech through our website using the Buy button, or through supported DEXes on the Solana network."
            },
            {
              question: "Is liquidity locked?",
              answer: "Yes, liquidity is locked for 2 years to ensure project stability and investor confidence."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30"
            >
              <div className="flex items-center mb-2">
                <HelpCircle className="h-5 w-5 text-yellow-400 mr-2" />
                <h3 className="text-xl font-semibold text-yellow-300">{item.question}</h3>
              </div>
              <p className="text-yellow-100/80 ml-7">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonationWallet() {
  const handleDonationClick = () => {
    alert("Coming soon! Join our Telegram: https://t.me/halotechcoin");
  };

  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8">🚀 Donation Wallet 🚀</h2>
        <div className="electric-border bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30 inline-block">
          <p className="text-yellow-100 mb-4">$HaloTech Donation Wallet (Solana)</p>
          <div className="flex items-center justify-center gap-2">
            <code className="bg-black/50 px-4 py-2 rounded-lg text-yellow-300">2hSWPDtoiKu2Lpdp2ApTj2FvnTRTkqAQg8JCRXhwiDbT</code>
            <button 
              onClick={handleDonationClick}
              className="text-yellow-400 hover:text-yellow-300 electric-button p-2 rounded-full"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8">Join Our Community</h2>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://t.me/halotechcoin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
          >
            <MessageCircle className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
          >
            <Twitter className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="electric-button p-4 rounded-full bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
          >
            <ExternalLink className="h-8 w-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 py-8 px-4 border-t border-yellow-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-yellow-100/80 mb-4 md:mb-0">
          © 2025 HaloTech. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://t.me/halotechcoin" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function PaymentIntegration() {
  const [copied, setCopied] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const demoWalletAddress = "2hSWPDtoiKu2Lpdp2ApTj2FvnTRTkqAQg8JCRXhwiDbT";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentDemo = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-16">
          <Store className="inline-block mr-2 mb-1 h-8 w-8" />
          Accept $HaloTech Payments
        </h2>

        {/* Integration Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Integration Guide</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                <div>
                  <h4 className="text-yellow-100 font-semibold mb-1">Set Up Solana Wallet</h4>
                  <p className="text-yellow-100/80">Create a Solana wallet to receive $HaloTech payments</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                <div>
                  <h4 className="text-yellow-100 font-semibold mb-1">Add Payment Button</h4>
                  <p className="text-yellow-100/80">Integrate our payment button into your checkout flow</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                <div>
                  <h4 className="text-yellow-100 font-semibold mb-1">Configure Webhook</h4>
                  <p className="text-yellow-100/80">Set up payment notifications for your backend</p>
                </div>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30"
          >
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Code Example</h3>
            <div className="bg-black/50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-yellow-100/80">payment-button.js</span>
                <button
                  onClick={() => handleCopy(`const HaloTechPayment = {
  address: "${demoWalletAddress}",
  amount: "100",
  onSuccess: (tx) => {
    console.log("Payment successful:", tx);
  }
};`)}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
              <pre className="text-yellow-100/80 overflow-x-auto">
                <code>{`const HaloTechPayment = {
  address: "${demoWalletAddress}",
  amount: "100",
  onSuccess: (tx) => {
    console.log("Payment successful:", tx);
  }
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Demo Payment Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto electric-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30"
        >
          <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">Demo Payment</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-yellow-100">Amount:</span>
              <span className="text-yellow-300 font-bold">100 $HaloTech</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-100">Fee:</span>
              <span className="text-yellow-300 font-bold">2 $HaloTech</span>
            </div>
            <div className="border-t border-yellow-500/30 my-4"></div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-100">Total:</span>
              <span className="text-yellow-300 font-bold">102 $HaloTech</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePaymentDemo}
              className="w-full electric-button px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full text-black font-semibold transition-all relative overflow-hidden flex items-center justify-center"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Pay with $HaloTech
            </motion.button>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-yellow-300">
                  Coming soon! Join our{' '}
                  <a 
                    href="https://t.me/halotechcoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-200"
                  >
                    Telegram
                  </a>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LightningEffect />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Tokenomics />
        <PaymentIntegration />
        <Team />
        <Roadmap />
        <FAQ />
        <DonationWallet />
        <Community />
        <Footer />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-yellow-400/50 z-20"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </div>
  );
}

export default App;