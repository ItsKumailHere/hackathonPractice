import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto p-5">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center">GET HELP</h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="What can we help you with?"
              className="pl-9"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div>
              <h2 className="text-lg font-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                We want to make buying your favourite Nike shoes and gear
                effortless and easy, and we accept the following payment
                options:
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li>
                  • Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
                <li>• Apple Pay</li>
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                If you enter your PAN information at checkout, you'll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Nike Members can store multiple debit or credit cards in their
                profile for faster checkout. If you're not already a Member,
                join today.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-full bg-gray-950 text-white">
                  JOIN US
                </Button>
                <Button variant="outline" className="rounded-full bg-gray-950 text-white">
                  SHOP NOW
                </Button>
              </div>
            </div>
            <Separator orientation="vertical" />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-semibold">000 800 919 0566</p>
                  <p className="text-sm text-gray-600">
                    Products & Orders: 24 hours a day, 7 days a week
                  </p>
                  <p className="text-sm text-gray-600">
                    Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  💬
                </div>
                <div>
                  <p className="font-semibold">24 hours a day</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold">We'll reply within</p>
                  <p className="text-sm text-gray-600">Two business days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-semibold">STORE LOCATOR</p>
                  <p className="text-sm text-gray-600">
                    Find Nike retail stores nearby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="">FAQs</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    Does my card need international purchases enabled?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Yes, we recommend calling your bank to enable international
                    purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                  </p>
                  <p className="text-sm text-gray-600">
                    Please note, some banks may charge a small transaction fee
                    for international orders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Can I pay for my order with multiple methods?
                  </h3>
                  <p className="text-sm text-gray-600">
                    No, payment for Nike orders can't be split between multiple
                    payment methods.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    What payment method is accepted for SNKRS orders?
                  </h3>
                  <p className="text-sm text-gray-600">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Why don't I see Apple Pay as an option?
                  </h3>
                  <p className="text-sm text-gray-600">
                    To use Apple Pay as an option in the Nike App or on
                    Nike.com, you'll need to use a compatible Apple device
                    running the latest iOS, be signed in to your iCloud account
                    and have a supported credit or debit card. Additionally,
                    you'll need to use Safari to use Apple Pay on Nike.com
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              WHAT ARE NIKE'S DELIVERY OPTIONS?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600">
                Delivery options content goes here...
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600">
                Free delivery information goes here...
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default FAQ;
