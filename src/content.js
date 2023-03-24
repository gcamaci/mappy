import { fetchEvents } from "./fetchData";
import { createBook } from "./workbook";
const setListener = () => {
    const event_code = document.getElementById('event_code');
    const submit_btn = document.getElementById('submit_btn');

    submit_btn.addEventListener('click', async (e) => {
        e.preventDefault()
        const shows = await fetchEvents(event_code.value)
        createBook(shows)

    })

}
export { setListener }