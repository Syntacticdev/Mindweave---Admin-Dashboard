import React from 'react';
import Link from 'next/link';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-lg mt-2 text-center max-w-md">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Go Back to Home
            </Link>

        </div>
    );
}

export default NotFound;