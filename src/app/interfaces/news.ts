export interface News {
    current_page:   number;
    data:           NewDetails[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  null;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface NewDetails {
    id:                 number;
    title:              string;
    image:              string;
    image_url:              string;
    description:        any;
    shortdescription:string;
    alt_text:           string;
    focus_keyword:      null;
    social_title:       null;
    social_image:       string;
    social_description: null;
    social_alt_text:    null;
    meta_title:         null;
    meta_link:          null;
    meta_description:   null;
    deleted_at:         null;
    created_at:         Date;
    updated_at:         Date;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}