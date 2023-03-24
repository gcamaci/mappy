import { fetchEvents } from "./fetchData.js";

const setListener = () => {
    const event_code = document.getElementById('event_code');
    const submit_btn = document.getElementById('submit_btn');

    submit_btn.addEventListener('click',(e) => {
        e.preventDefault()
        fetchEvents(event_code.value)
    })

}
export { setListener }