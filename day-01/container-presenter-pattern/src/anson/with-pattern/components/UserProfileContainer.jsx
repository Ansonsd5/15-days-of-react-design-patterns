import { useState, useEffect } from "react";
import axios from "axios";
import UserProfilePresenter from "./UserProfilePresenter";

const UserProfileContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`
      );
      setUser(response.data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
      );
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts");
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  const handleUpdateUser = async (updatedUserData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`,
        updatedUserData
      );
      setUser(response.data);
      return { success: true };
    } catch (err) {
      return { success: false, error: "Failed to update profile" };
    }
  };

  return (
    <div>
      <UserProfilePresenter
        user={user}
        posts={posts}
        loading={loading}
        error={error}
        onRetry={() => handleRetry()}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  );
};

export default UserProfileContainer;
