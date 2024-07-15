export function constructQueryHeaders() {
    return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        "X-API-KEY ": import.meta.env.VITE_MOVIES_API_TOKEN,
    };
}
