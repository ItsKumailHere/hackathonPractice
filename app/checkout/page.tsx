'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Phone, MapPin, CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
 
export default function CheckoutPage(img: StaticImageData) {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/placeholder.svg" alt="Nike" width={60} height={24} />
          </Link>
          <div className="text-sm">050 600 100 9538</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Delivery Section */}
            <Card>
              <CardHeader>
                <CardTitle>How would you like to get your order?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">
                  Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. If you want your order delivered to an address that is not a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing with our shipping partners). If the shipping address on your KYC does not match your shipping address, please click the link for more information.{' '}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Learn More
                  </Link>
                </p>
                <RadioGroup defaultValue="deliver" className="space-y-2">
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="deliver" id="deliver" />
                    <Label htmlFor="deliver">Deliver It</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Enter your name and address:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
              </CardContent>
            </Card>

            {/* Address Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="Enter your street address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" placeholder="PIN Code" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="card" className="space-y-2">
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi">UPI</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹ 20,590.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery/Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹ 20,590.00</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Arrives Mon, 27 Mar - Wed, 12 Apr
                  </p>

                  {/* Product 2 */}
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image
                        src={img}
                        alt="Nike Air Max"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Nike Air Max</h4>
                      <p className="text-sm text-gray-500">97 OG Men&apos;s Shoes</p>
                      <p className="text-sm text-gray-500">Size UK 9</p>
                      <p className="text-sm">₹ 11,995.00</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  Place Order
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

