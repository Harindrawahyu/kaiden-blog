function ProfileCard({ name, bio, profileName, avatar }) {
  return (
    <div className="max-w-sm h-screen p-4 border rounded-lg shadow-sm bg-white text-left fixed inset-y-0 right-0">

      {/* Foto Profil */}
      <img
        src={avatar}
        alt={profileName}
        className="w-20 h-20 rounded-full"
      />

      {/* Nama */}
      <h2 className="mt-4 text-xl font-bold text-black">
        {name}
      </h2>

      {/* Bio */}
      <p className="mt-2 text-sm text-gray-600">
        {bio}
      </p>

      {/* Edit Profile Button */}
      <div className="mt-4">
        <button className="text-green-600 hover:underline cursor-pointer text-sm">
          Edit profile
        </button>
      </div>
    </div>

  );
}

export default ProfileCard;