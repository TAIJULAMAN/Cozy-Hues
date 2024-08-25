import HeaderContact from "./HeaderContact";

function Contact() {
  return (
    <div >
      
      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center ">
        <p className="text-3xl md:text-5xl font-semibold">Contact Us</p>
      </div>
      {/* contact header part */}
      <div className="py-20">
      <HeaderContact/>
      </div>
      
    </div>
  );
}

export default Contact;
