// User Profile Page
// Will show user profile, their picture, and their ranking
// Will also show the option to download the ranking as an image
// Will also show folling/followers count
// will also show their bio. If it is the user's profile, it will show the option to edit the bio, profile pic, and name

import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  return (
    <div>
      <h2>Profile: {username}</h2>
      {/* Profile content here */}
    </div>
  );
}

export default Profile;