

import { useState } from "react";
import { BookingForm } from "./BookingForm";
import { Telescope } from "lucide-react";
import { GuestSignUpForm } from "./GuestSignUpForm";
import { useNavigate } from "react-router-dom";

export default function MultiForm() {

    const navigate = useNavigate();

    const [employeeFormData, setEmployeeFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { id: 1, label: "STEP 1" },
        { id: 2, label: "STEP 2" },
        { id: 3, label: "STEP 3" },
        { id: 4, label: "STEP 4" },
    ];

    // const goToStep = (stepNumber) => {
    //     setActiveStep(stepNumber);
    // };

    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        if (errorMsg) setErrorMsg("");

        setEmployeeFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handleSubmit1 () {  

        if(activeStep == 1 ){
            setActiveStep(2);
        }
    }
    function handleSubmit2 () {  

        if(activeStep == 2 ){
            setActiveStep(3);
        }
    }
    function handleSubmit3 () {  

        if(activeStep == 3 ){
            
        }
    }
    function onCancel () {  
        navigate("/");
    }

    const inputClass =
        "w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-800 outline-none transition focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20";

    const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                <div className="flex mx-auto flex-wrap mb-20">
                    {steps.map((step) => {
                        const isActive = activeStep === step.id;

                        return (
                            <button
                                key={step.id}
                                type="button"
                                onClick={() => goToStep(step.id)}
                                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider cursor-pointer ${isActive
                                    ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t"
                                    : "border-gray-200 text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5 mr-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                {step.label}
                            </button>
                        );
                    })}
                </div>

                <div className="w-full max-w-lg mx-auto">
                    {activeStep === 1 && (
                        <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-xl">
                            <div className="rounded-t-xl bg-[#800020] px-6 py-5">
                                <h2 className="text-xl font-semibold text-white">
                                    Create New User
                                </h2>
                                <p className="mt-1 text-sm text-gray-200">
                                    Enter the users details and assign a Role.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit1} className="space-y-5 p-6 sm:p-8">
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
                                        Email Address <span className="text-red-500">*</span>
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
                                        Password <span className="text-red-500">*</span>
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
                                        type="button"
                                        className="rounded-lg bg-[#800020] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#600018] focus:outline-none focus:ring-2 focus:ring-[#800020]/30 focus:ring-offset-2"
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div>
                            {/* Pass onNext={() => goToStep(3)} and onBack={() => goToStep(1)} to Step 2's form */}
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div>
                            {/* Pass onNext={() => goToStep(4)} and onBack={() => goToStep(2)} to Step 3's form */}
                        </div>
                    )}

                    {activeStep === 4 && (
                        <div>
                            {/* Pass onBack={() => goToStep(3)} to Step 4's form */}
                        </div>
                    )}
                </div>

                <div>
                    {/* <BookingForm /> */}
                </div>
            </div>
        </section>
    );
}