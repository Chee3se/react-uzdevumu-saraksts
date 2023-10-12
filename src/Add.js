export default function Add() {
    function handleSubmit(event) {
        //Jk, jk
        event.preventDefault()
        //Values
        let text = document.getElementById("text").value
        let userId
        //Main stuff
        isNaN(parseInt(text.split(" ")[0])) ? userId = 0 : userId = parseInt(text.split(" ")[0])
        text = isNaN(parseInt(text.split(" ")[0])) ? text : text.slice(2)
        //Getting data from localStorage
        const Data = JSON.parse(localStorage.getItem('data'))
        //Saving to json
        for (let index = 0; index < Data.length; index++) {
            Data[index].id += 1;
        }
        Data.unshift({"userId":userId,"id":1,"title":text,"completed":false})
        //Saving the data
        localStorage.setItem('data', JSON.stringify(Data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="text" name="text" required></input>
            <input type="submit" value="Submit"></input>
        </form>
    );
}