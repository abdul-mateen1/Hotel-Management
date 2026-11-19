import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../services/userService';

export function GuestSignUpForm({onNext}) {
    const navigate = useNavigate();
    const [employeeFormData, setEmployeeFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        if (errorMsg) setErrorMsg("");

        setEmployeeFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        // e.preventDefault();

        // try {
        //     await createUser(employeeFormData);
        //     navigate("/dashboard");
        // } catch (e) {
        //     setErrorMsg(e.response?.data?.message || "Failed to generate a new User.");
        // }
        
        if(onNext) onNext();
    }
    function onCancel() {
        navigate("/");
    }
    const inputClass =
        "w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-800 outline-none transition focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20";

    const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

    return (
        <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-900 bg-white shadow-xl">
            <div className="rounded-t-xl bg-[#800020] px-6 py-5">
                <h2 className="text-xl font-semibold text-white">
                    Create New User
                </h2>
                <p className="mt-1 text-sm text-gray-200">
                    Enter the users details and assign a Role.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">

                {/* Inline Error Message Display */}
                {errorMsg && (
                    <div className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600 border border-red-200">
                        {errorMsg}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className={labelClass}>
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter first name"
                            value={employeeFormData.firstName}
                            onChange={handleChange}
                            className={inputClass}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className={labelClass}>
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter last name"
                            value={employeeFormData.lastName}
                            onChange={handleChange}
                            className={inputClass}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="user@gmail.com"
                        value={employeeFormData.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className={labelClass}>
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={employeeFormData.password}
                        onChange={handleChange}
                        className={inputClass}
                        autoComplete="new-password"
                        required
                    />
                </div>
                <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end mt-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-[#800020] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#600018] focus:outline-none focus:ring-2 focus:ring-[#800020]/30 focus:ring-offset-2"
                    >
                        Create User
                    </button>
                </div>
            </form>
        </div>
    );
}

// Main App Component establishing the full page layout
export default function App() {
    const [statusMessage, setStatusMessage] = useState("");

    const handleCancel = () => {
        setStatusMessage("Form creation cancelled.");
        setTimeout(() => setStatusMessage(""), 3000);
    };

    const handleSubmit = (data) => {
        setStatusMessage(`User ${data.firstName} ${data.lastName} created successfully!`);
        setTimeout(() => setStatusMessage(""), 4000);
    };

    return (
        // The background and centering utilities are applied here
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">

            {/* Optional: A simulated header or toast message area */}
            {statusMessage && (
                <div className="fixed top-6 bg-white border border-gray-200 shadow-lg rounded-lg px-6 py-3 text-sm font-medium text-gray-800 z-50 animate-fade-in-down">
                    {statusMessage}
                </div>
            )}

            {/* The Form Component */}
            <div className="w-full max-w-2xl transform transition-all duration-300 hover:-translate-y-1">
                <GuestSignUpForm onSubmit={handleSubmit} onCancel={handleCancel} />
            </div>

        </div>
    );
}