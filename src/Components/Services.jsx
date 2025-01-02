import React from 'react'

function Services() {
    const services =[
      {id:1,title:'Membership Organisations',description:'Our membership management software provides full automation of membership renewals and payments',img:'src/assets/Membership.png'},
      {id:2,title:'National Associations',description:'Our membership management software provides full automation of membership renewals and payments',img:'src/assets/Nationnal.png'},
      {id:3,title:'Clubs And Groups',description:'Our membership management software provides full automation of membership renewals and payments',img:'src/assets/Clubes.png'},
    ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDgray font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
        </div>
        {/* compnay logo */}
        <div className='my-12 flex flex-wrap  justify-between items-center gap-8'>
            <img src="\src\assets\compnayIcons\icon1.png" alt="" />
            <img src="\src\assets\compnayIcons\icon2.png" alt="" />
            <img src="\src\assets\compnayIcons\icon3.png" alt="" />
            <img src="\src\assets\compnayIcons\icon4.png" alt="" />
            <img src="\src\assets\compnayIcons\icon5.png" alt="" />
            <img src="\src\assets\compnayIcons\icon6.png" alt="" />
            <img src="\src\assets\compnayIcons\icon7.png" alt="" />
        </div>

        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
              <h2 className='text-4xl text-neutralDgray font-semibold mb-2'>Manage your entire community in a single system</h2>
              <p className='text-neutralGrey'>Who is Nextcent suitable for?
            </p>
        </div>

        {/* Cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  items-center justify-center '>
            {
                services.map(services => <div key={services.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300'> 
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                        <img className='-ml-5'  src={services.img} alt="" /></div>
                        <h4 className='text-2xl font-bold text-neutralDgray mb-2 px-2'>{services.title}</h4>
                        <p className='text-sm text-neutralGrey'>{services.description}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Services