export interface PhotoData {
    src: string;
    width: number;
    height: number;
}

export interface ImageResourceProps {
    secure_url: string;
    public_id: string;
    format: string;
    width: number;
    height: number;
}
