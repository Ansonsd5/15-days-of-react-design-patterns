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
      //   setFormData({
      //     name: response.data.name,
      //     email: response.data.email,
      //     bio: response.data.bio,
      //   });
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
      // Don't set loading to false here, posts are secondary
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  return (
    <div>
      <UserProfilePresenter
        user={user}
        posts={posts}
        loading={loading}
        error={error}
        onRetry={() => handleRetry()}
      />
    </div>
  );
};

export default UserProfileContainer;
