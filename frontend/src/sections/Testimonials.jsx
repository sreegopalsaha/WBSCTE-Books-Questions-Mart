import React from "react"

const testimonials = [
  {
    text: "This platform completely transformed my study routine! The premium notes are well-organized and super helpful for exams",
    imagesrc: "",
    name: "Soumya Das",
    username: "@soumya_das91",
  },
  {
    text: "I love how easy it is to access previous year questions and e-books. It's a one-stop solution for all my academic needs",
    imagesrc: "",
    name: "Rituparna Roy",
    username: "@ritu_roy21",
  },
  {
    text: "The notes are so well-organized and easy to understand. This is exactly what I needed!",
    imagesrc: "",
    name: "Priyanka Ghosh",
    username: "@priyanka.ghosh07",
  },
  {
    text: "Accessing previous year questions and e-books has never been this convenient. It's amazing to have everything I need in one platform!",
    imagesrc: "",
    name: "Anirban Chatterjee",
    username: "@anirban.chatt12",
  },
  {
    text: "This platform is a blessing for students. With all the study materials, including past questions, in one place, I've gained so much confidence in my studies!",
    imagesrc: "",
    name: "Sanchita Sen",
    username: "@sanchita_sen34",
  },
  {
    text: "The resources are fantastic! From past questions to premium notes, everything is right here. I've recommended this to all my classmates.",
    imagesrc: "",
    name: "Ankita Paul",
    username: "@ankita_paul19",
  },
  {
    text: "Finding all previous year questions and e-books in one place has been a game-changer for my studies. I couldn't ask for a better resource!",
    imagesrc: "",
    name: "Rajesh Mondal",
    username: "@rajesh_mondal92",
  },
  {
    text: "This platform has every e-book I've ever needed, along with an extensive collection of PYQs. It's perfect for exam preparation!",
    imagesrc: "",
    name: "Aparna Chakraborty",
    username: "@aparna_chak96",
  },
  {
    text: "The previous year question bank and e-books available here saved me so much time. Everything is organized and easy to access.",
    imagesrc: "",
    name: "Subhajit Saha",
    username: "@subhajit_saha88",
  },
  {
    text: "Having access to e-books and a comprehensive collection of previous year questions in one place has simplified my preparation process so much",
    imagesrc: "",
    name: "Tanmoy Bhattacharya",
    username: "@tanmoy_bhatt13",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-[640px] mx-auto mb-16">
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            What our users say
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mt-5">
            From previous year questions to exam notes, our app has become an essential tool for users around West
            Bengal
          </p>
        </div>
        <div className="flex justify-center gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {firstColumn.map(({ text, imagesrc, name, username }, index) => (
              <div
                key={index}
                className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              >
                <p className="text-[#010D3E] mb-5">{text}</p>
                <div className="flex items-center gap-2 mt-5">
                  <img src={imagesrc || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-[#001E80]">{name}</div>
                    <div className="leading-5 tracking-tight text-[#010D3E]/70">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {secondColumn.map(({ text, imagesrc, name, username }, index) => (
              <div
                key={index}
                className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              >
                <p className="text-[#010D3E] mb-5">{text}</p>
                <div className="flex items-center gap-2 mt-5">
                  <img src={imagesrc || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-[#001E80]">{name}</div>
                    <div className="leading-5 tracking-tight text-[#010D3E]/70">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {thirdColumn.map(({ text, imagesrc, name, username }, index) => (
              <div
                key={index}
                className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              >
                <p className="text-[#010D3E] mb-5">{text}</p>
                <div className="flex items-center gap-2 mt-5">
                  <img src={imagesrc || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-[#001E80]">{name}</div>
                    <div className="leading-5 tracking-tight text-[#010D3E]/70">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}