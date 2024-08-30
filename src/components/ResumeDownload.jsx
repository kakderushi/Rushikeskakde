import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeDownload = () => {
    return (
        <div className="text-center p-4 text-white rounded-md">
            <h2 className="text-2xl font-semibold mb-3">Download My Resume</h2>
            <a
                href="https://drive.google.com/file/d/12IgJKIWL6c4tR_bGNbijgvD21kJknwUz/view?usp=drive_link"  // Ensure this is the correct link to your resume
                download="Resume.pdf"
                className="inline-flex items-center px-6 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-200 transition duration-200"
            >
                <FaDownload className="mr-2" /> Download Resume
            </a>
        </div>
    );
};

export default ResumeDownload;
