class filtersClass {

    categories(data) {
        let categories = [];

        data.forEach(function (element) {
            categories.push(element.name);
        }, this);
        return categories;
    }
    milenian(number) {
        if (number > 999) {
            number = number.toString();
            let value = number.substring(0, number.length - 3);
            let value2 = number.substring(number.length - 3, number.length);
            number = value + '.' + value2;
        }
        return number;
    }

    items(data) {
        let items = [];
        let price, amount, decimals;

        data.forEach(function (element) {
            price = element.price.toFixed(2).toString().split('.');
            amount = parseInt(price[0]);
            decimals = parseInt(price[1]);

            element = {
                id: element.id,
                title: element.title,
                price: {
                    currency: element.currency_id,
                    amount: this.milenian(amount),
                    decimals: decimals
                },
                pricture: element.thumbnail.replace(/-I.jpg/g, '-O.jpg'),
                condition: element.condition,
                free_shipping: element.shipping.free_shipping,
                location: element.address.state_name
            }
            items.push(element);

        }, this);

        return items;
    }

    item(data, description) {
        let price = data.price.toFixed(2).toString().split('.');
        let amount = parseInt(price[0]);
        let decimals = parseInt(price[1]);

        return {
            id: data.id,
            title: data.title,
            price: {
                currency: data.currency_id,
                amount: this.milenian(amount),
                decimals: decimals
            },
            pricture: data.pictures[0].secure_url,
            condition: data.condition === 'new' ? 'Nuevo' : 'Usado',
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: description
        };
    }
}

export const filters = new filtersClass();