import useSwr from 'swr'
import { fetcher } from '@/lib/fetcher';
import { BillboardResponse } from "@/types/billboard";


// interface BillboardResponse {
//     thumbnailUrl: string;
//     videoUrl: string;
// }

const useBillboard = () => {
    const { data, error, isLoading } = useSwr<BillboardResponse>('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};
export default useBillboard;