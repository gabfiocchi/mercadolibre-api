import { filters } from './filters';

class mappingResponseClass {
    list(data) {
        let categories = [
            null
        ];
        let items = [
            null
        ];
        data = JSON.parse(data);

        if (data.filters.length > 0) {
            categories = filters.categories(data.filters[0].values[0].path_from_root);
        }

        if (data.results.length > 0) {
            items = filters.items(data.results)
        }

        return {
            author: {
                name: 'Gabriel',
                lastname: 'Fiocchi'
            },
            categories: categories,
            items: items
        };
    }
    item(data, description) {
        data = JSON.parse(data);
        return {
            author: {
                name: 'Gabriel',
                lastname: 'Fiocchi'
            },
            item: filters.item(data, description)
        };
    }
}

export const mappingResponse = new mappingResponseClass();