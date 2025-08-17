import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

function ProfilePage() {
    return (
        <>

            <Navbar />
            <ProfileCard
                name="Harindra Arifudin"
                bio="Halo saya Arif, seorang penulis pemula yang tengah menjelajahi dunia kata-kata di Medium. Saya ingin membagikan Inspirasi dan pandangan, dan pengalaman hidup."
                profileName="Profile"
                avatar="src\assets\img\me.jpeg"

            />

        </>
    );
}
export default ProfilePage;