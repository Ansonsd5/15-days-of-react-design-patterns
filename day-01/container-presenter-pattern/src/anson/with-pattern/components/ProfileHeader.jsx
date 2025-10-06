

const ProfileHeader = ({user}) => {
    
  return (
    <div>
        
        <div className="profile-header">
          <img
            src={user?.avatar || "/default-avatar.png"}
            alt={`${user?.name}'s avatar`}
            className="avatar"
          />
        </div>
      
    </div>
  )
}

export default ProfileHeader