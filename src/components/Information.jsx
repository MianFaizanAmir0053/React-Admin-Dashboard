function Information({ name, email, address, phone, country, image }) {
  return (
    <div className="bg-white  text-center rounded-lg shadow-md p-5 min-[768px]:col-span-3 col-span-8 relative">
      <div className="absolute text-violet-500 bg-violet-100 p-1 px-2 rounded-bl-md   top-0 right-0">
        Edit
      </div>
      <span className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-300">Information </h1>
      </span>
      <div className="flex mt-4">
        <img
          className="w-[6rem] h-[6rem] mr-4 mt-2 rounded-full  object-cover"
          src={image}
          alt=""
        />

        <div className="text-left">
          <h1 className="text-3xl text-slate-600 font-semibold py-2">{name}</h1>
          <p className="text-slate-500 pt-2">
            <span className="font-semibold">Email: </span>
            {email}
          </p>
          <p className="text-slate-500 pt-2">
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p className="text-slate-500 pt-2">
            <span className="font-semibold">Address: </span>
            {address}
          </p>
          <p className="text-slate-500 pt-2">
            <span className="font-semibold">Country: </span>
            {country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
