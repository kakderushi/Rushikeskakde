import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';


const ResumeDownload = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
            <motion.a
                href="https://drive.google.com/file/d/12IgJKIWL6c4tR_bGNbijgvD21kJknwUz/view?usp=drive_link"  // Make sure this points to the correct location of your resume
                download="Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
            >
                <FaDownload className="mr-3" /> Download Resume
            </motion.a>
        </motion.div>
    );
};

export default ResumeDownload;
