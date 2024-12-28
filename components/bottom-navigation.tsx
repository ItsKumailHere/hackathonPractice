"use client";

import Link from "next/link";

export default function BottomNavigationMenu() {
  return (
    <nav className="max-w-7xl  px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Icons Column */}
        <div className="space-y-4">
          <h3 className="font-bold mb-6">Icons</h3>
          <div className="space-y-3">
            <Link
              href="/air-force-1"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Air Force 1
            </Link>
            <Link
              href="/huarache"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Huarache
            </Link>
            <Link
              href="/air-max-90"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Air Max 90
            </Link>
            <Link
              href="/air-max-95"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Air Max 95
            </Link>
          </div>
        </div>

        {/* Shoes Column */}
        <div className="space-y-4">
          <h3 className="font-bold mb-6">Shoes</h3>
          <div className="space-y-3">
            <Link
              href="/all-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              All Shoes
            </Link>
            <Link
              href="/custom-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Custom Shoes
            </Link>
            <Link
              href="/jordan-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Jordan Shoes
            </Link>
            <Link
              href="/running-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Running Shoes
            </Link>
          </div>
        </div>

        {/* Clothing Column */}
        <div className="space-y-4">
          <h3 className="font-bold mb-6">Clothing</h3>
          <div className="space-y-3">
            <Link
              href="/all-clothing"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              All Clothing
            </Link>
            <Link
              href="/modest-wear"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Modest Wear
            </Link>
            <Link
              href="/hoodies-pullovers"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Hoodies & Pullovers
            </Link>
            <Link
              href="/shirts-tops"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Shirts & Tops
            </Link>
          </div>
        </div>

        {/* Kids Column */}
        <div className="space-y-4">
          <h3 className="font-bold mb-6">Kids'</h3>
          <div className="space-y-3">
            <Link
              href="/infant-toddler-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Infant & Toddler Shoes
            </Link>
            <Link
              href="/kids-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Kids' Shoes
            </Link>
            <Link
              href="/kids-jordan-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Kids' Jordan Shoes
            </Link>
            <Link
              href="/kids-basketball-shoes"
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Kids' Basketball Shoes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
