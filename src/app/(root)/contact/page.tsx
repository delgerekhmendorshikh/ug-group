export default function Contacts() {
  return (
    <div className="my-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col space-y-10">
        <div>
          <p className="text-black">HOME → CONTACT US</p>
          <p className="w-[70%] text-[42px] text-black">Let’s Connect</p>
        </div>

        <div className="flex w-full justify-between gap-4">
          <div className="w-[50%] rounded-[12px] bg-white p-8">
            <p className="mb-6 text-[24px]">Contact Us</p>
            {
              <div className="space-y-4">
                <div className="w-full">
                  <p className="text-[#414545]">First name*</p>
                  <input
                    type="text"
                    placeholder="Enter a name"
                    className="mt-1 w-full rounded-[12px] border bg-[#f6eee6] p-3 text-[#767777] placeholder:text-[#767777]"
                  />
                </div>
                <div>
                  <p className="text-[#414545]">Business email*</p>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-[12px] border bg-[#f6eee6] p-3 text-[#767777] placeholder:text-[#767777]"
                  />
                </div>
                <div>
                  <p className="text-[#414545]">Phone number*</p>
                  <input
                    type="tel"
                    placeholder="+976 **** ****"
                    className="mt-1 w-full rounded-[12px] border bg-[#f6eee6] p-3 text-[#767777] placeholder:text-[#767777]"
                  />
                </div>
                <div>
                  <p className="text-[#414545]">I'm interested in*</p>
                  <input
                    type="text"
                    placeholder="Your ..."
                    className="mt-1 w-full rounded-[12px] border bg-[#f6eee6] p-3 text-[#767777] placeholder:text-[#767777]"
                  />
                </div>
                <div>
                  <p className="text-[#414545]">Message</p>
                  <textarea
                    placeholder="Leave a message"
                    className="mt-1 h-28 w-full rounded-[12px] border bg-[#f6eee6] p-3 text-[#767777] placeholder:text-[#767777]"
                  ></textarea>
                </div>

                <p className="text-[14px] text-[#414545]">
                  By submitting the form you agree to our
                  <span className="text-[#C79D58]"> Privacy Policy </span>
                  and
                  <span className="text-[#C79D58]"> Terms of Service</span>
                </p>
              </div>
            }
          </div>
          <div className="w-[50%] rounded-[12px] p-8 ">
            <div className="flex flex-col justify-between space-y-6 py-[5%]">
              <div>
                <p className="text-[20px]">Sales department</p>
                <p className="text-[14px] text-gray-700">
                  Do you have a collaboration project? Contact our friendly
                  team.
                </p>
                <p className="mt-1 text-[#414545] underline">
                  Sales@urangan.com
                </p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-[20px]">Email</p>
                <p className="text-[14px] text-gray-700">
                  Send us an email and we will get back to you within 24 hours.
                </p>
                <p className="mt-1 text-[#414545] underline">
                  support@urangan.com
                </p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-[20px]">Phone number</p>
                <p className="text-[14px] text-gray-700">
                  Mon - Fri, 09:00 AM - 5:00 PM (UTC/GMT + 8:00)
                </p>
                <p className="mt-1 text-[#414545]">+976 72131842</p>
                <p className="text-[#414545]">+976 72152362</p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="text-[20px]">Ulaanbaatar, Mongolia</p>
                <p className="text-[14px] text-gray-700">
                  Visit our office Mon - Fri, 09:00 AM - 05:00 PM
                </p>
                <p className="mt-1 text-gray-600">
                  Bayangol district, 3 khoroo, Teewerchid street, Ulaanbaatar,
                  Mongolia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
