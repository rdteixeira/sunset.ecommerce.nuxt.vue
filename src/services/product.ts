class ProductService {

    public constructor() {

    }

    public all(page = null) {
        return useFetch('http://127.0.0.1:8000/api/product' + (page ? '?page='+page : ''), {lazy: true});        
        //const { data, error, refresh, execute, status } = useFetch('https://reqres.in/api/users?delay=1'/*'http://localhost:8000/api/product'*/, { lazy: true })
        //return { data, error, refresh, execute, status, loading: () => status.value != 'success' }
    }

}

const instance = new ProductService()

export { instance as ProductService }