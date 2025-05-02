import React, { useState } from "react";

const jobs = [
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Australia",
    status: "open",
    tag: "ACCEPTING APPLICATIONS",
    description:
      "We are hiring a motivated Cold Caller / Appointment Setter to help us connect with potential clients and schedule qualified meetings. If you’re confident on calls, good at communication, and results-driven — this is for you. You’ll be given fresh leads weekly along with scripts, guidance, and tools. For every qualified appointment you set, you’ll earn $5, paid weekly.",
    responsibilities: [
      "Cold prospect leads and follow the script",
      "Engage prospects, pitch our services, and qualify interest",
      "Set appointments with interested leads",
      "Keep records of calls and outcomes in simple tracker",
      "Collaborate with our team for feedback and support",
    ],
    requirements: [
      "Fluent in English with clear speaking ability",
      "Confident, persistent, and target-driven",
      "Experience in cold calling or appointment setting (preferred)",
      "Stable internet connection and headset",
      "Ability to make calls independently (We provided tools or credits)",
      "Must be available for US timezones (9 AM-7 PM)",
    ],
    perks: [
      "$5 per qualified appointment (No cap!)",
      "Weekly payouts based on performance",
      "Scripts, tools, and full support provided",
    ],
  },
  {
    title: "Outreach & LinkedIn Page Management Intern",
    type: "Internship",
    location: "Remote",
    status: "open",
    tag: "ACCEPTING APPLICATIONS",
    description:
      "Assist in managing LinkedIn pages and outreach campaigns. Great opportunity for students and freshers interested in digital marketing.",
  },
  {
    title: "React Frontend Developer",
    type: "Contract/Freelance",
    location: "Remote",
    status: "closed",
    tag: "CLOSED",
    description: "Position closed.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract/Freelance",
    location: "Remote",
    status: "closed",
    tag: "CLOSED",
    description: "Position closed.",
  },
];

const faqs = [
  {
    q: "What technologies do you use?",
    a: "We use modern stacks like React, Node.js, Python, and cloud platforms.",
  },
  {
    q: "Do you provide hosting and domain registration?",
    a: "Yes, we offer end-to-end solutions including hosting and domain setup.",
  },
  {
    q: "How long does it take to build a website or web application?",
    a: "Typical projects take 2-6 weeks depending on complexity.",
  },
  {
    q: "Do you offer SEO optimization?",
    a: "Yes, all our solutions are SEO-friendly by default.",
  },
  {
    q: "Can I request custom features for my web application?",
    a: "Absolutely! We specialize in custom solutions.",
  },
  {
    q: "Do you provide eCommerce solutions?",
    a: "Yes, we build custom and platform-based eCommerce sites.",
  },
  {
    q: "How do I get started?",
    a: "Contact us via our website or apply for open positions.",
  },
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Show job list
  if (selectedJob === null) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0a1626] via-[#12213a] to-[#3380ff] py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#DB7908]">Inflame Tech</span>
            <span className="text-white"> Careers</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 shadow-lg bg-[#151f2e] border border-[#22304a] flex flex-col items-center ${
                job.status === "closed" ? "opacity-60" : ""
              }`}
            >
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white text-center w-full">
                  {job.title}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-4 mt-2">
                <span className="text-gray-300">{job.location}</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300">{job.type}</span>
              </div>
              {job.status === "open" ? (
                <span className="bg-green-700 text-xs text-white px-3 py-1 rounded-full mb-4">
                  {job.tag}
                </span>
              ) : (
                <span className="bg-red-800 text-xs text-white px-3 py-1 rounded-full mb-4">
                  {job.tag}
                </span>
              )}
              {job.status === "open" ? (
                <button
                  className="mt-2 bg-[#3380ff] hover:bg-[#2b9b43] text-white font-semibold px-6 py-2 rounded transition"
                  onClick={() => setSelectedJob(idx)}
                >
                  Apply Now
                </button>
              ) : (
                <span className="mt-2 text-gray-400 font-semibold">Position Closed</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show job description
  const job = jobs[selectedJob];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1626] to-[#12213a] py-12">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{job.title}</h2>
        <p className="text-gray-200 mb-6">{job.description}</p>
      </div>
      <div className="max-w-2xl mx-auto text-left text-white space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Responsibilities</h3>
          <ul className="list-disc ml-6 text-sm">
            {job.responsibilities?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Requirements</h3>
          <ul className="list-disc ml-6 text-sm">
            {job.requirements?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Perks</h3>
          <ul className="list-disc ml-6 text-sm">
            {job.perks?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">How to Apply</h3>
          <button
            className="bg-[#3380ff] hover:bg-[#1d5bbf] text-white font-semibold px-6 py-2 rounded transition"
            onClick={() => setShowForm(true)}
          >
            Apply Now
          </button>
          <button
            className="ml-4 text-gray-400 hover:text-white underline"
            onClick={() => {
              setSelectedJob(null);
              setShowForm(false);
            }}
          >
            Back to Careers
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-xl w-full max-w-lg p-8 relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-[#3380ff] mb-2">
              Apply for {job.title}
            </h2>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 bg-gray-100 rounded-md px-4 py-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 bg-gray-100 rounded-md px-4 py-3 outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
              />
              <input
                type="text"
                placeholder="Portfolio Link"
                className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
              />
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-500 mb-1">Resume</label>
                  <input type="file" className="w-full" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-500 mb-1">Cover Letter</label>
                  <input type="file" className="w-full" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  className="text-[#ff3366] font-semibold"
                  onClick={() => setShowForm(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-[#3380ff] transition"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in web design, web development, mobile app development, UI/UX design, and digital marketing."
    },
    {
      question: "Can you redesign my existing website or app?",
      answer: "Yes, we can revamp your existing platform to improve performance, user experience, and visual appeal."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Absolutely! We offer maintenance and support packages tailored to your needs."
    },
    {
      question: "Do you offer SEO optimization?",
      answer: "Yes, all our websites are built with SEO best practices and we offer additional optimization services."
    },
    {
      question: "What platforms do you develop on?",
      answer: "We work with platforms like React, Next.js, Laravel, Node.js, Flutter, and WordPress, among others.",
    },
    {
      question: "Can you integrate third-party APIs or tools?",
      answer: "Yes, we can integrate various APIs including payment gateways, analytics, CRMs, and more."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our form or email, and we'll schedule a consultation to discuss your project."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 bg-gradient-to-br from-[#10192a] to-[#1a233a] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden`}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                <span
                  className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary transition-all duration-200
                    ${openIndex === index ? 'bg-primary text-black rotate-180' : 'bg-black text-primary'}
                  `}
                >
                  {openIndex === index ? (
                    <span className="text-2xl font-bold">−</span>
                  ) : (
                    <span className="text-2xl font-bold">+</span>
                  )}
                </span>
              </button>
              <div
                className={`px-8 pb-6 text-gray-300 text-base transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;