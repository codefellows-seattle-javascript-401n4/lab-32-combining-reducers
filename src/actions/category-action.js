import newCategory from '../lib/newCategory';

export const category_create = category => {
    return {
        type: 'CATEGORY_CREATE',
        category
    }
}

export const category_update = category => {
    return {
        type: 'CATEGORY_UPDATE',
        category: category
    }
}

export const category_delete = id => {
    return {
        type: 'CATEGORY_DESTROY',
        id
    }
}

export const category_toggle = id => {
    return {
        type: 'CATEGORY_TOGGLE',
        id
    }
}