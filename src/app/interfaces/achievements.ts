
export interface Achievements {
    data: Achievement[];
}

export interface Achievement {
    id:          number;
    description: string;
    image:       string;
    image_url:       string;
    created_at:  Date;
    updated_at:  Date;
}
