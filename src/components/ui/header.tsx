"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container relative mx-auto min-h-14 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 sm:px-6 justify-between lg:justify-normal">
                {/* Empty space for left side on desktop - removed navigation */}
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row lg:order-1">
                </div>
                
                <div className="flex justify-center lg:justify-center lg:order-2 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/Nexes.svg"
                            alt="Nexes"
                            width={105}
                            height={26}
                            className="lg:w-[245px] lg:h-[63px]"
                        />
                    </Link>
                </div>
                
                <div className="justify-end w-full gap-4 hidden lg:flex lg:order-3">
                    <Button variant="ghost" className="hidden md:inline" asChild>
                        <a href="#portfolio">Portfolio</a>
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button variant="outline" asChild>
                        <a href="#pricing">See Pricing</a>
                    </Button>
                    <Button asChild>
                        <a href="https://calendly.com/nexes9/meeting" target="_blank" rel="noopener noreferrer">
                            Get a Free Quote
                        </a>
                    </Button>
                </div>
                
                <div className="flex w-12 shrink lg:hidden items-center justify-end ml-auto">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-10 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-4">
                            <a href="#portfolio" className="flex justify-between items-center py-2" onClick={() => setOpen(false)}>
                                <span className="text-lg">Portfolio</span>
                            </a>
                            <a href="#pricing" className="flex justify-between items-center py-2" onClick={() => setOpen(false)}>
                                <span className="text-lg">See Pricing</span>
                            </a>
                            <a href="https://calendly.com/nexes9/meeting" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center py-2" onClick={() => setOpen(false)}>
                                <span className="text-lg">Get a Free Quote</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 }; 