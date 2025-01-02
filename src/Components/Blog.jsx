import React from "react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      img: "src/assets/blog1.png",
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      img: "src/assets/blog2.png",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      img: "src/assets/blog3.png",
    },
  ];

  return (
    <div className="px-4 lg:p-14  max-w-screen-2xl mx-auto my-12 " id="faq">
      <div className="text-center md:w-1/2 mx-auto ">
        <h2 className="text-4xl text-neutralDgray font-semibold mb-4 ">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>

      {/*all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between  ">
        {
            blogs.map( blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer md:w-5/6 ">
                <img src={blog.img} alt="" className="w-80 hover:scale-95 transition-all duration-300" />
                <div className="text-center px-4 py-8 bg-white shadow-lg md:rounded-md rounded-b-md md:w-5/6  mx-auto absolute left-0 right-0 -bottom-12 ">
                    <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                    <div className="flex items-center justify-center gap-12">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Readmore{" "}
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
            </div>)
        }
      </div>
    </div>
  );
}

export default Blog;
