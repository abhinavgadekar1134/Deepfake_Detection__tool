import React from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-gradient-to-r from-gray-10 to-gray-200 text-gray-900  h-30">

                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                >
                    <div className="flex lg:flex-1 items-center space-x-3">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt="Logo"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <span className="text-lg font-semibold text-gray-900">DF Detect</span>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <PopoverGroup className="flex gap-x-12">
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to={"/Home"}>
                                Home
                            </Link>
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to={"/Results"}>
                                Results
                            </Link>
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to={"/AboutModel"}>
                                About Tool
                            </Link>
                        </PopoverGroup>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header
