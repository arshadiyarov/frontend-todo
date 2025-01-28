const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("VITE_API_URL env not found");
}

const selfUrl = import.meta.env.VITE_SELF_URL;

if (!selfUrl) {
  throw new Error("VITE_SELF_URL env not found");
}

export { apiUrl, selfUrl };
