import axios from "axios";

// Retrieve the base URL and token from localStorage

const accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: "http://103.250.132.138:8889/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  // Check if the request URL has `export=true`
  if (config.url && config.url.includes("export=true")) {
    // Set responseType to 'blob' for file download
    config.responseType = "blob";
  }
  return config;
});

// Add a response interceptor to handle file download automatically
axiosInstance.interceptors.response.use(
  (response) => {
    // Check if responseType is 'blob' (indicating file download)
    if (response.config.responseType === "blob") {
      const contentDisposition = response.headers["content-disposition"];
      const fileName = contentDisposition
        ? contentDisposition.split("filename=")[1]
        : "data.xlsx";

      // Create a blob and download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName.replace(/"/g, "")); // Remove quotes around filename, if present
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Cleanup
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
