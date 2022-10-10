export const PlanningCenterConfig = {
  authority: 'https://api.planningcenteronline.com/',
  client_id: 'c8f3ee34367c855bc9a20abf47fe178f37d92b2468d839bab0d7e52259ba2105',
  client_secret: 'b33e19912cfef60d591923eb906284d63e06b996fb1b06512f04e243f90b3159',
  redirect_uri: 'http://localhost:4200/pc-auth-callback',
  response_type: 'code',
  scope: 'people groups',
  metadata: {
    authorization_endpoint: 'https://api.planningcenteronline.com/oauth/authorize',
    token_endpoint: 'https://api.planningcenteronline.com/oauth/token'
  }
};
