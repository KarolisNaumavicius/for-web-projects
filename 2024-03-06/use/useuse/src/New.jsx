import { useState } from 'react';

const Post = () => {
const [posts, setPosts] = useState('');


    useEffect(() => {
        let data = JSON.parse('data');
        if(!data)
        return;

        let newData = JSON.parse(data);
        setPosts(newData)
    },[])

const submitForm = () => {

const formData = new FormData(e.target);

let data = {};

for(const [key, value] of formData.entries()){
    data[key[0]] = value[1];
}

let localData = localStorage.getItem('data');

if(localData){

try{
    let convertedData = JSON.parse(localData);
    convertedData.push(data);
    let stringifyedData = JSON.stringify(convertedData);
    localStorage.setItem(stringifyedData);

} catch(error) {
    console.log
} 

} else {
    localStorage.setItem(JSON.stringify([data]));
}



}

return(
<>
<table>
    <thead><th>
        <td>Title</td>
        <td>Text</td>
        </th></thead>
    <tbody>
       {posts.map((data,index) => <tr>
            <td>{data.title}</td>
            <td>{data.text}</td>
            </tr>
            )}
    </tbody>


</table>
<form action="" onSubmit={submitForm} >
<label htmlFor=""></label>
<input type="text" name="title" />
<label htmlFor=""></label>
<input type="text" name="text" />
<button>Button</button>
</form>
</>
)}