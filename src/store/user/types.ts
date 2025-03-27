export interface UserStore {
  username: string;
  accessToken: string;
  refreshToken?: string;
  roles: string[];
}
