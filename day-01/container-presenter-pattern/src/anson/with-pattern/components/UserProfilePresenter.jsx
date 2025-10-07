import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import ProfileHeader from "./ProfileHeader";
import PostList from "./PostList";
import { useState } from "react";

const UserProfilePresenter = ({
  user,
  posts,
  loading,
  error,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
      setFormError(null);
    } else {
      setFormError(result.error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormError(null);
    // Reset form data
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear form error when user starts typing
    if (formError) setFormError(null);
  };
  return (
    <div>
      {loading && <LoadingSpinner />}
      {error && (
        <ErrorMessage
          title="Oops! Something went wrong"
          message={error}
          onRetry={onRetry}
        />
      )}
      <div className="user-details">
        <ProfileHeader
          user={user}
          isEditing={isEditing}
          onStartEdit={() => setIsEditing(true)}
          onInputChange={() => handleInputChange()}
          formData={formData}
          onSaveProfile={() => handleSaveProfile()}
          onCancelEdit={handleCancelEdit}
        />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default UserProfilePresenter;
