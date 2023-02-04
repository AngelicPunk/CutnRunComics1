import 'jquery';

const accessToken = 'EAAAEII3lzW0Xq_96WKrO4CScCzByVQDsxXxc3VU4Z9HVeAYM1V0bX6grj2MHfHo';
const locationID = 'L4EMC3D6GZ62E';


try {
  const response = client.catalogApi.batchUpsertCatalogObjects({
      idempotencyKey: '01a0f0b5-5408-4bc6-90d2-9a7200a5472c',
      batches: [
        {
          objects: [
            {
              type: 'CATEGORY',
              id: '#1',
              categoryData: {
                name: 'Funko Pops'
              }
            },
            {
              type: 'ITEM',
              id: '#2',
              itemData: {
                name: 'Pennywise',
                availableOnline: true,
                availableForPickup: true,
                categoryId: '#1',
                variations: [
                  {
                    type: 'ITEM_VARIATION',
                    id: '#3',
                    itemVariationData: {
                      itemId: '#2',
                      name: 'Pennywise',
                      pricingType: 'FIXED_PRICING',
                      priceMoney: {
                        amount: 14,
                        currency: 'USD'
                      },
                      trackInventory: true,
                      sellable: true
                    }
                  }
                ],
                productType: 'REGULAR'
              }
            },
            {
              type: 'ITEM',
              id: '#4',
              itemData: {
                name: 'Sam As Leprechaun',
                availableOnline: true,
                availableForPickup: true,
                categoryId: '#1',
                variations: [
                  {
                    type: 'ITEM_VARIATION',
                    id: '#5',
                    itemVariationData: {
                      itemId: '#4',
                      name: 'Sam As Leprechaun',
                      pricingType: 'FIXED_PRICING',
                      priceMoney: {
                        amount: 12,
                        currency: 'USD'
                      },
                      sellable: true
                    }
                  }
                ],
                productType: 'REGULAR'
              }
            },
            {
              type: 'ITEM',
              id: '#6',
              itemData: {
                name: 'Bill Murray',
                availableOnline: true,
                availableForPickup: true,
                categoryId: '#1',
                variations: [
                  {
                    type: 'ITEM_VARIATION',
                    id: '#7',
                    itemVariationData: {
                      itemId: '#6',
                      name: 'Bill Murray',
                      pricingType: 'FIXED_PRICING',
                      priceMoney: {
                        amount: 10,
                        currency: 'USD'
                      },
                      sellable: true
                    },
                  }
                ],
                productType: 'REGULAR'
              }
            },
            {
              type: 'ITEM',
              id: '#8',
              itemData: {
                name: 'Devil Flanders',
                availableOnline: true,
                availableForPickup: true,
                categoryId: '#1',
                variations: [
                  {
                    type: 'ITEM_VARIATION',
                    id: '#9',
                    itemVariationData: {
                      itemId: '#8',
                      pricingType: 'FIXED_PRICING',
                      priceMoney: {
                        amount: 12,
                        currency: 'USD'
                      }
                    }
                  }
                ],
                productType: 'REGULAR'
              }
            },
            {
                type: 'ITEM',
                id: '#10',
                itemData: {
                  name: 'Boastful Lokie (2022 Wondrous Convention',
                  availableOnline: true,
                  availableForPickup: true,
                  categoryId: '#1',
                  variations: [
                    {
                      type: 'ITEM_VARIATION',
                      id: '#11',
                      itemVariationData: {
                        itemId: '#10',
                        pricingType: 'FIXED_PRICING',
                        priceMoney: {
                          amount: 16,
                          currency: 'USD'
                        }
                      }
                    }
                  ],
                  productType: 'REGULAR'
                }
              }
          ]
        }
      ]
    })

    console.log(response.result);
  } catch(error) {
    console.log(error);
       
  }
  function upsertItems() {
    const jquery = jQuery;
    jquery.ajax({
      type: "POST",
      url: "https://connect.squareup.com/v2/catalog/batch-upsert",
      headers: {
        "Authorization": "Bearer " + accessToken,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }
  
  // Call the function to upsert the items
  upsertItems();