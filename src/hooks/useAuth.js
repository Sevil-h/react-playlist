import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "http://localhost:3000";
const scopes = [
	"user-library-read",
	"playlist-read-private",
	"user-modify-playback-state",
	"user-read-playback-state",
	"user-read-currently-playing",
	"user-read-recently-played",
	"streaming",
	"user-library-read",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
	baseUrl: `https://api.spotify.com/v1/playlists`,
});

export const setClientToken = (token) => {
	apiClient.interceptors.request.use(async function (config) {
		config.headers.Authorization = "Bearer " + token;
		return config;
	});
};

export default apiClient;
