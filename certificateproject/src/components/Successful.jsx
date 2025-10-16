import React from 'react';
import Success from "../images/check-mark.png";
import Guard from "../images/guard.png";
import Document from "../images/document.png";

const Successful = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-20">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
         
            <img src={Success} alt="Success" className="w-40 h-40" />
        
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-[#475467] font-medium text-center mb-6">
          Your payment has been processed successfully. Your certificate application
          will now proceed to review.
        </p>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <img src={Guard} alt="Security" className="w-4 h-5 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 mb-1">Secure Payment</h3>
              <p className="text-sm text-green-700">
                Your payment information is encrypted and secure. We do not store your
                card details.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Go to Dashboard
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-6 rounded-lg border-2 border-green-600 transition-colors flex items-center justify-center gap-2">
            <img src={Document} alt="Document" className="w-4 h-5" />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successful;