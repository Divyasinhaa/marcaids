import React, { useState } from "react";
import "./FAQ.css"; // Import your custom styles if necessary


const faqData = [
  { 
    question: "How does smartphone marketing help businesses grow?", 
    answer: "Smartphone marketing helps businesses by enabling them to reach their target audience anytime and anywhere. With strategies like SMS marketing, mobile-friendly websites, push notifications, and mobile ads, brands can enhance engagement and drive more conversions."
  },
  { 
    question: "How is digital marketing important for the stock market industry?", 
    answer: "Digital marketing in the stock market industry builds trust through educational content, webinars, newsletters, and real-time updates. It helps stock companies attract investors, build credibility, and increase trading activity through online platforms."
  },
  { 
    question: "What are effective marketing strategies for clothing brands?", 
    answer: "Clothing brands use social media campaigns, influencer collaborations, email marketing, and seasonal promotions to create brand awareness and boost sales. Visual storytelling and customer-generated content are especially powerful tools in fashion marketing."
  },
  { 
    question: "How can digital marketing boost sales for protein and fitness products?", 
    answer: "Marketing protein and fitness products through content marketing, influencer partnerships, targeted ads, and fitness community engagement helps build brand trust. Highlighting product benefits through videos, blogs, and social proof significantly increases conversion rates."
  }
  // Add more questions and answers here
];


const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close the currently opened FAQ
    } else {
      setExpandedIndex(index); // Open the clicked FAQ
    }
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq">
      <h2>FAQs</h2>
      <h1>Frequently Asked Questions</h1>
      <p>Have Questions? We're here to help.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className='faq-search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {/* FAQ List */}
      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{expandedIndex === index ? "-" : "+"}</span>
              </div>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
