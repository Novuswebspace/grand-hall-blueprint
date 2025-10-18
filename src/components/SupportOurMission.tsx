import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Heart, CreditCard, Smartphone, Shield } from 'lucide-react';

const SupportOurMission = () => {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [currentQuote, setCurrentQuote] = useState(0);

  const presetAmounts = [
    { value: '500', label: '₹500' },
    { value: '1000', label: '₹1,000', featured: true },
    { value: '2500', label: '₹2,500' },
    { value: '5000', label: '₹5,000' }
  ];

  const quotes = [
    {
      text: "Every rupee contributes to preserving our rich musical heritage and nurturing the next generation of classical musicians.",
      author: "JSS Sangeetha Sabha Trust"
    },
    {
      text: "ಸಂಗೀತವು ದೇವರ ಭಾಷೆ, ನಿಮ್ಮ ದಾನ ಈ ದಿವ್ಯ ಕಲೆಯನ್ನು ಉಳಿಸುತ್ತದೆ",
      author: "Music is the language of God, your donation preserves this divine art"
    },
    {
      text: "Support helps us continue our mission of promoting Carnatic music and providing a platform for artists across generations.",
      author: "Cultural Heritage Initiative"
    },
    {
      text: "When you donate, you become part of a tradition that has enriched souls for centuries and will continue to do so for generations to come.",
      author: "Legacy of Classical Music"
    }
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount('custom');
  };

  const getDonationAmount = () => {
    if (selectedAmount === 'custom' && customAmount) {
      return customAmount;
    }
    return selectedAmount;
  };

  // Auto-rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading text-foreground mb-4">
            Support Our Mission
          </h2>
          <p className="text-subheading text-secondary font-serif mb-2">ನಮ್ಮ ಧ್ಯೇಯವನ್ನು ಬೆಂಬಲಿಸಿ</p>
          <div className="w-32 veena-divider mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* Quotes Carousel - 30% */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="bg-background border-accent/20 h-full">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h3 className="text-xl font-serif text-foreground mb-6">
                      Make a Difference
                    </h3>
                  </div>
                  
                  {/* Quote Carousel */}
                  <div className="flex-1 flex items-center justify-center">
                    <blockquote className="text-center">
                      <p className="text-muted-foreground italic leading-relaxed mb-4 min-h-[80px] flex items-center justify-center">
                        "{quotes[currentQuote].text}"
                      </p>
                      <cite className="text-sm text-secondary font-medium">
                        — {quotes[currentQuote].author}
                      </cite>
                    </blockquote>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {quotes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentQuote(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentQuote
                            ? 'bg-destructive shadow-glow'
                            : 'bg-accent/30 hover:bg-accent/50'
                        }`}
                        aria-label={`Go to quote ${index + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Donation Form - 70% */}
            <div className="lg:col-span-7">
              <Card className="bg-background border-accent/20 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-foreground mb-4">Make a Donation</h3>
                  
                  <div className="space-y-4">
                    {/* Amount Selection */}
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-3 block">
                        Select Amount (₹)
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount.value}
                            onClick={() => handleAmountSelect(amount.value)}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 text-center font-medium ${
                              selectedAmount === amount.value && !customAmount
                                ? amount.featured
                                  ? 'bg-destructive text-accent border-destructive shadow-glow'
                                  : 'bg-secondary/20 text-foreground border-secondary'
                                : 'bg-background text-foreground border-accent/30 hover:border-accent hover:bg-accent/5'
                            }`}
                          >
                            <span className={`text-base ${
                              selectedAmount === amount.value && !customAmount && amount.featured
                                ? 'text-accent font-bold'
                                : 'text-foreground'
                            }`}>
                              {amount.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground h-10"
                      />
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-3 block">
                        Payment Method
                      </Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                          paymentMethod === 'card' 
                            ? 'border-accent bg-accent/5' 
                            : 'border-accent/20 hover:border-accent/40'
                        }`}>
                          <RadioGroupItem value="card" id="card" className="border-accent text-accent" />
                          <Label htmlFor="card" className="flex items-center cursor-pointer flex-1">
                            <CreditCard className="w-4 h-4 text-destructive mr-2" />
                            <span className="text-foreground text-sm font-medium">Credit/Debit Card</span>
                          </Label>
                        </div>
                        
                        <div className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                          paymentMethod === 'upi' 
                            ? 'border-accent bg-accent/5' 
                            : 'border-accent/20 hover:border-accent/40'
                        }`}>
                          <RadioGroupItem value="upi" id="upi" className="border-accent text-accent" />
                          <Label htmlFor="upi" className="flex items-center cursor-pointer flex-1">
                            <Smartphone className="w-4 h-4 text-destructive mr-2" />
                            <span className="text-foreground text-sm font-medium">UPI / Mobile Wallet</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Donation Button */}
                    <Button 
                      className="w-full red-gradient text-accent font-semibold text-base py-4 hover:shadow-glow transition-bounce"
                      size="lg"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Donate ₹{getDonationAmount() || '0'}
                    </Button>

                    {/* Security Note */}
                    <div className="flex items-center justify-center text-xs text-muted-foreground bg-muted/30 p-2 rounded-lg">
                      <Shield className="w-3 h-3 mr-1 text-accent" />
                      Your donation is secure and helps preserve classical music heritage.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOurMission;