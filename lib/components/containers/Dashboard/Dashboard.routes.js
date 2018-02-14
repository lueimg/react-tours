import Business from './Business/Business.component.js';
import BusinessInformation from './Business/views/BusinessInformation.js';
import Community from './Community';
import Events from './Events';

export function GetRoutes(matchUrl) {
    return [
        {
            exact: true,
            path: `${matchUrl}/business/:id`,
            component: BusinessInformation
        },
        {
            exact: true,
            path: `${matchUrl}/business`,
            component: Business
        },
        {
            exact: false,
            path: `${matchUrl}/community`,
            component: Community
        },
        {
            exact: false,
            path: `${matchUrl}/events`,
            component: Events
        },
        {
            exact: true,
            path: `${matchUrl}`,
            component: Business
        },
    ];
}