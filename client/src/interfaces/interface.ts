
export interface ChildrenProps {
    children: React.ReactNode;
}

export interface AuthProps{
    children: React.ReactNode;
}

export interface GlobalContent {
    email: string,
    setEmail:(email:string) => void
};

export interface BdSearchInfo {
    route:string,
};

export interface BdDataInfo {
    email: string,
    [optionalKey: string]: any
}