const now = dayjs();
const currentTime = now.format('HH:mm:ss');
console.log(currentTime);

const datetime = document.getElementById("current-time");

const time = dayjs().format("dddd, MMMM D YYYY, h:mm A");

datetime.innerHTML = time;