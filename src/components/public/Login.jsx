import SignupFormDemo from "../ui/signup-form-demo";
export default function Login() {
    return (
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center bg-[linear-gradient(to_bottom_right,#FFCBA4,#111827,#F97316,#3B82F6)]">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-4xl  text-white ">Welcome to Hotel The Grand`</h1>
                <p className="leading-relaxed mt-4 text-2xl text-white">Take a step futher.</p>
            </div>
            <div className="mr-7  lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <SignupFormDemo />
            </div>
        </div>
    );
}