import React from 'react';
import { Menu, MenuItem, ProductItem, HoveredLink } from '../components/ui/navbar-menu';

export default function NavbarMenuDemo() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Navbar Menu Demo
        </h1>

        <div className="flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} item="Home" >
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
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} item="About" >
              <div className="grid grid-cols-2 gap-4">
                <ProductItem
                  title="About Us"
                  description="Learn about our team and values"
                  href="/about"
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=140&h=70&fit=crop&crop=center"
                />
                <ProductItem
                  title="Our Values"
                  description="Our core values guide our work"
                  href="/values"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=140&h=70&fit=crop&crop=center"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} item="Contact" >
              <div className="grid grid-cols-2 gap-4">
                <ProductItem
                  title="Contact Us"
                  description="Get in touch with us"
                  href="/contact"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=140&h=70&fit=crop&crop=center"
                />
                <ProductItem
                  title="FAQ"
                  description="Frequently Asked Questions"
                  href="/faq"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=140&h=70&fit=crop&crop=center"
                />
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
