const Profile = () => {
    return (
        <ProfileCard 
            name="Bob" 
            age={25} 
            gretting={
                <div>
                    <strong>Hello Bob, keep up the great work!</strong>
                </div>
            }
        >
            <p>Hobbies: Reading, Playing</p>
            <button>Contact</button>
        </ProfileCard>
    );
};
export default Profile;

function ProfileCard({ name, age, gretting, children }) {
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <div>{gretting}</div>
            <div>{children}</div>
        </>
    );
}
