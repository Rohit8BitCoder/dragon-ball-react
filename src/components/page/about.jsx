export default function About(){

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
                <p className="text-gray-700 mb-4">
                    Welcome to our Dragon Ball character database! Here, you can explore the rich universe of Dragon Ball, 
                    featuring detailed information about your favorite characters and planets.
                </p>
                <p className="text-gray-700 mb-4">
                    Our mission is to provide fans with a comprehensive resource for all things Dragon Ball. 
                    Whether you're a long-time fan or new to the series, we hope you find our database informative and enjoyable.
                </p>
                <p className="text-gray-700 mb-4">
                    Thank you for visiting, and may your journey through the Dragon Ball universe be filled with adventure!
                </p>
            </div>
        </div>
    );
}