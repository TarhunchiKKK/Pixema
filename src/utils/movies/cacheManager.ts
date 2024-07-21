export class CacheManager<TData, TFilters = null> {
    public data: TData[];

    public paginationData: {
        page: number;
        limit: number;
    };

    public filters: TFilters | null;

    constructor(filters: TFilters | null = null) {
        this.data = [];

        this.paginationData = {
            page: 0,
            limit: 20,
        };

        this.filters = filters;
    }

    public get state() {
        return {
            data: this.data,
            paginationData: this.paginationData,
            filters: this.filters,
        };
    }

    public setData(data: TData[]) {
        this.data = this.data.concat(data);
        this.paginationData.page++;
    }

    public setFilters(filters: TFilters) {
        const areFIltersEqual =
            this.filters === null ? true : JSON.stringify(this.filters) === JSON.stringify(filters);

        if (!areFIltersEqual) {
            this.data = [];
            this.paginationData.page = 0;
            this.filters = filters;
        }
    }
}
