import React from "react";

const ExclusiveOfferSignup = () => {
  return (
    <div className="w-full bg-gray-200 py-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Unlock <span className="text-red-600 font-bold">EXCLUSIVE</span> offers and deals
      </h2>
      <p className="text-center mb-1 text-base md:text-lg">
        Sign up for email and text to get exclusive offers and special deals.
      </p>
      <p className="text-center mb-4 text-sm max-w-2xl">
        By clicking continue you agree to sign up to receive emails from Staples about special offers, products and services. See our{' '}
        <a href="#" className="underline text-blue-700 hover:text-blue-900">privacy policy</a> for more details.
      </p>
      <form className="flex flex-col items-center w-full max-w-md">
        <label htmlFor="email" className="self-start mb-1 font-medium">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ExclusiveOfferSignup; 