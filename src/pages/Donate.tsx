import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, Building, Globe, Mail, Heart } from 'lucide-react';
import unityHeroImage from '@/assets/unity-hands-hero.jpg';

const Donate = () => {
  const donationMethods = [
    {
      title: "In Person / Bank Transfer (Kenya)",
      icon: Building,
      details: [
        "Bank: Barclays Bank",
        "Branch: Development House Nairobi", 
        "Branch Code: 047",
        "Account No.: 202827955",
        "Branch Code: 03",
        "SWIFT Code: BARCKENX"
      ]
    },
    {
      title: "Mobile Transfer (Kenya)",
      icon: Smartphone,
      details: [
        "M-Pesa PayBill Number: 7232719",
        "Bank Option: KCB"
      ]
    },
    {
      title: "International Online Money Transfer",
      icon: Globe,
      details: [
        "Platform: WorldRemit.com",
        "Recipient Name: Daniel Wainaina Wanjiku",
        "Email: management@ghettofoundationkenya.org"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 lg:py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${unityHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Support Us</h1>
          <p className="text-2xl lg:text-3xl text-white/90 font-medium">
            Join Community-led Social Change
          </p>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-gray-900 mb-4">Here are some ways you can donate:</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <Card key={index} className="community-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <method.icon className="w-16 h-16 text-community-warm mx-auto mb-4" />
                  <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appreciation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Heart className="w-16 h-16 text-community-warm mx-auto mb-6" />
            <h3 className="text-gray-900 mb-6">Appreciation</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We greatly appreciate your contribution to the work that we're doing. Every donation helps us continue to support education, mentorship, and community empowerment in Mathare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="community-card p-8 animate-fade-in">
            <div className="text-center">
              <Mail className="w-16 h-16 text-community-trust mx-auto mb-6" />
              <h3 className="text-gray-900 mb-6">Contact</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If you have any questions, partnership queries, or just want to connect, please reach out at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-community-trust font-semibold text-lg">
                  📧 management@ghettofoundationkenya.org
                </p>
              </div>
              <p className="text-gray-500">
                Or Visit us at our Office 
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
