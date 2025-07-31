/**
 * Utility script to make a user an admin
 * Run this in the browser console while logged in as the user you want to make admin
 */

// Function to make current user an admin
window.makeCurrentUserAdmin = async function() {
  try {
    // Get current user
    const { useAuth } = await import('./features/auth/context/AuthContext.jsx');
    const { createOrUpdateUserProfile } = await import('./features/auth/services/userProfileService.js');
    
    // You'll need to get the auth context somehow
    // For now, we'll assume the user is logged in and we have access to their UID
    
    // This is a temporary solution - in production, you'd want to set the first user as admin
    // or have a more secure way to assign admin roles
    
    const user = window.firebase?.auth?.currentUser || 
                 (await import('./config/firebase.js')).auth.currentUser;
    
    if (!user) {
      console.error('No user is currently logged in');
      return;
    }
    
    // Update user profile to set admin role
    await createOrUpdateUserProfile(user.uid, { userRole: 'admin' }, true, user);
    
    console.log('✅ User has been made an admin! Please refresh the page.');
    alert('User has been made an admin! Please refresh the page to see admin features.');
    
  } catch (error) {
    console.error('Failed to make user admin:', error);
    alert('Failed to make user admin. Check console for details.');
  }
};

// Instructions
console.log(`
🔧 Admin Setup Instructions:

1. Make sure you're logged in to the account you want to make admin
2. Run this command in the browser console:
   makeCurrentUserAdmin()

3. Refresh the page after success
4. You should now see "Admin Dashboard" in your user dropdown menu

Note: This is a development utility. In production, you should have a more secure way to assign admin roles.
`);

export default {
  makeCurrentUserAdmin: window.makeCurrentUserAdmin
};
