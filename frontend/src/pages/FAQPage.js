import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Route/Footer/Footer";
import styles from "../styles/style";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};
const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className={`${styles.section}  my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto space-y-4">
        {/* SingleFaq */}
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(1)}
          >
            <span className="text-lg font-medium text-gray-900">
              What payment methods do you accept?
            </span>
            {activeTab === 1 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 1 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We accept various payment methods, including credit/debit cards
                (Visa, Mastercard, American Express), PayPal, and sometimes
                digital wallets like Apple Pay or Google Pay. At checkout, you
                can select the preferred payment method.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
              Is my payment information secure?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Yes, we prioritize the security of your payment information. We
                use industry-standard encryption technologies and comply with
                Payment Card Industry Data Security Standard (PCI DSS)
                requirements to ensure your data is protected.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-gray-900">
              Do you offer international shipping?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Yes, we offer international shipping to many countries. However,
                specific destinations may be subject to shipping restrictions.
                You can check the list of available countries during the
                checkout process.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-gray-900">
              What are your shipping charges?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Shipping charges may vary based on the destination, package
                weight, and shipping method. The applicable shipping charges
                will be displayed during the checkout process before you confirm
                your order.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              How long will it take to receive my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                The delivery time depends on your location and the shipping
                method chosen. During the checkout process, you will see an
                estimated delivery timeframe based on your address. Once the
                order is shipped, we will provide you with a tracking number to
                monitor the progress.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Can I cancel or modify my order?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We strive to process orders promptly. However, if you need to
                cancel or modify your order, please contact our customer support
                as soon as possible. We will do our best to accommodate your
                request, but it may not always be possible if the order is
                already in the shipping process.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              What is your return and refund policy?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We have a return and refund policy that allows you to return
                products within a specified period (e.g., 30 days) from the date
                of delivery. The returned items should be in their original
                condition. Please refer to our "Returns" or "Refund Policy" page
                on our website for detailed information or contact our customer
                support for assistance.
              </p>
            </div>
          ) : null}
        </div>
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(8)}
          >
            <span className="text-lg font-medium text-gray-900">
              What if I receive a damaged or defective item?
            </span>
            {activeTab === 8 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                file="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 8 ? (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                If you receive a damaged or defective item, please contact our
                customer support immediately. We will assist you in resolving
                the issue by either providing a replacement, initiating a
                return, or offering a refund, depending on the situation.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
