import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import Photo from "./Photo";
import Navbar from "./Navbar";

function Index() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((res) => {
        setImg(res.data);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center bg-gray-50">
        <Navbar />

        {/* <div className="w-full my-10"> &nbsp;</div> */}

        <div className="flex justify-center w-full">
          <div className="flex flex-wrap items-center w-full md:w-9/12">
            <div className="flex flex-wrap items-start w-full mt-6">
              <div className="w-4/12 flex flex-wrap justify-center">
                <div className="p-1.5 border-2 rounded-full bg-white w-3/6 h-3/6">
                  <img
                    alt="kymkhl24's profile picture"
                    className="rounded-full w-full h-full"
                    data-testid="user-avatar"
                    draggable="false"
                    src="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s150x150/128221176_3489637797819188_8665220262285149058_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=wR6MoAF5-gcAX8TdtS6&tp=1&oh=bb85068fa9e93b8a38ea523ce268df02&oe=605D6801"
                  />
                </div>
              </div>
              <div className="w-8/12">
                <div className="profile mb-5">
                  <span className="text-3xl inline mr-5 font-thin	">
                    kymkhl24
                  </span>
                  <button className="px-3 py-1 rounded border-2 inline mr-5 -mt-10">
                    Edit Profile
                  </button>
                  <svg
                    aria-label="Options"
                    className="inline"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="follow mb-5">
                  <div className="flex flex-wrap justify-between w-3/6">
                    <span>
                      <b>30</b> posts
                    </span>
                    <span>
                      <b>474</b> followers
                    </span>
                    <span>
                      <b>412</b> following
                    </span>
                  </div>
                </div>
                <div className="bio mb-5">
                  <b>Unknown</b>
                  <br />
                  <p>💻 Life Developer,</p>
                  <p>
                    📌For all things I have strength, in Christ's strengthening
                    me - Philippians 4:13
                  </p>
                  <a
                    href="https://www.instagram.com/wekaland.galery"
                    className="text-blue-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @wekaland.galery
                  </a>
                </div>
              </div>
              <div className="highlight my-10 mx-16 w-full">
                <a
                  href="https://www.instagram.com/kymkhl24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-wrap justify-start">
                    <div className="flex flex-wrap justify-center sub-highlight w-1/12 mr-10">
                      <div className="p-1 border-2 rounded-full bg-white w-full ">
                        <img
                          alt="kymkhl24's profile picture"
                          className="rounded-full w-full h-full"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/s150x150/120316165_110296717406510_1014450476700451037_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=clh2ixxFgpQAX962l01&tp=1&oh=e826fd2e12ce593e96b402d20004bb76&oe=6062382E"
                        />
                      </div>
                      <div className="w-full" />
                      <span className="font-medium text-xs mt-2">Picture</span>
                    </div>

                    <div className="flex flex-wrap justify-center sub-highlight w-1/12 mr-10">
                      <div className="p-1 border-2 rounded-full bg-white w-full ">
                        <img
                          alt="kymkhl24's profile picture"
                          className="rounded-full w-full h-full"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/s150x150/120203384_976380439545792_3404906102649985911_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=mzReMwliYwYAX_qpZny&tp=1&oh=3f468023dc85b15869c62483cbbfecb5&oe=60629EFC"
                        />
                      </div>
                      <div className="w-full" />
                      <span className="font-medium text-xs mt-2">Works</span>
                    </div>

                    <div className="flex flex-wrap justify-center sub-highlight w-1/12 mr-10">
                      <div className="p-1 border-2 rounded-full bg-white w-full ">
                        <img
                          alt="kymkhl24's profile picture"
                          className="rounded-full w-full h-full"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/c0.328.720.720a/s150x150/119681223_634226610620834_252083024177776586_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=TN2A5pnuPWQAX_EZFd3&tp=1&oh=c3caefc40df038fd0e6926cea1b315da&oe=603B2231"
                        />
                      </div>
                      <div className="w-full" />
                      <span className="font-medium text-xs mt-2">
                        Life of Words
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-center sub-highlight w-1/12 mr-10">
                      <div className="p-1 border-2 rounded-full bg-white w-full ">
                        <img
                          alt="kymkhl24's profile picture"
                          className="rounded-full w-full h-full"
                          data-testid="user-avatar"
                          draggable="false"
                          src="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/s150x150/120320647_1261402840878769_305322555040406413_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=cWJXjxpZKu0AX9WLdnk&tp=1&oh=bdb1fb1c450211ea41b7722ea2c83519&oe=6062B2D7"
                        />
                      </div>
                      <div className="w-full" />
                      <span className="font-medium text-xs mt-2">*Random*</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mx-5 w-full border-t-2">
                <div className="flex flex-wrap justify-center w-full mt-4">
                  <span className="mx-10 text-sm font-semibold">
                    <svg
                      aria-label="Posts"
                      className="inline mr-2"
                      fill="#262626"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    POSTS
                  </span>
                  <span className="mx-10 text-sm text-gray-500 font-normal">
                    <svg
                      aria-label="Posts"
                      className="inline mr-2"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
                    </svg>
                    IGTV
                  </span>
                  <span className="mx-10 text-sm text-gray-500 font-normal">
                    <svg
                      aria-label="Saved"
                      className="inline mr-2"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                    SAVED
                  </span>
                  <span className="mx-10 text-sm text-gray-500 font-normal">
                    <svg
                      aria-label="Tagged"
                      className="inline mr-2"
                      fill="#8e8e8e"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
                    </svg>
                    TAGGED
                  </span>
                </div>
              </div>
            </div>

            {img.map((image) => (
              <Photo image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
