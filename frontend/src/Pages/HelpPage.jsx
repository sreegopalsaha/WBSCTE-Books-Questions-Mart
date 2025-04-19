import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { UserCircle, BookOpen, CreditCard, HelpCircle, HeadphonesIcon, ChevronRight } from "lucide-react"

const helpCategories = [
  {
    id: "account-management",
    title: "Account Management",
    icon: UserCircle,
    description: "Manage your account settings, password, and personal information",
    color: "bg-blue-50",
  },
  {
    id: "accessing-content",
    title: "Accessing Content",
    icon: BookOpen,
    description: "Learn how to access and download study materials",
    color: "bg-purple-50",
  },
  {
    id: "payment-subscription",
    title: "Payment and Subscription",
    icon: CreditCard,
    description: "Information about payments, subscriptions, and billing",
    color: "bg-green-50",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: HelpCircle,
    description: "Solutions to common problems and technical issues",
    color: "bg-orange-50",
  },
  {
    id: "support-contact",
    title: "Support & Contact",
    icon: HeadphonesIcon,
    description: "Get in touch with our support team for assistance",
    color: "bg-pink-50",
  },
]

const handleEmailClick = () => {
  window.location.href = "mailto:support@yourwebsite.com?subject=Support Request&body=Hello Support Team,%0D%0A%0D%0AI need assistance with... (please describe your issue here).%0D%0A%0D%0AThank you!";
};

export default function HelpPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-2 pb-4">
              How can we help you?
            </h1>
            <p className="text-lg sm:text-xl text-[#010D3E]">
              Browse through our help topics or search for specific information
            </p>
          </div>

          {/* Help Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {helpCategories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} rounded-2xl p-6 transition-transform hover:scale-[1.02] cursor-pointer`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <category.icon className="w-6 h-6 text-[#001E80]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-[#001E80]">{category.title}</h3>
                    <p className="text-[#010D3E] text-sm">{category.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#001E80]" />
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#001E80]">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="account-management" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg hover:no-underline">How do I create an account?
                </AccordionTrigger>
                <AccordionContent className="text-[#010D3E]">
                  To create an account, click on the "Sign Up" button in the top right corner. Fill in your details,
                  verify your email, and you're ready to go!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="download" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg hover:no-underline">
                  How can i download pyq?
                </AccordionTrigger>
                <AccordionContent className="text-[#010D3E]">
                  Navigate to the specific section (PYQs, E-Books, or Notes), select your desired content, and click the
                  download button. Make sure you're logged in to access all materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="access" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg hover:no-underline">
                  Can I access content offline?
                </AccordionTrigger>
                <AccordionContent className="text-[#010D3E]">
                  Yes, once you download the materials, you can access them offline. We recommend downloading important
                  content for uninterrupted study sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center bg-[#001E80] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 cursor-default selection:bg-transparent selection:text-inherit">Still need help?</h2>
            <p className="mb-6 text-white/80 cursor-default selection:bg-transparent selection:text-inherit">Our support team is here to assist you with any questions or concerns</p>
            <a
              onClick={handleEmailClick}
              className="bg-white text-[#001E80] px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-colors hover:bg-gray-100 cursor-grab selection:bg-transparent selection:text-inherit"
            >
              Contact Support
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}



