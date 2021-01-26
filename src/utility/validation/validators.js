
    export const required = value => {
        if (value) return undefined;
        return 'Field is required';
    }

    export const maxLength = max => {
        return value => {
            if(value.length > max) return `Must be ${max} symbols or less`
            return undefined;
        }
    }

    export const maxLength10 = maxLength(10);
    export const maxLength100 = maxLength(100);

