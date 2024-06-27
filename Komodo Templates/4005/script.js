fetchData();

//fetch api through javacript using async and await   
async function fetchData() {
    const response = await fetch('https://api.hubapi.com/cms/v3/hubdb/tables/spz_nav_2024/rows?portalId=6374024')
    const data = await response.json()
    const navData = createNavData(data);
    console.log(navData);
    return data
}
// Create a object with parent and children. There could be n number of children for each parent and children. Use 'is_parent' to check if the object is parent or child.
function createNavData(navData) {
    const parent = navData.results.filter(data => data.values.parent === 0);
    const subParent = navData.results.filter(data => data.values.is_parent === 1);
    const children = navData.results.filter(data => data.values.is_parent === 0);


    const result = [];
    parent.forEach(data => {
        const obj = {
            parent: data.values,
            children: []
        };
        subParent.forEach(subData => {
            if (subData.values.parent === parseInt(data.id)) {
                const subObj = {
                    parent: subData.values,
                    children: []
                };
                children.forEach(childData => {

                    if (childData.values.parent === parseInt(subData.id)) {
                        subObj.children.push(childData.values);
                    }
                });
                obj.children.push(subObj);
            }
        });
        result.push(obj);

        //use this to create a nav bar with parent and children
        document.querySelector('ul.nav-menu-inject').insertAdjacentHTML('beforeend', `${createList(obj)}`);
        //define createList function
        function createList(data) {
            let list = '';
            let dynamicClass = data.children.length > 1 ? 'hs-item-has-children' : '';
            list += `<li class="hs-menu-item hs-menu-depth-1 ${dynamicClass}"><a href="javascript:;" aria-haspopup="true" aria-expanded="false" role="menuitem">${data.parent.name}</a>`;
            list += `<ul role="menu" class="hs-menu-children-wrapper">`;
            data.children.forEach(child => {
                let dynamicClass2 = child.children.length > 1 ? 'hs-item-has-children' : '';
                list += `<li class="hs-menu-item hs-menu-depth-2 ${dynamicClass2}" role="none"><a href="${child.parent.link}" aria-haspopup="true" aria-expanded="false" role="menuitem"><p class="menu-name-d2">${child.parent.name}</p><p class="menu-desc-d2">${child.parent.description}</p></a>`;
                list += `<ul class="hs-menu-children-wrapper" role="menu">`;
                child.children.forEach(subChild => {
                    list += `<li class="hs-menu-item hs-menu-depth-3" role="none"><a href="https://www.komodohealth.com/industries/commercial" role="menuitem">${subChild.name}</a></li>`;
                });
                list += `</ul> </li>`;
            });
            list += `</ul> </li>`;
            return list;
        }
    });
    return result;
}