export const checkRole = (req, res, next) => {
  // Determine redirect URL based on user's role
  let redirectUrl = "/";
  switch (req.user.roleId) {
    case 1: // Admin
      redirectUrl = "/admin";
      break;
    case 2: // Technician
      redirectUrl = "/technician";
      break;
    case 3: // Pathologist
      redirectUrl = "/pathologist";
      break;
    case 4: // Guest
      redirectUrl = "/guest";
      break;
    default:
      // Redirect to default dashboard if role is not recognized
      break;
  }

  // Redirect user to appropriate dashboard based on role
  res.redirect(redirectUrl);
};
