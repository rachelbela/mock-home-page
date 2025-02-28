/*
 * @Author: rachel
 * @Date: 2025-02-28 11:11:17
 * @LastEditTime: 2025-02-28 22:06:15
 * @LastEditors: Please set LastEditors
 */
'use client';
import Image from "next/image";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 引入 Swiper 样式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper.css";


const departments = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
]
const jobTypes = [
  { id: 1, name: 'Hellen Schmidt' },
  { id: 2, name: 'Caroline Schultz' },
  { id: 3, name: 'Mason Heaney' },
  { id: 4, name: 'Claudie Smitham' },
];

const jobs = [
  { id: 1, icon: "/svgs/message-programming.svg", hover: "/svgs/message-programming-hover.svg", name: "developer", description: "Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.", features: [{ id: 1, text: "211k+contracts" }, { id: 2, text: "1665 skills" }] },
  { id: 2, icon: "/svgs/bezier.svg", hover: "/svgs/bezier-hover.svg", name: "developer", description: "Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.", features: [{ id: 1, text: "211k+contracts" }, { id: 2, text: "1665 skills" }] },
  { id: 3, icon: "/svgs/status-up.svg", hover: "/svgs/status-up-hover.svg", name: "developer", description: "Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.", features: [{ id: 1, text: "211k+contracts" }, { id: 2, text: "1665 skills" }] }

]

const reasons = [
  {
    id: 1, icon: "/svgs/star.svg", subject: "Proof of quality", text: "Check any pro’s work samples, client reviews, and identity verification."
  },
  {
    id: 2, icon: "/svgs/24-support.svg", subject: "Safe and secure", text: "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it."
  },
  {
    id: 3, icon: "/svgs/coin.svg", subject: "No cost until you hire", text: "Interview potential fits for your job, negotiate rates, and only pay for work you approve."
  },
]

export default function Home() {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[3])
  const [selectedJobType, setSelectedJobType] = useState(jobTypes[3])
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="min-h-screen">
      <nav className="h-20 flex items-center px-30 z-10">
        <Image src="/svgs/logo.svg" alt="logo" width={96} height={32} className="mr-20" />
        <ul className="hidden lg:flex items-center justify-start space-x-10 text-black lg:flex-1">
          <li className="hover:text-[#4864E1] hover:cursor-pointer hover:transition-all">Find Talent</li>
          <li className="hover:text-[#4864E1] hover:cursor-pointer hover:transition-all">Clients</li>
          <li className="hover:text-[#4864E1] hover:cursor-pointer hover:transition-all">Community</li>
          <li className="hover:text-[#4864E1] hover:cursor-pointer hover:transition-all">Blog</li>
          <li className="hover:text-[#4864E1] hover:cursor-pointer hover:transition-all">About Us</li>
        </ul>
        <div className="flex space-x-8">
          <button className="hover:cursor-pointer py-3 px-8 rounded-4xl border border-white h-12 flex items-center justify-center text-white">
            Log In
          </button>
          <button className="hover:cursor-pointer py-3 px-8 rounded-4xl border border-white h-12 flex items-center justify-center text-white">
            Sign Up
          </button>
        </div>
        <Image src="/images/banner.webp" alt="banner" width={498} height={760} className="absolute top-0 right-20 z-[-1]" />
      </nav>
      <main>
        <section className="pb-20">
          <h1 className="ml-30 mt-14 mb-8 text-7xl font-medium leading-20 lg:w-[788px] w-[50%]">Portal Job for Developer, Designer, and Marketers</h1>
          <p className="ml-30 lg:w-[493px] w-[50%]">Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
          <div className="mt-12 w-[811px] pb-4 px-4 bg-gradient-to-r from-[rgba(249,249,251,0.56)] to-[#f9f9fb] rounded-3xl shadow-[32px_64px_64px_0px_rgba(158,150,150,0.08)] blur-[10px]">
            <div className="ml-30 flex">
              <button className={`hover:cursor-pointer flex flex-col items-center border-none ${activeTab === 1 ? "text-[#4864E1]" : "text-[#AEAEB2]"} px-4 pt-4 group`} onClick={() => { setActiveTab(1) }}>
                <span className="group-hover:text-[#4864E1] pb-4 group-hover:transition-all">Find Job</span>
                <span className={`${activeTab === 1 ? "w-8 bg-[#4864E1]" : "w-0"} w-0 group-hover:w-8 h-[1px] group-hover:bg-[#4864E1] group-hover:transition-all`}></span>
              </button>
              <button className={`hover:cursor-pointer flex flex-col items-center border-none ${activeTab === 2 ? "text-[#4864E1]" : "text-[#AEAEB2]"} hover:text-[#4864E1] p-4 group`} onClick={() => { setActiveTab(2) }}>
                <span className="group-hover:text-[#4864E1] pb-4 group-hover:transition-all">Find Talents</span>
                <span className={`${activeTab === 2 ? "w-8 bg-[#4864E1]" : "w-0"} w-0 group-hover:w-8 h-[1px] group-hover:bg-[#4864E1] group-hover:transition-all`}></span>
              </button>
            </div>
            <div className="ml-30 flex space-x-4">
              <div className="relative">
                <Image src="/svgs/search-blue.svg" alt="logo" width={16} height={16} className="absolute top-[15px] left-[15px] text-[#4864E1!important] fill-[#4864E1]" />
                <input
                  type="text"
                  placeholder="Search for job..."
                  className="pl-10 block w-[216px] h-12 rounded-3xl bg-white pr-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <Listbox value={selectedJobType} onChange={setSelectedJobType}>
                <Label className="hidden text-sm/6 font-medium text-gray-900">Apartment</Label>
                <div className="relative w-[186px] ">
                  <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-3xl bg-white py-3 pr-2 pl-10 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <Image src="/svgs/location.svg" alt="location" width={16} height={18} className="absolute top-[15px] left-[15px]" />
                    <span className="col-start-1 row-start-1 truncate pr-6">{selectedJobType?.name}</span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                  >
                    {jobTypes.map((jobType) => (
                      <ListboxOption
                        key={jobType.id}
                        value={jobType}
                        className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                      >
                        <span className="block truncate font-normal group-data-selected:font-semibold">{jobType.name}</span>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
              <Listbox value={selectedDepartment} onChange={setSelectedDepartment}>
                <Label className="hidden text-sm/6 font-medium text-gray-900">Apartment</Label>
                <div className="relative w-[186px]">
                  <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-3xl bg-white py-3 pr-2 pl-10 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <Image src="/svgs/briefcase.svg" alt="location" width={16} height={18} className="absolute top-[15px] left-[15px]" />
                    <span className="col-start-1 row-start-1 truncate pr-6">{selectedDepartment?.name}</span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                  >
                    {departments.map((department) => (
                      <ListboxOption
                        key={department.id}
                        value={department}
                        className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                      >
                        <span className="block truncate font-normal group-data-selected:font-semibold">{department.name}</span>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
              <button className="hover:cursor-pointer flex items-center justify-center border-none bg-[#4864E1] rounded-4xl w-[143px] h-12">
                <Image src="/svgs/search-white.svg" alt="logo" width={16} height={16} className="mr-2" />
                <span className="text-white">Search</span>
              </button>
            </div>
          </div>
          <div className="ml-30 mt-14">
            <div className="text-[#A2A1A7] text-lg mb-6 font-medium leading-6">Trusted by:</div>
            <div className="flex space-x-6">
              <Image src="/svgs/google.svg" alt="google" width={69} height={24} />
              <Image src="/svgs/microsoft.svg" alt="microsoft" width={113} height={24} />
              <Image src="/svgs/airbnb.svg" alt="airbnb" width={77} height={24} />
            </div>
          </div>
        </section>
        <section className="py-30 flex flex-col items-center bg-[#f9f9fb]">
          <h2 className="text-5xl font-medium mb-4">Featured Job</h2>
          <p className="w-[512px] text-center">Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
          <div className="mt-14 flex justify-center">
            <div className="flex rounded-4xl bg-white">
              {jobs.map(job => {
                return <div key={job.id} className="hover:cursor-pointer w-[362px] h-[424px] py-8 px-10 group hover:bg-[#4864E1]">
                  <Image src={job.icon} alt="" width={48} height={48} className="group-hover:hidden" />
                  <Image src={job.hover} alt="" width={48} height={48} className="hidden group-hover:block" />

                  <p className="mt-3 mb-6 text-2xl leading-8 font-medium text-[#4864E1] group-hover:text-white">{job.name}</p>
                  <p className="mb-6 leading-6 group-hover:text-white">{job.description}</p>
                  <ol className="text-lg leading-[26px] list-disc font-medium ml-4 group-hover:text-white mb-10">
                    {
                      job.features.map(feature => (
                        <li key={feature.id}>{feature.text}</li>
                      ))
                    }
                  </ol>
                  <button className="hover:cursor-pointer h-14 w-[149px] flex items-center justify-center border-[1px] border-solid border-[#4864E1] rounded-4xl text-[#4864E1] group-hover:text-white group-hover:border-white">Browse Job</button>
                </div>
              })}
            </div>

          </div>
        </section>
        <section className="text-white rounded-[48px] mx-14 bg-[url('/images/patern.webp')] bg-contain p-30 h-[800px] bg-[#021638] bg-no-repeat bg-right">
          <p className="text-xl leading-7 mb-4">For Clients</p>
          <h2 className="text-5xl leading-14 font-medium w-[365px] mb-12">Why businesses turn to Nguli</h2>
          <ul className="flex flex-col space-y-10">
            {reasons.map(reason => (
              <div key={reason.id} className="flex items-start">
                <Image src={reason.icon} alt="" width={48} height={48} className="mr-4" />
                <div>
                  <h3 className="text-2xl mb-3">{reason.subject}</h3>
                  <p className="text-[#A6A6A6] max-w-[364px]">{reason.text}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
        <section className="flex flex-col items-center p-30">
          <h2 className="text-5xl leading-14 font-medium mb-4">Find great work</h2>
          <p className="text-center w-[512px] mb-[54px]">Meet clients you’re excited to work with and take your career or business to new heights.</p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
            }}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000 }}
            loop
            className="my-swiper w-full h-[348px]"
          >
            <SwiperSlide>
              <div className="h-[348px] flex items-center justify-center text-white text-2xl">
                <div className="rounded-[23px] w-[418px] h-full bg-[#4864E1] mr-8 py-8 px-10">
                  <Image src="/svgs/user-search.svg" alt="" width={40} height={40} />
                  <p className="text-2xl text-white mt-3 mb-6">Find opportunities for every stage of your freelance career</p>
                  <div className="flex items-center mt-[72px] mb-10">
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                  </div>
                  <button className="text-base leading-6 w-[131px] h-14 flex items-center justify-center border-none bg-white text-[#4864E1] rounded-4xl">Join Now</button>
                </div>
                <Image src="/images/feature.webp" alt="" width={750} height={348} className="rounded-[23px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[348px] flex items-center justify-center text-white text-2xl">
                <div className="rounded-[23px] w-[418px] h-full bg-[#4864E1] mr-8 py-8 px-10">
                  <Image src="/svgs/user-search.svg" alt="" width={40} height={40} />
                  <p className="text-2xl text-white mt-3 mb-6">2 Find opportunities for every stage of your freelance career</p>
                  <div className="flex items-center mt-[72px] mb-10">
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                  </div>
                  <button className="text-base leading-6 w-[131px] h-14 flex items-center justify-center border-none bg-white text-[#4864E1] rounded-4xl">Join Now</button>
                </div>
                <Image src="/images/patern.webp" alt="" width={750} height={348} className="rounded-[23px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[348px] flex items-center justify-center text-white text-2xl">
                <div className="rounded-[23px] w-[418px] h-full bg-[#4864E1] mr-8 py-8 px-10">
                  <Image src="/svgs/user-search.svg" alt="" width={40} height={40} />
                  <p className="text-2xl text-white mt-3 mb-6">3 Find opportunities for every stage of your freelance career</p>
                  <div className="flex items-center mt-[72px] mb-10">
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                  </div>
                  <button className="text-base leading-6 w-[131px] h-14 flex items-center justify-center border-none bg-white text-[#4864E1] rounded-4xl">Join Now</button>
                </div>
                <Image src="/images/banner.webp" alt="" width={750} height={348} className="rounded-[23px]" />
              </div>
            </SwiperSlide>
            <div className="custom-next absolute top-1/2 left-[394px] transform -translate-y-1/2 z-10 cursor-pointer">
              <div className="bg-white rounded-full p-2 shadow-[12px_12px_24px_0px_rgba(2,22,56,0.24)]">
                <Image src="/svgs/arrow-circle-right.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </Swiper>
        </section>
        <section className="py-30 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-medium mb-16">Trusted by leading brands and startups</h2>
          <div className="w-4/5 mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              loop
              className="my-swiper2 w-full h-[380px]"
            >
              <SwiperSlide>
                <div className="flex items-center justify-center text-2xl">
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center mr-10">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar_1.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center text-2xl">
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center mr-10">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar_2.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar_3.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center text-2xl">
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center mr-10">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar_4.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[320px] w-[554px] py-8 px-10 rounded-3xl border border-solid border-[#CBD2F6] bg-[#F9F9FB] flex flex-col items-center">
                    <Image src="/svgs/quote-up.svg" alt="" width={32} height={32} className="mb-6" />
                    <p className="text-2xl font-medium text-center">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</p>
                    <div className="flex items-center my-6">
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                      <span className="w-[308px] h-[1px] bg-[#8E9DEB]"></span>
                      <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
                    </div>
                    <div className="flex">
                      <Image src="/svgs/avatar_5.svg" alt="" width={56} height={56} className="mr-3" />
                      <div>
                        <p className="text-base">Davis Rosser</p>
                        <p className="text-sm mt-1">Director of Content Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="custom-next absolute bottom-0 left-[50%] transform  translate-x-[30px] z-10 cursor-pointer">
                <Image src="/svgs/arrow-circle-right-normal.svg" alt="" width={32} height={32} />
              </div>
              <div className="custom-prev absolute bottom-0 left-[50%] transform -translate-x-[60px] z-10 cursor-pointer">
                <Image src="/svgs/arrow-circle-left-normal.svg" alt="" width={32} height={32} />
              </div>
            </Swiper>
          </div>
        </section>
        <section className="py-20 px-30 bg-[#4864E1] flex justify-between items-center h-70 text-white">
          <div>
            <h2 className="text-5xl font-medium mb-4">Find your next great opportunity!</h2>
            <p className="max-w-[627px]">We are taking action to help our freelancers, our clients, and the people of the world—and so can you.</p>
          </div>
          <button className="hover:cursor-pointer bg-white rounded-4xl h-14 w-[150px] flex justify-center items-center text-[#4864E1] font-semibold">Get Started</button>
        </section>
      </main>
      <footer className="px-30 pt-30 pb-8 bg-[#021638]">
        <div className="flex justify-between">
          <div>
            <Image src="/svgs/logo_dark.svg" alt="" width={115} height={40} />
            <p className="text-[#AEAEB2] w-[363px] mt-4">We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.</p>
          </div>
          <div className="flex space-x-10 text-[#C5C5C5] flex-1 justify-center">
            <ul>
              <li className="flex flex-col justify-end space-y-8">
                <a href="">Find Talent</a>
                <a href="">FAQ</a>
              </li>
            </ul>
            <ul>
              <li className="flex flex-col justify-end space-y-8">
                <a href="">Clients</a>
                <a href="">About Us</a>
              </li>
            </ul>
            <ul>
              <li className="flex flex-col justify-end">
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <label htmlFor="name" className="pl-px block pb-8 font-medium text-[#C5C5C5]">
              Newsletter
            </label>
            <div className="mt-2 flex">
              <input
                id="name"
                name="name"
                type="email"
                placeholder="Your email here"
                className="block w-full rounded-full bg-[rgba(255,255,255,0.12)] px-8 py-4 text-base text-white placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button className="hover:cursor-pointer ml-4 flex-shrink-0 w-[104px] h-14 text-white bg-[#4864E1] rounded-4xl">Send</button>

            </div>

          </div>

        </div>
        <div className="flex items-center mt-[72px] mb-10">
          <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
          <span className="w-full h-[1px] bg-[#8E9DEB]"></span>
          <span className="w-1 h-1 rounded-full bg-[#8E9DEB]"></span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#AEAEB2]">© 2022 Nguli® Global Inc.</span>
          <ul className="flex space-x-[10px]">
            <li className="hover:cursor-pointer w-10 h-10 rounded-full border border-solid border-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <Image src="/svgs/svg.svg" alt="" width={14} height={14} />
            </li>
            <li className="hover:cursor-pointer w-10 h-10 rounded-full border border-solid border-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <Image src="/svgs/svg_1.svg" alt="" width={14} height={14} />
            </li>
            <li className="hover:cursor-pointer w-10 h-10 rounded-full border border-solid border-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <Image src="/svgs/svg_2.svg" alt="" width={14} height={14} />
            </li>
            <li className="hover:cursor-pointer w-10 h-10 rounded-full border border-solid border-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <Image src="/svgs/svg_3.svg" alt="" width={14} height={14} />
            </li>
          </ul>
          <ul className="hover:cursor-pointer flex text-[#C5C5C5] space-x-10">
            <li className="hover:cursor-pointer"><a>Terms of Service</a></li>
            <li className="hover:cursor-pointer"><a>Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
