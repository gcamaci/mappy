const setListener = () => {
    const event_code = document.getElementById('event_code');
    const submit_btn = document.getElementById('submit_btn');

    submit_btn.addEventListener('click',() => {
        console.log(event_code.value)
    })

}
export { setListener }