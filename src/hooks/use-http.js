import React, { useState, useEffect } from "react";
import axios from "axios";

const useHttp = (requestConfig) => {
	const [token, setToken] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	if (localStorage.getItem("token")) {
		setToken(localStorage.getItem("token"));
	}

	const sedRequest = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(requestConfig.url, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			if (!response.ok) {
			throw new Error("Request failed");
		}
		}
	};
};

export default useHttp;
