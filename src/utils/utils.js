const slugify = (text) => {
    text = text.toString().toLowerCase().trim();
  
    const sets = [
        {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]'},
        {to: 'c', from: '[ÇĆĈČ]'},
        {to: 'd', from: '[ÐĎĐÞ]'},
        {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
        {to: 'g', from: '[ĜĞĢǴ]'},
        {to: 'h', from: '[ĤḦ]'},
        {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
        {to: 'j', from: '[Ĵ]'},
        {to: 'ij', from: '[Ĳ]'},
        {to: 'k', from: '[Ķ]'},
        {to: 'l', from: '[ĹĻĽŁ]'},
        {to: 'm', from: '[Ḿ]'},
        {to: 'n', from: '[ÑŃŅŇ]'},
        {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
        {to: 'oe', from: '[Œ]'},
        {to: 'p', from: '[ṕ]'},
        {to: 'r', from: '[ŔŖŘ]'},
        {to: 's', from: '[ŚŜŞŠȘ]'},
        {to: 'ss', from: '[ß]'},
        {to: 't', from: '[ŢŤ]'},
        {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
        {to: 'w', from: '[ẂŴẀẄ]'},
        {to: 'x', from: '[ẍ]'},
        {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
        {to: 'z', from: '[ŹŻŽ]'},
        {to: '-', from: '[·/_,:;]'},
        {to: '', from: '[\']'},
        
    ];
  
    sets.forEach(set => {
        text = text.replace(new RegExp(set.from,'gi'), set.to)
    });
  
    return text
        .replace(/\s+/g, '-')    // Replace spaces with -
        .replace(/[^-a-zа-я0-9\u0370-\u03ff\u1f00-\u1fff]+/g, '') // Remove all non-word or digit chars
        .replace(/--+/g, '-')    // Replace multiple - with single -
        .replace(/^-+/, '')      // Trim - from start of text
        .replace(/-+$/, '')      // Trim - from end of text
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const nestify = (obj) => {
    const minDepth = Math.min.apply(Math, obj.map(item => item.depth))
    let normalizedObj = JSON.parse(JSON.stringify(obj)) // Create a deep copy
    
    normalizedObj.map((item) => {
        item.depth -= minDepth
        return item
    })
    
    let nested = []
    let lastIndex = []
    let currentDepth = 0

    const getItem = (arrIndex) => {
        let item = nested
        for(let i in arrIndex) {
            item = item[arrIndex[i]].childrens
        }
        return item
    }

    for(let i in normalizedObj) {
        const { value, depth } = normalizedObj[i]
        let newItem = { value: value, childrens: [] }
        
        if (Object.keys(nested).length === 0){
            nested.push(newItem)
            lastIndex.push(currentDepth)
        } else if (depth === 0){
            nested.push(newItem)
            lastIndex = lastIndex.slice(0, 1)
            lastIndex[depth]++
        } else if (lastIndex.length - 1 === depth) {
            let toAppend = getItem(lastIndex.slice(0, -1))
            toAppend.push(newItem)
            lastIndex[depth]++

        } else if (lastIndex.length - 1 < depth) { // If the current item is inside the past one
            let toAppend = getItem(lastIndex)
            toAppend.push(newItem)
            lastIndex[depth] = 0
        } else if (lastIndex.length - 1 > depth) { // If the current item is outside the past one
            const depthDifference = depth - (lastIndex.length - 1)
            let toAppend = getItem(lastIndex.slice(0, -(1 + depthDifference)))
            toAppend.push(newItem)
            lastIndex = lastIndex.slice(0, -depthDifference)
            lastIndex[depth]++
        }        
    }

    return nested
}

const debounce = (fn, ms) => {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this)
        }, ms)
    };
}

const objectMap = (obj, fn) => {
    return Object.fromEntries(
        Object.entries(obj).map(
            ([k, v], i) => [k, fn(v, k, i)]
        )
    )
}

module.exports = { slugify, capitalize, nestify, debounce, objectMap }