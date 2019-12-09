export default {
  userName: null,
  uid: null,
  getUserName() {
    return this.userName.split('@')[0]
  },
  getUserEmail() {
    return this.userName
  },
  getUserId() {
    return this.uid
  }
}
