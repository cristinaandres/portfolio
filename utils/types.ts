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

export type ProjectCardProps = {
    currentIndex: number;
    openProject: (index: number | null) => void;
    closeProject: () => void;
    setIndex: (index: number) => void;
};

export type ProjectProps = {
    title: string;
    label: string;
    year: string;
    description: string;
    background: string;
    card_color: string;
    logo: string;
    complete_name: string;
    name: string;
    name_color: string;
    padding_top: number;
    content: string[];
    additional_files: boolean;
    files: string[];
}