import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Checkbox } from "@/components/ui/checkbox"
  import { cn } from "@/lib/utils"
  const categories = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Trousers & Tights",
    "Shorts",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment"
  ]
  const genderOptions = ["Men", "Women", "Unisex"]
  const kidsOptions = ["Boys", "Girls"]
  const priceRanges = [
    "Under ₹ 2,500.00",
    "₹ 2,501.00 - ₹ 7,500.00",
  ]
  export function ShopSidebar() { 
    return (
      <aside className="w-64 bg-white p-4  " >
        <div className="flex items-center justify-between mb-6 border-r-4 border-gray-700">
          <h2 className="text-lg font-medium">New (500)</h2>
        </div>
        {/* Categories */}
        <div className="space-y-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "w-full text-left py-1 hover:text-gray-900 transition-colors",
                "text-gray-600 text-sm"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Gender Filter */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="gender" className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">Gender</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {genderOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={`gender-${option.toLowerCase()}`} />
                    <label
                      htmlFor={`gender-${option.toLowerCase()}`}
                      className="text-sm text-gray-600"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Kids Filter */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="kids" className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">Kids</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {kidsOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={`kids-${option.toLowerCase()}`} />
                    <label
                      htmlFor={`kids-${option.toLowerCase()}`}
                      className="text-sm text-gray-600"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Shop By Price Filter */}
        <Accordion type="single" collapsible>
          <AccordionItem value="price" className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">Shop By Price</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <Checkbox id={`price-${range}`} />
                    <label
                      htmlFor={`price-${range}`}
                      className="text-sm text-gray-600"
                    >
                      {range}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    )
  }