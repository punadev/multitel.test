import React from 'react';
import FeedbackHeader from './FeedbackHeader';
import FeedbackForm from './FeedbackForm';

const FeedbackPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <FeedbackHeader />
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;