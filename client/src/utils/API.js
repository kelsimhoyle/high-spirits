import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  getFlavor: function(flavor) {
    return axios.get(`/api/alcohol/flavor/${flavor}`)
  },

  getType: function(type) {
    return axios.get(`/api/alcohol/types/${type}`)
  },

  getRating: function(alcoholId) {
    return axios.get(`/api/alcohol/ratings/${alcoholId}`)
  },

  postRating: function(ratingInfo) {
    return axios.post(`/api/alcohol/rate/${ratiningInfo.alcoholId}`, ratingInfo)
  },

  updateRating: function(ratingInfo) {
    return axios.put(`/api/alcohol/ratings/${ratingInfo._id}`, ratingInfo)
  },

  removeRating: function(ratingId) {
    return axios.delete(`/api/alcohol/ratings/${ratingId}`)
  },

  findByLocation: function(location) {
    return router.get(`/api/distillery/${location}`)
  },

  getDistillery: function(distilleryId) {
    return router.get(`/api/distillery/${distilleryId}`)
  }

};