const mockData = {
    data: [
        {
            status: 'div',
            value: 'dell lee'
        },

    ],
    success: true
};

export default {
    get(url) {
        if (url === '/undolist.json') {

            return new Promise((resolve, reject) => {
                if (this.success) {
                    resolve(mockData)
                } else {
                    reject(new Error());
                }
            })
        }
    }
}
