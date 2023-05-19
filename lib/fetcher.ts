import axios from "axios";
import {BillboardResponse} from "@/types/billboard";

export const fetcher = (url: string): Promise<BillboardResponse> =>
    axios.get(url).then((res) => res.data);
