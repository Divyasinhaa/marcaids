import React, { useState } from "react";
import "./FAQ.css"; // Import your custom styles if necessary

const faqData = [
  { 
    question: "What is peer-to-peer learning on SkillBridge?", 
    answer: "Peer-to-peer learning on SkillBridge allows learners to gain knowledge directly from peers and seniors who have real-world experience. Instead of traditional one-way teaching, learning happens through discussions, shared experiences, and collaborative problem-solving."
  },
  { 
    question: "How does SkillBridge support micro-mentorship?", 
    answer: "SkillBridge enables short, focused mentorship sessions where learners can connect with peers for guidance on specific topics like projects, careers, interviews, or skills. This flexible approach ensures quick and practical learning without long-term commitments."
  },
  { 
    question: "Who can become a mentor on SkillBridge?", 
    answer: "Anyone with practical knowledge, industry experience, or strong understanding of a subject can become a mentor. Students, working professionals, and domain experts can share their skills and help others grow through peer learning."
  },
  { 
    question: "How does SkillBridge help with career and project guidance?", 
    answer: "SkillBridge connects learners with peers who have already worked on similar projects, internships, or job roles. Learners receive real-world insights, project feedback, and career advice based on firsthand experience."
  }
  // Add more questions and answers here
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq">
        <h2>FAQs</h2>
        <h1>Frequently Asked Questions</h1>
        <p>Have questions about SkillBridge? We’re here to help.</p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="faq-search"
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
