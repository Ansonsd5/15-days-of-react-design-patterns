import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import ProfileHeader from "./ProfileHeader";


const UserProfilePresenter = ({user, posts, loading, error, onRetry}) => {
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
      <ProfileHeader user={user}/>
      <div className="user-posts">
        <h2>Recent Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 150)}...</p>
              <span className="post-date">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserProfilePresenter;
