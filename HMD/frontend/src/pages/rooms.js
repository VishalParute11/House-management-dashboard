import React from 'react'

const rooms = (props) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Book Your rooms</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            {props.rooms.data.map((item)=>{
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src= {item.attributes.RoomImages.data && item.attributes.RoomImages.data.attributes.name}alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  let headers = {
    Authorization:"Bearer cb00ca3ddc88b0250cd5d56b386975c7fb6840304ac4419a8d01008a3ce7842c2373a9ca11f71286c2a279cf4d6c044a82137b120b169bf0c485e21c0ceb0de2e7ad4b16e50bfae7347d3779bfd4fe8adfc0a6265777d8fa33b06ab55ebe5238fe1512454bb44388a6c0e60a6c4d023704d527164ac2d36bb0fcf5e8c0331ec2"
  }
  let a = await fetch("http://localhost:1337/api/rooms?populate=*",{headers:headers})
  let rooms = await a.json()
  console.log(rooms)
  return {
    props: { rooms: rooms }, // will be passed to the page component as props
  }
}
export default rooms
