import { useState, useCallback } from "react";
import { cloudFunctionsService } from "../services/cloudFunctions";

/**
 * Custom hook for calling Firebase Cloud Functions
 * @param {string} functionName - Name of the cloud function to call
 * @returns {Object} - Hook state and methods
 */
export const useCloudFunction = (functionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const callFunction = useCallback(
    async (params = {}) => {
      try {
        setLoading(true);
        setError(null);

        let result;

        switch (functionName) {
          case "helloWorld":
            result = await cloudFunctionsService.callHelloWorld(params.name);
            break;
          case "createUserProfile":
            result = await cloudFunctionsService.createUserProfile(
              params.uid,
              params.profileData
            );
            break;
          case "createTask":
            result = await cloudFunctionsService.createTask(params);
            break;
          case "api":
            result = await cloudFunctionsService.callApi(
              params.method,
              params.data
            );
            break;
          default:
            throw new Error(`Unknown function: ${functionName}`);
        }

        setData(result);
        return result;
      } catch (err) {
        setError(err.message || "An error occurred");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [functionName]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    callFunction,
    reset,
  };
};

/**
 * Custom hook specifically for API calls
 */
export const useApiCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(async (method = "GET", data = null) => {
    try {
      setLoading(true);
      setError(null);

      const result = await cloudFunctionsService.callApi(method, data);
      return result;
    } catch (err) {
      setError(err.message || "An error occurred");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    callApi,
  };
};
