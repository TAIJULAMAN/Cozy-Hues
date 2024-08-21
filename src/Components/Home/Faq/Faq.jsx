/* eslint-disable react/no-unescaped-entities */
import FaqAccordion from "./FaqAccordion";


function Faq() {
    const data = [
        { question: 'How do I choose the right furniture for my space?', answer: 'Progressively engineer global mindshare for technically sound e-services. Rapidiously integrate error-free imperatives rather than scalable technologies. Dynamically leverage existing leading-edge manufactured products without market-driven models. Proactively develop sustainable paradigms via inexpensive manufactured products. Uniquely engineer viral relationships without resource sucking solutions' },
        { question: 'What materials are your furniture items made of?',answer: 'Progressively engineer global mindshare for technically sound e-services. Rapidiously integrate error-free imperatives rather than scalable technologies. Dynamically leverage existing leading-edge manufactured products without market-driven models. Proactively develop sustainable paradigms via inexpensive manufactured products. Uniquely engineer viral relationships without resource sucking solutions' },
        { question: 'What is your delivery process?',answer: 'Progressively engineer global mindshare for technically sound e-services. Rapidiously integrate error-free imperatives rather than scalable technologies. Dynamically leverage existing leading-edge manufactured products without market-driven models. Proactively develop sustainable paradigms via inexpensive manufactured products. Uniquely engineer viral relationships without resource sucking solutions'  },
        { question: 'What i your returnand exchange policy?', answer: 'Progressively engineer global mindshare for technically sound e-services. Rapidiously integrate error-free imperatives rather than scalable technologies. Dynamically leverage existing leading-edge manufactured products without market-driven models. Proactively develop sustainable paradigms via inexpensive manufactured products. Uniquely engineer viral relationships without resource sucking solutions'  },
        { question: 'How can I contact customer support for assistance?', answer: 'Progressively engineer global mindshare for technically sound e-services. Rapidiously integrate error-free imperatives rather than scalable technologies. Dynamically leverage existing leading-edge manufactured products without market-driven models. Proactively develop sustainable paradigms via inexpensive manufactured products. Uniquely engineer viral relationships without resource sucking solutions'  },
      ];
  return (
    <div className="App p-8 md:p-24   mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#282726]">Got Questions? We've<br /> Got Answers</h1>
      <FaqAccordion data={data} />
    </div>
  )
}

export default Faq