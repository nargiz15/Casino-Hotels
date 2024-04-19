const HotelRooms = [
    {
        img: "./../images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const hotelRoomsContainer = document.getElementById('hotelRoomsContainer');

    for (let i = 0; i < 9; i++) {
        HotelRooms.forEach(room => {
            const div = document.createElement('div');
            div.classList.add('hotelRoom');

            div.innerHTML = `
                <img src="${room.img}" alt="Hotel Room Image">
                <div class="rates">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
                <h2>${room.title}</h2>
                <p>${room.description}</p>
                <button>${room.btnText}</button>
            `;

            hotelRoomsContainer.appendChild(div);
        });
    }
});

function showSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="flex"
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="none"
}
