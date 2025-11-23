
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-6xl w-full rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Form left side */}
        <div className="p-10">
          <h4 className="text-green-400 text-center font-semibold mb-3 text-2xl">
            Get in Touch with Traamp
          </h4>

          <h1 className="text-green-800 text-4xl font-bold mb-4">
            Let&apos;s Chat, Reach Out to Us
          </h1>


          <p className="text-gray-600 mb-8">
            Have questions or feedback? We&apos;re here to help. Send us a message,
            and we&apos;ll respond within 24 hours.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border rounded-xl p-3 w-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border rounded-xl p-3 w-full focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="border rounded-xl p-3 w-full focus:outline-none"
            />

            <textarea
              placeholder="Leave us a message"
              className="border rounded-xl p-3 w-full h-28 resize-none focus:outline-none"
            ></textarea>

            <button className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Form right side */}
        <div className="flex flex-col justify-between p-10">
          
          {/* Floating Contact Image */}
          <div className="flex justify-center mb-8">
            <div className="rounded-3xl flex items-center justify-center w-full animate-[gentleFloat_4s_ease-in-out_infinite]">
              <Image
                src="/contact.png"
                alt="Person using phone"
                width={600}
                height={600}
                className=" object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fa fa-envelope text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">infotraamp@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fa fa-phone text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+94 71 851 2786</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
