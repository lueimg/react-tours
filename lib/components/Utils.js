const roleAccess = {
    admin: ['admin', 'dashboard'],
    business: ['admin'],
    user: ['dashboard'],
};

export const isLocationAllowed = (route, user) => {
    if (!user) return false;

    const [  , sectionPage ] = route.split('/');    
    return roleAccess[user.profile.role].indexOf(sectionPage) > -1;
};