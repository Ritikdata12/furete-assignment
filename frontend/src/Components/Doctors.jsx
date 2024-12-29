import React, { useState } from "react";
import "./Doctors.css";

const doctors = [
    {
        name: "Dr. Piyush Kapur",
        specialization: "Ophthalmologist",
        experience: "27 Years Experience",
        fee: "FREE Consultation",
        rating: "4.9/5",
        location: "Delhi",
        phone: "9355-518-391",
        image:
            "https://img.pristyncare.com/Medical_Services_Dashboard/2024-11-22T13:23:11.451Z_Dr.-Piyush-Kapur 3.jpg/1732281792742_ban-Icon.png",
        oldFee: "₹1000",
    },
    {
        name: "Dr. Nikita Trehan",
        specialization: "Laparoscopic Surgery",
        experience: "25 Years Experience",
        fee: "₹500 Consultation Fee",
        rating: "4.9/5",
        location:
            "F-1, Gate, No 2, Garden Ln, Kalindi Colony, New Delhi",
        phone: "6366-527-977",
        image:
            "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-10T12:18:40.182Z_Dr.-Nikita-Trehan%202.jpg/1725970720465_ban-Icon.png",
        oldFee: "₹1000",

    },
    {
        name: "Dr. Debashish Chanda",
        specialization: "Orthopedics",
        experience: "16 Years Experience",
        fee: "₹1200 Consultation Fee",
        rating: "4.8/5",
        location: "Delhi",
        phone: "9355-517-566",
        image: "https://img.pristyncare.com/Medical_Services_Dashboard/2024-09-14T11:43:14.161Z_Dr-Debashish%202.jpg/1726314193921_ban-Icon.png",
        oldFee: "₹2400",

    },
    {
        name: "Dr. Santosh Kumar Tiwari",
        specialization: "Vascular Surgeon",
        experience: "23 Years Experience",
        fee: "FREE Consultation",
        rating: "4.7/5",
        location: "Delhi",
        phone: "6366-448-340",
        image: "https://img.pristyncare.com/Medical_Services_Dashboard/2024-06-26T13:23:51.703Z_Dr.-Santosh-Kumar-Tiwari.jpg/1719408232322_ban-Icon.png",
        oldFee: "₹1200",

    }
    ,
    {
        name: "Dr. Manu Bora",
        specialization: "Orthopedics",
        experience: "18 Years Experience",
        fee: "₹1500 Consultation Fee",
        rating: "4.7/5",
        location:
            "F10/4, Golf Course Road, DLF Phase 1, Sector 27, Gurugram",
        phone: "8527-488-190",
        image: "https://img.pristyncare.com/Medical_Services_Dashboard/2024-02-27T13:27:02.576Z_Dr.-Manu-Bora%20(2).jpg/1709040422595_ban-Icon.png",
        oldFee: "₹3000",

    },
    {
        name: "Dr. Varun Gogia",
        specialization: "Ophthalmologist",
        experience: "17 Years Experience",
        fee: "₹500 Consultation Fee",
        rating: "4.9/5",
        location: "Pristyn Care Iclinix Lajpat Nagar Clinic",
        phone: "9355-518-391",
        image: "https://img.pristyncare.com/Medical_Services_Dashboard/2024-12-03T16:48:12.824Z_1719465034402_ban-Icon.png/1733244491990_ban-Icon.png",
        oldFee: "₹1000",

    },
];

const Doctors = () => {
    const [selectedSpecialization, setSelectedSpecialization] = useState("All");

    const specializations = [
        "All",
        ...new Set(doctors.map((doctor) => doctor.specialization)),
    ];

    const filteredDoctors =
        selectedSpecialization === "All"
            ? doctors
            : doctors.filter(
                (doctor) => doctor.specialization === selectedSpecialization
            );

    return (
        <div className="doc1">
            <div className=" doc2">
                <div className="mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold mb-4 md:mb-0">
                            Our Doctors In Delhi
                        </h1>
                        <div className="flex items-center">
                            <label
                                htmlFor="specialization"
                                className="mr-4 text-gray-700 text-lg"
                            >
                                Specialization:
                            </label>
                            <select
                                id="specialization"
                                value={selectedSpecialization}
                                onChange={(e) => setSelectedSpecialization(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {specializations.map((specialization, index) => (
                                    <option key={index} value={specialization}>
                                        {specialization}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 doc4">
                        {filteredDoctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition doc3"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={doctor.image || "https://via.placeholder.com/100"}
                                        alt={doctor.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-xl font-bold">{doctor.name}</h2>
                                        <p className="text-gray-600">{doctor.specialization}</p>
                                        <div className="flex items-center mt-1">
                                            <p className="text-gray-500 line-through mr-4">{doctor.oldFee}</p>
                                            <p className="text-green-600 font-bold">{doctor.fee}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-4 flex items-center mr-12 text-gray-600">
                                    <p className="text-yellow-600 mr-8 font-bold">⭐ {doctor.rating}</p>
                                    <p>{doctor.experience}</p>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>📍 {doctor.location}</p>
                                </div>
                                <div className="mt-4 flex space-x-4">
                                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex-grow">
                                        📞 Call Us: {doctor.phone}
                                    </button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex-grow">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;