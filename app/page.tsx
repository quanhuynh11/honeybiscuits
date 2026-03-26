"use client";
export default function HomePage() {
    return (
        <div className="p-5 flex justify-center bg-neutral-800 w-screen h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl mb-5">Honey Biscuits</h1>
                <img className="w-1/2" src="./images/honeybiscuit.webp" alt="Honey Biscuits" />
                <button className="bg-orange-500 rounded-sm p-5 w-1/2" onClick={() => window.location.href = "/recruitment-page"}>Recruitment</button>
            </div>
        </div>
    );
}
