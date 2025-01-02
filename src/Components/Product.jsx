import React from "react";
import login from "../assets/mobile-login.png";
import tesla from '../assets/tesla.png'


function Product() {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex  flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={login} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-4xl text-neutralDgray font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16  border-lime-200" id="testimonail">
        <div className="flex flex-col md:flex-row justify-between items-center gp-8">
          <div className="">
                <img src={tesla} alt=""  className="w-72"/>
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:h-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="src/assets/compnayIcons/icon1.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/compnayIcons/icon2.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/compnayIcons/icon3.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/compnayIcons/icon4.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/compnayIcons/icon5.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/compnayIcons/icon6.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex items-center gap-12">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers{" "}
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block ml-2 size-6"
                      >
                        <path
                          d="M6.02324 6.24222L7.12263 5.14283C7.25301 5.01245 7.25301 4.80106 7.12263 4.67068L6.02324 3.57129M7.02484 4.90676L2.35071 4.90676"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
