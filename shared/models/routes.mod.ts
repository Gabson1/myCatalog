export interface ClientRouter {
    id: string;
    key: string;
    path: string;
    showSideBar: boolean;
    showHeader: boolean;
    protected: boolean;
}

export interface routes {
    id: string;
    classname: Array<string>

}