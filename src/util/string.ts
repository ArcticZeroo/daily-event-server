export const capitalize = (value: string) => {
    if (value.length === 0) {
        return value;
    }

    return value[0].toUpperCase() + value.slice(1);
}

export const pluralize = (value: string) => {
    if (value.endsWith('s')) {
        return value;
    }

    return `${value}s`;
}

export const possessive = (value: string) => {
    if (value.endsWith('s')) {
        return `${value}'`;
    }

    return `${value}'s`;
}