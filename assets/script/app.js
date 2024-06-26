const HotelRooms = [
    {   Id: 1,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 2,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 3,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 4,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 5,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 6,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 7,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 8,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    },
    {   Id: 9,
        img: "./../assets/images/hotelRoom1.png",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint, itaque amet laudantium atque ut.",
        btnText: "Read More"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const hotelRoomsContainer = document.getElementById('hotelRoomsContainer');

    // for (let i = 0; i < 9; i++) {
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
);

function showSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="flex"
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="none"
}
