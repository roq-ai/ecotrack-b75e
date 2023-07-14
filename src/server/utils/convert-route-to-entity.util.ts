const mapping: Record<string, string> = {
  activities: 'activity',
  goals: 'goal',
  organizations: 'organization',
  rewards: 'reward',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
