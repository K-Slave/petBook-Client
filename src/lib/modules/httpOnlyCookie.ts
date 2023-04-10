import axios from "axios";

export const setHttpOnlyCookie = async (cookie: {
  key: string;
  value: string;
}): Promise<{ success: boolean }> => {
  const res = await axios("/api/cookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(cookie),
  });

  return { success: res.status === 200 };
};

export const removeHttpOnlyCookie = async (
  key: string
): Promise<{ success: boolean }> => {
  const res = await axios("/api/cookie", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ key }),
  });

  return { success: res.status === 200 };
};
