import React, { useState } from "react";
import { MapPin, Search, ChevronDown, Map, Menu, X, User, Phone, Calendar, Info, Building, UserPlus, DollarSign, HelpCircle } from "lucide-react";

const Header = () => {
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const [isPatientDropdownOpen, setIsPatientDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const specialties = [
        "Proctology", "Laparoscopy", "Gynaecology", "ENT", "Urology",
        "Vascular", "Aesthetics", "Orthopedics", "Ophthalmology",
        "Fertility", "Weight Loss", "Wellness"
    ];


    const patientDropdownItems = [
        { icon: <User className="w-4 h-4" />, text: "Patient Dashboard", link: "#" },
        { icon: <Calendar className="w-4 h-4" />, text: "Book Appointment", link: "#" },
        { icon: <Phone className="w-4 h-4" />, text: "Contact Support", link: "#" },
        { icon: <Info className="w-4 h-4" />, text: "Patient Guide", link: "#" }
    ];

    const companyDropdownItems = [
        { icon: <Building className="w-4 h-4" />, text: "About Us", link: "#" },
        { icon: <UserPlus className="w-4 h-4" />, text: "Join Our Team", link: "#" },
        { icon: <DollarSign className="w-4 h-4" />, text: "Investors", link: "#" },
        { icon: <HelpCircle className="w-4 h-4" />, text: "FAQs", link: "#" }
    ];

    return (
        <header className="w-full relative">
            <div className="bg-[#003B4A] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-evenly h-16">
                        <div className="absolute left-8">
                            <img
                                src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg"
                                alt="Pristyn Care"
                                className="h-10"
                            />
                        </div>

                        <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
                            <div className="flex items-center bg-white rounded-l px-3 py-2 text-gray-700">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <span className="ml-2">Delhi</span>
                            </div>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Search disease, doctors, treatments"
                                    className="w-full px-4 py-2 text-gray-700 border-l border-gray-300"
                                />
                                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="absolute right-4 hidden lg:flex items-center space-x-4">
                            <div className="relative">
                                <button
                                    className="flex items-center text-white hover:text-gray-200"
                                    onClick={() => setIsPatientDropdownOpen(!isPatientDropdownOpen)}
                                >
                                    For Patients
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
                                {isPatientDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                                        {patientDropdownItems.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.link}
                                                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {item.icon}
                                                <span className="ml-2">{item.text}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <button
                                    className="flex items-center text-white hover:text-gray-200"
                                    onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                                >
                                    Our Company
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
                                {isCompanyDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                                        {companyDropdownItems.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.link}
                                                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                {item.icon}
                                                <span className="ml-2">{item.text}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Book Free Appointment
                            </button>

                            <button className="flex items-center text-white hover:text-gray-200">
                                <Map className="w-5 h-5 mr-1" />
                                Delhi
                            </button>
                        </div>

                        <button
                            className="lg:hidden text-white absolute right-4"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-[#003B4A] overflow-y-auto  right-4">
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between mb-8">
                            <img
                                src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg"
                                alt="Pristyn Care"
                                className="h-10"
                            />
                            <button
                                className="text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="bg-white rounded-md p-2">
                            <div className="flex items-center space-x-2 mb-2">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-700">Delhi</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search disease, doctors, treatments"
                                    className="w-full px-4 py-2 rounded-md bg-gray-100"
                                />
                                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <nav className="space-y-4">
                            <div className="border-b border-gray-700 pb-4">
                                <h3 className="text-white mb-2 font-medium">For Patients</h3>
                                {patientDropdownItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        className="flex items-center text-gray-300 hover:text-white py-2"
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.text}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="border-b border-gray-700 pb-4">
                                <h3 className="text-white mb-2 font-medium">Our Company</h3>
                                {companyDropdownItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        className="flex items-center text-gray-300 hover:text-white py-2"
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.text}</span>
                                    </a>
                                ))}
                            </div>

                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">
                                Book Free Appointment
                            </button>
                        </nav>

                        <div className="border-t border-gray-700 pt-4">
                            <h3 className="text-white mb-2  left-4">Specialties</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {specialties.map((specialty, index) => (
                                    <button
                                        key={specialty}
                                        className="text-gray-300 hover:text-white text-left py-2 flex items-center"
                                    >
                                        {specialty}
                                        {index === specialties.length - 1 && (
                                            <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                                new
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}

            <div className="hidden lg:block border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center space-x-6 overflow-x-auto py-2 text-sm text-gray-600">
                        {specialties.map((specialty, index) => (
                            <button
                                key={specialty}
                                className="whitespace-nowrap hover:text-blue-600 flex items-center"
                            >
                                {specialty}
                                <ChevronDown className="w-4 h-4 ml-1" />
                                {index === specialties.length - 1 && (
                                    <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                        new
                                    </span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;