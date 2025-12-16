"use client"

import { Award, Heart, HelpCircle, Mail, Sparkles } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import TestimonialCardSeven from '@/components/sections/testimonial/TestimonialCardSeven';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ToysHubPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="noise"
      cardStyle="frosted-heavy"
      primaryButtonStyle="outline"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ToysHub"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="ToysHub"
          description="Discover joy in every toy. Trusted by parents, loved by kids."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887966631-ljaelnh1.jpg"
          imageAlt="Colorful toys collection"
          showDimOverlay={true}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          title="Featured Collection"
          description="Explore our handpicked selection of premium toys for all ages"
          tag="New Arrivals"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          gridVariant="bento-grid"
          containerStyle="default"
          products={[
            {
              id: "1",
              name: "Building Blocks Set",
              price: "$29.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887968056-f7szv76k.jpg",
              imageAlt: "Wooden building blocks"
            },
            {
              id: "2",
              name: "Action Figures",
              price: "$24.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887969277-rfklsz04.jpg",
              imageAlt: "Collectible action figures"
            },
            {
              id: "3",
              name: "Racing Cars",
              price: "$34.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887970465-lnhsg9bn.jpg",
              imageAlt: "Toy vehicles collection"
            },
            {
              id: "4",
              name: "Board Games",
              price: "$39.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887971646-kn2o4n70.jpg",
              imageAlt: "Family board games"
            },
            {
              id: "5",
              name: "STEM Kit",
              price: "$49.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887972872-yvwis2d9.jpg",
              imageAlt: "Educational toy set"
            },
            {
              id: "6",
              name: "Outdoor Toys",
              price: "$44.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887975085-5yjgg7rz.jpg",
              imageAlt: "Outdoor play equipment"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFifteen
          title="Why Choose ToysHub"
          description="Premium quality toys with exceptional service"
          tag="What Makes Us Special"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Premium Quality",
              description: "All toys meet international safety standards and quality checks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887976369-sckv159y.jpg",
              imageAlt: "Quality tested toys"
            },
            {
              id: "2",
              title: "Wide Variety",
              description: "Over 500 toys for all ages from infant to teen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887977521-n4cbppur.jpg",
              imageAlt: "Toy store variety"
            },
            {
              id: "3",
              title: "Fast Delivery",
              description: "Free shipping on orders over $50, arrive within 3-5 days",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887978868-bdsz2k29.jpg",
              imageAlt: "Quick delivery service"
            },
            {
              id: "4",
              title: "Expert Support",
              description: "Our toy specialists are here to help you find the perfect gift",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765887979796-94y1yxvc.jpg",
              imageAlt: "Customer support team"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSeven
          title="Parents Love Us"
          description="Join thousands of happy families who trust ToysHub"
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          variant="card"
          testimonials={[
            {
              id: "1",
              companyName: "Sarah's Family",
              quote: "Best toy store we've found! The quality is amazing and my kids absolutely love everything we've purchased. Will definitely be back!",
              author: "Sarah Mitchell, Parent"
            },
            {
              id: "2",
              companyName: "John's Experience",
              quote: "Excellent customer service and fast delivery. The toys arrived perfectly packaged. My son is thrilled with his birthday gifts from ToysHub.",
              author: "John Rodriguez, Parent"
            },
            {
              id: "3",
              companyName: "Emma's Review",
              quote: "I always shop here for birthday gifts. Great selection, reasonable prices, and the staff is so helpful in recommending age-appropriate toys.",
              author: "Emma Chen, Grandparent"
            },
            {
              id: "4",
              companyName: "Michael's Feedback",
              quote: "The educational toys from ToysHub have been fantastic for my daughter's development. Worth every penny and backed by great service!",
              author: "Michael Thompson, Parent"
            },
            {
              id: "5",
              companyName: "Lisa's Comment",
              quote: "Organized selection, helpful staff, and toys that actually last. This is my go-to store for all toy shopping needs.",
              author: "Lisa Anderson, Parent"
            },
            {
              id: "6",
              companyName: "David's Note",
              quote: "Outstanding experience from browsing to checkout. The toys are safe, fun, and my kids play with them for hours.",
              author: "David Kumar, Parent"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our toys and services"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are all toys safe for children?",
              content: "Yes, all our toys are tested and certified to meet international safety standards including CPSIA and CE marks. We carefully select suppliers and conduct quality checks on every product."
            },
            {
              id: "2",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all toys. If your child doesn't love it or there's any issue, simply contact us for a hassle-free return or exchange."
            },
            {
              id: "3",
              title: "Do you offer gift wrapping?",
              content: "Absolutely! We provide complimentary gift wrapping for all orders. Just add a gift message during checkout and we'll beautifully wrap it for you."
            },
            {
              id: "4",
              title: "How long does shipping take?",
              content: "Standard shipping takes 3-5 business days. We offer free shipping on orders over $50. Express 1-2 day shipping is available for an additional fee."
            },
            {
              id: "5",
              title: "Can I find toys for a specific age?",
              content: "Yes, all our products are labeled with age recommendations. Use our age filter on the website to easily find toys suitable for your child's developmental stage."
            },
            {
              id: "6",
              title: "Do you have bulk discounts for schools?",
              content: "We offer special bulk pricing for schools, daycare centers, and organizations. Contact our wholesale team for custom quotes and special arrangements."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have questions? Our friendly team is here to help you find the perfect toys."
          ctaIcon={Mail}
          ctaButton={{
            text: "Send Message",
            href: "#"
          }}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "What are your business hours?",
              content: "We're open Monday-Friday 9AM-6PM, Saturday 10AM-5PM, and Sunday 12PM-4PM. Customer support is available via email 24/7."
            },
            {
              id: "2",
              title: "How can I contact customer support?",
              content: "Email us at support@toyshub.com, call 1-800-TOYS-HUB, or use our live chat. Response times are typically within 2 hours during business hours."
            },
            {
              id: "3",
              title: "Do you offer consultation services?",
              content: "Yes! Our toy specialists can help you choose the perfect gift based on age, interests, and budget. Book a free consultation with our team."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          copyrightText="© 2025 ToysHub. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Toys", href: "products" },
                { label: "New Arrivals", href: "products" },
                { label: "By Age", href: "products" },
                { label: "Best Sellers", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}