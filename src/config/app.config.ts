interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['End User'],
  tenantRoles: ['Admin', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'EcoTrack',
  addOns: ['notifications', 'file', 'chat'],
};
