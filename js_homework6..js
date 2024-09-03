const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyObj, companyName) {
    if (companyObj.name === companyName) {
        return companyObj;
    }

    if (companyObj.clients) {
        for (let client of companyObj.clients) {
            let foundCompany = findValueByKey(client, companyName);
            if (foundCompany) {
                return foundCompany;
            }
        }
    }

    if (companyObj.partners) {
        for (let partner of companyObj.partners) {
            let foundCompany = findValueByKey(partner, companyName);
            if (foundCompany) {
                return foundCompany;
            }
        }
    }
}

const result = findValueByKey(company, 'Клієнт 1.2');
console.log(result);
