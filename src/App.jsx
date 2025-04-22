import React from 'react';
import CancellationRefundPolicy from './CancellationRefundPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import ShippingPolicy from './ShippingPolicy';
import PricingPolicy from './PricingPolicy';

function App() {

  return (
      <Router>
      <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/pricing-policy" element={<PricingPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
