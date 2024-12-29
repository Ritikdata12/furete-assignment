import React from "react";
import "./BodySection.css";

function BodySection() {
    const clinics = [
        {
            name: "Pristyn Care",
            address: "H/56, Ground Floor, Sector 51, Near Diamond Crown Banquet Hall, Noida, Uttar Pradesh 201301",
            rating: 4.7,
            type: "Surgical Clinic",
            image: "https://img.pristyncare.com/static_pages%2F012.jpg",
        },
        {
            name: "Pristyn Care",
            address: "No 142, Avtar Enclave, Choudhary Balbir Singh Marg, Paschim Vihar, New Delhi, Delhi 110063",
            rating: 4.7,
            type: "Surgical Clinic",
            image: "https://img.pristyncare.com/clinics_images%2F(16)Pristyncare%20Clinic.webp",
        },
        {
            name: "Pristyn Care",
            address: "No C 65 & 66, Nawada Housing Complex, Nawada, Opposite Pillar No 795, New Delhi, Delhi 110059",
            rating: 4.5,
            type: "Surgical Clinic",
            image: "https://img.pristyncare.com/new_brand%2Felements%2FPristyn-Care-Logo.jpg",
        },
        {
            name: "Pristyn Care",
            address: "No E29, Saket, Near ICICI Bank, New Delhi, Delhi 110017",
            rating: 4.8,
            type: "Surgical Clinic",
            image: "https://img.pristyncare.com/clinics_images%2F(20)Pristyncare%20Clinic.webp",
        },
        {
            name: "Pristyn Care",
            address: "C 50 First Floor, Block C, Greater Kailash 1, New Delhi, Delhi 110048",
            rating: 4.6,
            type: "Surgical Clinic",
            image: "https://img.pristyncare.com/clinics_images%2F(32)Pristyncare%20Clinic.webp",
        },
    ];

    return (
        <div className="p-4 bd1" style={{ marginBottom: "100px" }}>
            <h1 className="text-2xl font-bold text-center mb-6">Our Clinics in Delhi</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bd2">
                <div className="h-[500px]  border-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14117.269529557987!2d76.63023946569358!3d27.799999949214506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972a532c5619c6d%3A0xe58dedd88edf0e4b!2sKhairthal%2C%20Rajasthan%20301404!5e0!3m2!1sen!2sin!4v1735472666053!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="max-h-[500px] w-[800px] overflow-y-auto border rounded-lg shadow-lg p-4  bd4">
                    <div className="grid grid-cols-1 gap-4">
                        {clinics.map((clinic, index) => (
                            <div
                                key={index}
                                className="border p-4 rounded-lg shadow-sm hover:shadow-lg"
                            >
                                <div className="flex gap-4">
                                    <img
                                        src={clinic.image}
                                        alt={clinic.name}
                                        className="h-24 w-24 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <h3 className="text-lg font-semibold">{clinic.name}</h3>
                                        <p className="text-sm text-gray-600">{clinic.address}</p>
                                        <p className="text-sm mt-2 text-gray-600">{clinic.type}</p>
                                        <div className="flex items-center text-sm">
                                            <span className="text-yellow-500 text-xl">&#9733;</span>
                                            <span className="ml-2 font-medium">{clinic.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodySection;
