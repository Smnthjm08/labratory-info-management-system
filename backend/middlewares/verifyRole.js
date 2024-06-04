export const checkRole = (req, res, next) => {
  try {
    if (!req.user || !req.user.roleId) {
      return res.redirect("/");
    }

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
        break;
    }
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in checkRole middleware:", error);
    res.redirect("/");
  }
};
