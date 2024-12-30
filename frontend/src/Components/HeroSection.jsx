import React, { useState } from "react";
import { PhoneCall, ChevronDown } from "lucide-react";
import axios from "axios";
import "./HeroSection.css";

const HeroSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobileNo: "",
        date: "",
        disease: "",
    });

    const [message, setMessage] = useState("");

    const stats = [
        { value: "200K+", label: "Happy Patients" },
        { value: "60K+", label: "Surgeries" },
        { value: "800+", label: "Hospitals" },
        { value: "400+", label: "Doctors" },
        { value: "45+", label: "Cities" },
        { value: "150+", label: "Clinics" },
    ];

    const treatments = [
        { name: "Piles", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Fpiles.svg" },
        { name: "Anal Fistula", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffistula.svg" },
        { name: "Anal Fissure", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffissure.svg" },
        { name: "Gallstone", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FGalstone.svg" },
        { name: "Lasik Eye Surgery", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FLasik3.svg" },
        { name: "Hernia", icon: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FHernia.svg" },
        { name: "Laser Circumcision", icon: "https://img.pristyncare.com/Update_disease_icons%2FIcons-Circumcision.svg" },
        { name: "Enlarged Prostate (BPH)", icon: "https://img.pristyncare.com/Update_disease_icons%2FIcons-ProstateEnlargement.svg" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Date validation logic
        const today = new Date();
        const selectedDate = new Date(formData.date);

        if (selectedDate < today.setHours(0, 0, 0, 0)) {
            setMessage("Cannot select a past date. Please choose a valid date.");
            return;
        }

        try {
            const response = await axios.post("https://furete-assignment.vercel.app/api/patients", formData);
            setMessage(response.data.message || "Appointment booked successfully!");
            setFormData({ name: "", mobileNo: "", date: "", disease: "" });
        } catch (error) {
            console.error(error);
            // Handle backend validation errors
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Failed to book appointment. Please try again.");
            }
        }
    };

    return (
        <div className="mx-auto px-4 py-8 hs1">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-blue-500 ">
                        Simplifying Surgery Experience in <br /> Delhi
                    </h1>
                    <p className="text-gray-600 font-bold text-2xl">
                        Book Free Appointments With Our Expert Doctors Near You
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2FComponent%2017%20%E2%80%93%201%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                                Get consultation for 50+ diseases across India
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2Fdoctor%20(6)%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                                In-person and online consultation with experienced doctors
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md justify-center items-center">
                            <img
                                src="https://img.pristyncare.com/HomePage%2FComponent%2016%20%E2%80%93%201%403x.png"
                                className="text-blue-500 mb-2"
                            />
                            <p className="text-sm">
                                Extensive medical assistance throughout your treatment
                            </p>
                        </div>
                    </div>

                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center">
                        <PhoneCall className="w-4 h-4 mr-2" />
                        Call Us: 8527-488-190
                    </button>
                </div>

                <div className="bg-slate-900 p-8 rounded-lg text-white hs3">
                    <h2 className="text-xl font-bold mb-4">Book FREE Doctor Appointment</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Patient Name"
                            className="w-full p-3 rounded text-black"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="mobileNo"
                            placeholder="Mobile Number"
                            className="w-full p-3 rounded text-black"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            className="w-full p-3 rounded text-black"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="disease"
                            className="w-full p-3 rounded text-black"
                            value={formData.disease}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Disease</option>
                            {treatments.map((treatment) => (
                                <option key={treatment.name} value={treatment.name}>
                                    {treatment.name}
                                </option>
                            ))}
                        </select>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
                            Book Free Appointment
                        </button>
                    </form>
                    {message && <p className="mt-4 text-center">{message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-8 bg-blue-500 rounded-lg p-4 border border-black">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center text-white">
                        <div className=" text-2xl  font-bold">{stat.value}</div>
                        <div className="text-2xl  hsl">{stat.label}</div>

                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 my-8 hs5">
                {treatments.map((treatment) => (
                    <div
                        key={treatment.name}
                        className="text-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                        <div className="text-2xl mb-2">
                            <img src={treatment.icon} alt={treatment.name} />
                        </div>
                        <div className="text-md font-bold text-black">{treatment.name}</div>
                    </div>
                ))}
            </div>

            <button className="mx-auto flex items-center text-orange-500 font-medium">
                View More
                <ChevronDown className="ml-1 w-4 h-4" />
            </button>
        </div>
    );
};

export default HeroSection;
