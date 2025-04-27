import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Simulated mock data responses
const mockResponses: Record<string, any> = {
  // Add mock responses here if needed
};

/**
 * Mock implementation of apiRequest that doesn't call a real server
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Mock API Request: ${method} ${url}`, data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Create a mock response
  const mockResponse = new Response(
    JSON.stringify({ success: true, message: "Operation completed successfully" }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
  
  return mockResponse;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    console.log(`Mock Query: ${queryKey[0]}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock data if available, otherwise return an empty object
    const path = queryKey[0] as string;
    return mockResponses[path] || {};
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
