/* globals firebase */
import { setUserTokens } from '../database';
const messaging = firebase.messaging();

export default async ({ currentUser, environment }) => {
  /* 
    CHALLENGE Messaging
    - Call setUserTokens({ currentUser, environment, messagingToken });
    - messagingToken should be the boolean `false`
  */

};
