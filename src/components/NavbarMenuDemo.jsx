import React, { useState } from 'react';
import { Menu, MenuItem, ProductItem, HoveredLink } from '../components/ui/navbar-menu';

export default function NavbarMenuDemo() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Aceternity Navbar Menu Demo
        </h1>

        <div className="flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem item="Products" setActive={setActive}>
              <div className="grid grid-cols-2 gap-4">
                <ProductItem
                  title="Product 1"
                  description="Advanced AI solutions"
                  href="/products/product1"
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=70&fit=crop&crop=center"
                />
                <ProductItem
                  title="Product 2"
                  description="Machine Learning platform"
                  href="/products/product2"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=140&h=70&fit=crop&crop=center"
                />
                <ProductItem
                  title="Product 3"
                  description="Cloud services"
                  href="/products/product3"
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=140&h=70&fit=crop&crop=center"
                />
                <ProductItem
                  title="Product 4"
                  description="Data analytics"
                  href="/products/product4"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=140&h=70&fit=crop&crop=center"
                />
              </div>
            </MenuItem>

            <MenuItem item="Solutions" setActive={setActive}>
              <div className="grid grid-cols-1 gap-4">
                <HoveredLink href="/solutions/enterprise">Enterprise Solutions</HoveredLink>
                <HoveredLink href="/solutions/smb">SMB Solutions</HoveredLink>
                <HoveredLink href="/solutions/startup">Startup Solutions</HoveredLink>
                <HoveredLink href="/solutions/custom">Custom Solutions</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem item="Resources" setActive={setActive}>
              <div className="grid grid-cols-1 gap-4">
                <HoveredLink href="/resources/blog">Blog</HoveredLink>
                <HoveredLink href="/resources/documentation">Documentation</HoveredLink>
                <HoveredLink href="/resources/tutorials">Tutorials</HoveredLink>
                <HoveredLink href="/resources/community">Community</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem item="Company" setActive={setActive}>
              <div className="grid grid-cols-1 gap-4">
                <HoveredLink href="/company/about">About Us</HoveredLink>
                <HoveredLink href="/company/careers">Careers</HoveredLink>
                <HoveredLink href="/company/contact">Contact</HoveredLink>
                <HoveredLink href="/company/partners">Partners</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Instructions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hover over the menu items to see the animated dropdown effects. This component features smooth spring animations,
            backdrop blur effects, and a beautiful design that works in both light and dark themes.
          </p>
        </div>
      </div>
    </div>
  );
}