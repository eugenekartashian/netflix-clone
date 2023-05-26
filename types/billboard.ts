export interface BillboardResponse {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    duration: string;
    genre: string;
    data: string | any;
    movieId: string;
    favoriteIds: string;
    updatedFavoriteIds: string;
    visible?: boolean;
    onClose: any;
    name: string;
    email: string;
}