import useSwr from 'swr';

import { fetcher } from "@/lib/fetcher";

export default function useCurrentUser() {
    const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);

    return {
        data, 
        error, 
        isLoading, 
        mutate 
    }
}