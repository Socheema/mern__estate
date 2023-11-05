import { useSelector } from "react-redux";



const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt="profile_image" className="rounded-full h-24 w-24 object-cover self-center mt-2"/>
        <input type="text" placeholder="username" className="rounded-full p-3 border" id="username" />
        <input type="email" placeholder="email" className="rounded-full p-3 border" id="email"/>
        <input type="password" placeholder="password" className="rounded-full p-3 border" id="password"/>
        <button className="bg-slate-700 text-white rounded-full p-3 uppercase hover:opacity-95 disabled:opacity-80">Upadte</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer ">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
