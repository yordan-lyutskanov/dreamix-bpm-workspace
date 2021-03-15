import base64 from "base-64";
import Cookies from "universal-cookie";

const BASE_URL = "http://localhost:8081";

export async function callLogIn(username, password, setIsLoading, callback) {
  if (setIsLoading) {
    setIsLoading(true);
  }

  let authString = `Basic ${base64.encode(`${username}:${password}`)}`;
  const cookies = new Cookies();
  cookies.set("auth", authString, { path: "/" });
  let success = true;

  const response = await fetch(`${BASE_URL}/bpm-api/user/${username}/profile`, {
    method: "GET",
    credentials: "include",
  }).catch((err) => {
    console.log(err);
    success = false;
  });

  if (setIsLoading) {
    setIsLoading(false);
  }

  if (callback) {
    callback(success, response, username);
  }
}

export function logOut() {
  new Cookies().remove("auth");
}

export async function callCompleteTask(
  taskId,
  requestBody,
  callback,
  setIsLoading
) {
  if (setIsLoading) {
    setIsLoading(true);
  }

  const response = await fetch(`${BASE_URL}/bpm-api/task/${taskId}/complete`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (setIsLoading) {
    setIsLoading(false);
  }

  if (callback) {
    callback(response);
  }
}

export async function callGetProcessVariables(
  processInstanceId,
  callback,
  setIsLoading
) {
  if (setIsLoading) {
    setIsLoading(true);
  }

  const TASK_VARIABLES_URL = `${BASE_URL}/bpm-api/process-instance/${processInstanceId}/variables`;

  const response = await (
    await fetch(TASK_VARIABLES_URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

  if (setIsLoading) {
    setIsLoading(false);
  }

  callback(response);
}

export async function callGetAllTasks(callback, setIsLoading) {
  if (setIsLoading) {
    setIsLoading(true);
  }

  const response = await fetch(`${BASE_URL}/bpm-api/task`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (setIsLoading) {
    setIsLoading(false);
  }

  if (callback) {
    callback(response);
  }

  return response;
}

export async function callCreateTask(user, callback, setIsLoading) {
  if (setIsLoading) {
    setIsLoading(true);
  }

  const response = await (
    await fetch(
      `${BASE_URL}/bpm-api/task/bpm-api/process-definition/key/Test/start`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          variables: {
            name: {
              type: "String",
              value: user.name,
              valueInfo: {},
            },
            role: {
              type: "String",
              value: user.role,
              valueInfo: {},
            },
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  ).json();

  if (setIsLoading) {
    setIsLoading(false);
  }

  callback(response);
}
