const user ={id:1,name:'ami borokuks', profession: 'actor'}
const stringDefine =JSON.stringify(user);
console.log(user);
console.log(stringDefine);
/**
 * output: { id: 1, name: 'ami borokuks', profession: 'actor' }
{"id":1,"name":"ami borokuks","profession":"actor"}

 */

// more
const shop ={
    name: 'dilara',
    Address: {
        Rode: 'Baily Road',
        Country: 'bd',
        Sector:'seven',
        property: 'single'
    },
    product:['laptop','mic','mouse','pc','keyboard'],
    isOpen : true,
    isNew: false
}
console.log(shop);
const shopJon =JSON.stringify(shop);
console.log(shopJon);