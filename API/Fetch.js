
async function getData() {
    const url = "https://dummyjson.com/todos"
    try {
        let res = [];

        const response = await fetch(url)
        if(!response.ok) throw new Error(`Response status: ${response.status}`)
        const data = await response.json()
        console.log(data);
        console.log(data.todos.map((item) => {
            res.push(item.todo)
            
        }));
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

getData()

