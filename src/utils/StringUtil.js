export function getQueryString(options) {
    const optionKeys = Object.keys(options);
    const queryString = optionKeys
        ?.reduce(
            (previous, current) =>
                options[current]
                    ? previous + `${current}=${options[current]}&`
                    : previous,
            ''
        )
        .slice(0, -1);
    return queryString;
}
